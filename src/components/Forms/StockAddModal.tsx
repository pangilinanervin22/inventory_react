import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModalStore } from "../common/ModalContainer";
import styles from "../../styles/components/FormModal.module.scss";
import { iProduct } from "../../utils/types";
import { requestSuccess } from "../../api";
import { listProduct } from "../../api/fake.data/product";

const thisProps = z.object({
    product_id: z.string()
        .min(2, { message: "Product is required" }),
    quantity: z.number()
        .min(1, { message: "Quantity is required" })
        .max(100, { message: "Quantity must be lower than 100" }),
    production_date: z.date(),
    expiration_date: z.date(),
});

type FormSchemaType = z.infer<typeof thisProps>;


export default function StockAddModal() {
    const { closeModal } = useModalStore();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormSchemaType>({
        resolver: zodResolver(thisProps),
    });

    const submit = (data: FormSchemaType) => {
        requestSuccess("Successfully add stock")
        closeModal();
    };

    return (
        <section className={styles.container}>
            <h1 className={styles.form_title}>Add Stock</h1>
            <form className={styles.form_container} onSubmit={handleSubmit(submit)}>
                <div className={`${styles.form_input} ${errors.product_id && styles.error_input}`}>
                    <label htmlFor="product">Product</label>
                    <select {...register("product_id")}
                        onChange={(e) => setValue("product_id", e.target.value)}
                        id="product" name="product" >
                        {listProduct.map((item: iProduct) => (
                            <option key={item.product_id} value={item.product_id}>
                                {item.name}
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
                    <input {...register("production_date", { valueAsDate: true })} id="production_date" name="production_date" type="date" />
                    {errors.production_date && <span>{String(errors.production_date?.message)}</span>}
                </div>
                <div className={`${styles.form_input} ${errors.expiration_date && styles.error_input}`}>
                    <label htmlFor="expiration_date">Epiration Date</label>
                    <input {...register("expiration_date", { valueAsDate: true })} id="expiration_date" name="expiration_date" type="date" />
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
