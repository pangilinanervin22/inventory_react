import styles from "../styles/pages/Login.module.scss";


export default function Login() {

    return (
        <main className={styles.login}>
            <div className={styles.container}>
                <section className={styles.input_container}>
                    <div>
                        <h2>Log In</h2>
                        <p>Welcome back! Login to access Ajapco Inventory System.</p>
                    </div>

                    <form className={styles.form} action="">
                        <div>
                            <label htmlFor="username"><h3>Email</h3></label>
                            <input id="username" name="username" type="text" min={8} max={30} required />
                        </div>
                        <div>
                            <label htmlFor="password"><h3>Password</h3></label>
                            <input id="password" name="password" type="password" minLength={8} maxLength={70} required />
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

