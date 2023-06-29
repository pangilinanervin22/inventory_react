import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { employeeLogin } from "../api";
import TestInput from "../components/common/TestInput";
import styles from "../styles/pages/Login.module.scss";

const personSchema = z.object({
    username: z.string()
        .min(4, { message: "UserName must contain at least 4 character(s)" })
        .max(70, { message: "UserName max length must be lower than 70" }),
    password: z.string()
        .min(4, { message: "Password must contain at least 4 character(s)" })
        .max(70, { message: "Password max length must be lower than 70" }),
});

type FormSchemaType = z.infer<typeof personSchema>;


export default function Login() {
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormSchemaType>({
        resolver: zodResolver(personSchema),
    });

    const { mutate, isLoading } = useMutation(employeeLogin, {
        onSuccess: (res) => {
            // Login successful, redirect or perform any desired actions
            localStorage.setItem("token", JSON.stringify(res.data));
            window.location.href = '/';
        },
    });

    const onSubmit = (data: FormSchemaType) => {
        mutate(data);

    };

    return (
        <main className={styles.canvas}>
            <div className={styles.container}>
                <section className={styles.content_card}>
                    <div>
                        <h1>Log In</h1>
                        <p>Welcome back! Login to access Ajapco Inventory System.</p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={`${styles.form_input} ${errors.username && styles.error_input}`}>
                            <label htmlFor="username">Email</label>
                            <input {...register("username")} id="username" name="username" type="text" />
                            {errors.username && <span>{String(errors.username?.message)}</span>}
                        </div>
                        <div className={`${styles.form_input} ${errors.password && styles.error_input}`}>
                            <label htmlFor="password">Password</label>
                            <TestInput path="password" register={register} />
                            {errors.password && <span>{String(errors.password?.message)}</span>}
                        </div>
                        <button disabled={isLoading} type="submit">Login</button>
                    </form>


                    <div className={styles.link_signin}>
                        <a onClick={() => navigate('/signup')}>Don't have an account?</a>
                        <p>Sign Up</p>
                    </div>
                </section>
                <section className={styles.image_container} />
            </div>
        </main>
    )
}

