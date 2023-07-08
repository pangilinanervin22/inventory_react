import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useModalStore } from "../common/ModalContainer";
import styles from "../../styles/components/FormModal.module.scss";
import { useMutation } from "@tanstack/react-query";
import { mainQueryClient } from "../../api";
import { editInfoEmployee } from "../../api/EmployeeApi";
import PictureAdd from "./PictureAdd";
import { iEmployee } from "../../utils/types";
import { useState } from "react";

const personSchema = z.object({
    name: z.string()
        .min(2, { message: "Name must contain at least 2 character(s)" })
        .max(70, { message: "Name max length must be lower than 70" }),
    contact_no: z.string()
        .min(1, { message: "Contact Number is required" })
        .max(15, { message: "Contact Number must be lower than 15" }),
    username: z.string().email()
        .min(8, { message: "Username must contain at least 8 character(s)" })
        .max(40, { message: "Username max length must be lower than 40" }),
    position: z.string()
        .min(2, { message: "Brand must contain at least 2 character(s)" })
        .max(70, { message: "Brand max length must be lower than 70" }),
});

type FormSchemaType = z.infer<typeof personSchema>;

interface thisProps {
    defaultValues: iEmployee,
    positionEditable: boolean
}


export default function EmployeeEditModal({ defaultValues, positionEditable }: thisProps) {

    const [selectedFile, setSelectedFile] = useState<string>(defaultValues.img_src);

    const { closeModal } = useModalStore();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormSchemaType>({
        resolver: zodResolver(personSchema),
        defaultValues
    });

    const { mutate } = useMutation(editInfoEmployee, {
        onSuccess: () => {
            mainQueryClient.invalidateQueries({ queryKey: ["employee"] })
            closeModal();
        },
    });

    const submit = (data: FormSchemaType) => {
        mutate({ ...data, employee_id: defaultValues.employee_id, img_src: selectedFile });
    };

    return (
        <section className={styles.main_group}>
            <PictureAdd profilePicture={selectedFile} changePicture={onChangePicture} />
            <div className={styles.container}>
                <h2 className={styles.form_title}>Edit Employee</h2>
                <form className={styles.form_container} onSubmit={handleSubmit(submit)}>
                    <div className={`${styles.form_input} ${errors.name && styles.error_input}`}>
                        <label htmlFor="name">Name</label>
                        <input {...register("name")} id="name" name="name" type="text" />
                        {errors.name && <span>{String(errors.name?.message)}</span>}
                    </div>
                    <div className={`${styles.form_input} ${errors.username && styles.error_input}`}>
                        <label htmlFor=".username">Username</label>
                        <input {...register("username")} id=".username" name="username" type="text" />
                        {errors.username && <span>{String(errors.username?.message)}</span>}
                    </div>
                    <div className={`${styles.form_input} ${errors.contact_no && styles.error_input}`}>
                        <label htmlFor="price">Phone Number</label>
                        <input {...register("contact_no")} id="contact_no" name="contact_no" type="text" />
                        {errors.contact_no && <span>{String(errors.contact_no?.message)}</span>}
                    </div>
                    <div className={`${styles.form_input} ${errors.position && styles.error_input}`}>
                        <label htmlFor="brand">Position</label>
                        <select
                            {...register("position")}
                            id="position" name="position"
                            disabled={!positionEditable || defaultValues.position == "owner"}
                            onChange={(e) => setValue("position", e.target.value)}
                        >
                            <option key={"guest"} value={"guest"}>
                                Guess
                            </option>
                            <option key={"employee"} value={"employee"}>
                                Employee
                            </option>
                            <option key={"admin"} value={"admin"}>
                                Admin
                            </option>
                        </select>
                        {errors.position && <span>{String(errors.position?.message)}</span>}

                    </div>


                    <div className={styles.button_group}>
                        <button type="submit">Save</button>
                        <button onClick={() => closeModal()}>Cancel</button>
                    </div>

                </form>
            </div>
        </section>
    )

    function onChangePicture(input: string) {
        setSelectedFile(input);
    }
}
