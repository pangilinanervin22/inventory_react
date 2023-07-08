import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModalStore } from "../common/ModalContainer";
import styles from "../../styles/components/FormModal.module.scss";
import { useMutation } from "@tanstack/react-query";
import { postProduct } from "../../api/ProductApi";
import { mainQueryClient } from "../../api";


const personSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must contain at least 2 character(s)" })
    .max(70, { message: "Name max length must be lower than 70" }),
  price: z.number()
    .min(1, { message: "Price is required" })
    .max(1000, { message: "Price must be lower than 1000" }),
  brand: z.string()
    .min(2, { message: "Brand must contain at least 2 character(s)" })
    .max(70, { message: "Brand max length must be lower than 70" }),
});

type FormSchemaType = z.infer<typeof personSchema>;


export default function ProductAddFormModal() {
  const { closeModal } = useModalStore();
  const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
    resolver: zodResolver(personSchema),
  });

  const { mutate } = useMutation(postProduct, {
    onSuccess: () => {
      mainQueryClient.invalidateQueries({ queryKey: ["product"] })
      closeModal();
    },
  });

  const submit = (data: FormSchemaType) => {
    mutate(data);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.form_title}>Add Product</h2>
      <form className={styles.form_container} onSubmit={handleSubmit(submit)}>
        <div className={`${styles.form_input} ${errors.name && styles.error_input}`}>
          <label htmlFor="name">Product Name</label>
          <input {...register("name")} id="name" name="name" type="text" />
          {errors.name && <span>{String(errors.name?.message)}</span>}
        </div>
        <div className={`${styles.form_input} ${errors.price && styles.error_input}`}>
          <label htmlFor="price">Price</label>
          <input {...register("price", { valueAsNumber: true })} id="price" name="price" type="number" />
          {errors.price && <span>{String(errors.price?.message)}</span>}
        </div>
        <div className={`${styles.form_input} ${errors.brand && styles.error_input}`}>
          <label htmlFor="brand">Brand</label>
          <input {...register("brand")} id="brand" name="brand" type="text" />
          {errors.brand && <span>{String(errors.brand?.message)}</span>}
        </div>

        <div className={styles.button_group}>
          <button type="submit">Save</button>
          <button onClick={() => closeModal()}>Cancel</button>
        </div>

      </form>
    </section>
  )
}
