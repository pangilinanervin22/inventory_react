import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModalStore } from "../common/ModalContainer";
import styles from "../../styles/components/FormModal.module.scss";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProduct } from "../../api/ProductApi";
import { mainQueryClient } from "../../api";
import { iProduct } from "../../utils/types";
import { postSales } from "../../api/SalesApi";


const thisProps = z.object({
    product_id: z.string()
        .min(2, { message: "Product is required" }),
    total_price: z.number()
        .min(1, { message: "Quantity is required" })
        .max(100000, { message: "Quantity must be lower than 100000" }),
    sales_date: z.date(),
});

type FormSchemaType = z.infer<typeof thisProps>;


export default function SaleskAddModal() {
    const { closeModal } = useModalStore();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormSchemaType>({
        resolver: zodResolver(thisProps),
    });

    const { data: productList, isSuccess } = useQuery(["product"], getProduct);
    const { mutate } = useMutation(postSales, {
        onSuccess: () => {
            mainQueryClient.invalidateQueries({ queryKey: ["sales"] })
            closeModal();
        },
    });

    const submit = (data: FormSchemaType) => {
        mutate(data);
        // console.log(data);
    };

    if (!isSuccess)
        return <div>Loading...</div>;

    return (
        <section className={styles.container}>
            <h1 className={styles.form_title}>Add Sales</h1>
            <form className={styles.form_container} onSubmit={handleSubmit(submit)}>
                <div className={`${styles.form_input} ${errors.product_id && styles.error_input}`}>
                    <label htmlFor="product">Product</label>
                    <select {...register("product_id")}
                        onChange={(e) => setValue("product_id", e.target.value)}
                        id="product" name="product" >
                        {productList &&
                            productList.map((item: iProduct) => (
                                <option key={item.product_id} value={item.product_id}>
                                    {item.name}
                                </option>
                            ))}
                    </select>
                    {errors.product_id && <span>{String(errors.product_id?.message)}</span>}
                </div>
                <div className={`${styles.form_input} ${errors.total_price && styles.error_input}`}>
                    <label htmlFor="total_price">Sales Total</label>
                    <input {...register("total_price", { valueAsNumber: true })} id="total_price" name="total_price" type="number" />
                    {errors.total_price && <span>{String(errors.total_price?.message)}</span>}
                </div>
                <div className={`${styles.form_input} ${errors.sales_date && styles.error_input}`}>
                    <label htmlFor="sales_date">Epiration Date</label>
                    <input {...register("sales_date", { valueAsDate: true })} id="sales_date" name="sales_date" type="date" />
                    {errors.sales_date && <span>{String(errors.sales_date?.message)}</span>}
                </div>

                <div className={styles.button_group}>
                    <button type="submit">Save</button>
                    <button onClick={() => closeModal()}>Cancel</button>
                </div>

            </form>
        </section>
    )


}
