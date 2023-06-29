import { zodResolver } from "@hookform/resolvers/zod";
import styles from "../styles/pages/SignUp.module.scss";
import z from 'zod'
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TestInput from "../components/common/InputPassword";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { employeeLogin } from "../api";

const personSchema = z.object({
    firstName: z.string()
        .min(2, { message: "FirstName must contain at least 2 character(s)" })
        .max(30, { message: "FirstName max length must be lower than 30" }),
    lastName: z.string()
        .min(2, { message: "LastName must contain at least 2 character(s)" })
        .max(30, { message: "LastName max length must be lower than 30" }),
    username: z.string().email()
        .min(8, { message: "Username must contain at least 8 character(s)" })
        .max(40, { message: "Username max length must be lower than 40" }),
    contact_no: z.string()
        .min(8, { message: "Number must contain at least 8 character(s)" })
        .max(20, { message: "Number max length must be lower than 20" }),
    password: z.string()
        .min(8, { message: "Password must contain at least 8 character(s)" })
        .max(20, { message: "Username max length must be lower than 20" }),
    confirm: z.string().min(8),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
});;

type FormSchemaType = z.infer<typeof personSchema>;


export default function SignUp() {
    const navigate = useNavigate();
    const [isConfrim, setIsConfrim] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
        resolver: zodResolver(personSchema),
    });

    const { mutate, isLoading, reset } = useMutation(employeeLogin, {
        onSuccess: (res) => {
            // Login successful, redirect or perform any desired actions
            localStorage.setItem("token", JSON.stringify(res.data));
            window.location.href = '/';
            reset();
        },
    });

    const onSubmit: SubmitHandler<FormSchemaType> = (data: any) => {
        console.log(data)
    };

    return (
        <main className={styles.signup}>
            <section className={styles.container}>
                <h1>Sign Up</h1>
                <div className={styles.privacy_policy}>
                    <input type="checkbox" name="check" id="check" checked={isConfrim} onChange={() => setIsConfrim(!isConfrim)} />
                    <p>By signing up, you are setting up a account and agree to our Privacy Policy.</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={`${styles.form_input} ${errors.firstName && styles.error_input}`}>
                        <label>First Name</label>
                        <input {...register("firstName")} id="firstName" name="firstName" type="text" />
                        {errors.firstName && <p>{String(errors.firstName?.message)}</p>}
                    </div>
                    <div className={`${styles.form_input} ${errors.lastName && styles.error_input}`}>
                        <label>Last Name</label>
                        <input {...register("lastName")} id="lastName" name="lastName" type="text" />
                        {errors.lastName && <p>{String(errors.lastName?.message)}</p>}
                    </div>
                    <div className={`${styles.form_input} ${errors.username && styles.error_input}`}>
                        <label>Username</label>
                        <input {...register("username")} id="username" name="username" type="text" />
                        {errors.username && <p>{String(errors.username?.message)}</p>}
                    </div>
                    <div className={`${styles.form_input} ${errors.contact_no && styles.error_input}`}>
                        <label>Contact Number</label>
                        <input {...register("contact_no")} id="contact_no" name="contact_no" type="text" />
                        {errors.contact_no && <p>{String(errors.contact_no?.message)}</p>}
                    </div>
                    <div className={`${styles.form_input} ${errors.password && styles.error_input}`}>
                        <label htmlFor="password">Password</label>
                        <TestInput path="password" register={register} />
                        {errors.password && <span>{String(errors.password?.message)}</span>}
                    </div>
                    <div className={`${styles.form_input} ${errors.confirm && styles.error_input}`}>
                        <label>Confirm Password</label>
                        <TestInput path="confirm" register={register} />
                        {errors.confirm && <p>{String(errors.confirm?.message)}</p>}
                    </div>

                    {/* <TestInput
                        name="password"
                        label="Password"
                        register={register}
                    /> */}
                    <button type="submit">Sign Up</button>
                </form>
                <div className={styles.link_signin}>
                    <div>
                        <a onClick={() => navigate("/")}>Already have a acount?</a>
                        <p>Log in</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

