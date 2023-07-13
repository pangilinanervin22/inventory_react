import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModalStore } from "../common/ModalContainer";
import styles from "../../styles/components/FormModal.module.scss";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProduct } from "../../api/ProductApi";
import { mainQueryClient } from "../../api";
import { updateStock } from "../../api/StockApi";
import { iProduct } from "../../utils/types";
import { convertStringDate } from "../../utils/date";

const thisProps = z.object({
    product_id: z.string()
        .min(2, { message: "Product is required" }),
    quantity: z.number()
        .min(1, { message: "Quantity is required" })
        .max(100, { message: "Quantity must be lower than 100" }),
    production_date: z.string(),
    expiration_date: z.string(),
});

type FormSchemaType = z.infer<typeof thisProps>;


export default function StockEditModal({ defaultValues }: { defaultValues: any }) {
    const { closeModal } = useModalStore();
    const { register, handleSubmit, setValue, formState: { errors }, getValues } = useForm<FormSchemaType>({
        resolver: zodResolver(thisProps),
        defaultValues: {
            ...defaultValues,
            production_date: convertStringDate(defaultValues.production_date),
            expiration_date: convertStringDate(defaultValues.expiration_date),
        }
    });

    console.log(defaultValues, getValues());


    const { data: productList, isSuccess } = useQuery(["product"], getProduct);
    const { mutate } = useMutation(updateStock, {
        onSuccess: () => {
            mainQueryClient.invalidateQueries({ queryKey: ["stock"] })
            closeModal();
        },
    });

    const submit = (data: FormSchemaType) => {
        mutate({
            ...data,
            expiration_date: new Date(data.expiration_date),
            production_date: new Date(data.production_date),
            stock_id: defaultValues.stock_id
        });
    };

    if (!isSuccess)
        return <div>Loading...</div>;

    return (
        <section className={styles.container}>
            <h1 className={styles.form_title}>Edit Stock</h1>
            <form className={styles.form_container} onSubmit={handleSubmit(submit)}>
                <div className={`${styles.form_input} ${errors.product_id && styles.error_input}`}>
                    <label htmlFor="product">Product</label>
                    <select {...register("product_id")} onChange={(e) => setValue("product_id", e.target.value)} id="product" name="product" >
                        {productList &&
                            productList.map((country: iProduct) => (
                                <option key={country.product_id} value={country.product_id}>
                                    {country.name}
                                </option>
                            ))}
                    </select>
                    {errors.product_id && <span>{String(errors.product_id?.message)}</span>}
                </div>
                <div className={`${styles.form_input} ${errors.quantity && styles.error_input}`}>
                    <label htmlFor="quantity">Quantity</label>
                    <input {...register("quantity", { valueAsNumber: true })} id="quantity" name="quantity" type="number" />
                    {errors.quantity && <span>{String(errors.quantity?.message)}</span>}
                </div>
                <div className={`${styles.form_input} ${errors.production_date && styles.error_input}`}>
                    <label htmlFor="production_date">Production Date</label>
                    <input {...register("production_date")} id="production_date" name="production_date" type="date" />
                    {errors.production_date && <span>{String(errors.production_date?.message)}</span>}
                </div>
                <div className={`${styles.form_input} ${errors.expiration_date && styles.error_input}`}>
                    <label htmlFor="expiration_date">Epiration Date</label>
                    <input {...register("expiration_date")} id="expiration_date" name="expiration_date" type="date" />
                    {errors.expiration_date && <span>{String(errors.expiration_date?.message)}</span>}
                </div>
                <div className={styles.button_group}>
                    <button type="submit">Save</button>
                    <button onClick={() => closeModal()}>Cancel</button>
                </div>

            </form>
        </section>
    )

}

