import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../styles/pages/Login.module.scss";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const personSchema = z.object({
    username: z.string(),
    password: z.number()
});

type FormSchemaType = z.infer<typeof personSchema>;


export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
        resolver: zodResolver(personSchema),
    });

    const onSubmit: SubmitHandler<FormSchemaType> = (data: any) => console.log(data);

    console.log(errors);


    return (
        <main className={styles.login}>
            <div className={styles.container}>
                <section className={styles.input_container}>
                    <div>
                        <h1>Log In</h1>
                        <p>Welcome back! Login to access Ajapco Inventory System.</p>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="username">Email</label>
                            <input {...register("username", { min: 8, max: 30, required: true })} id="username" name="username" type="text" />
                            {errors.username && <span>{String(errors.username?.type)}</span>}

                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input {...register("password", { min: 8, max: 30, required: true })} id="password" name="password" type="password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>

                    <div className={styles.link_signin}>
                        <a href="/register">Don't have an account?</a>
                        <p>Sign Up</p>
                    </div>
                </section>
                <section className={styles.image_container} />

            </div>
        </main>
    )
}

