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
                            <h3>Email</h3>
                            <input type="text" required />
                        </div>

                        <div>
                            <h3>Password</h3>
                            <input type="password" />
                        </div>

                        <button>Login</button>
                    </form>

                    <div className={styles.link_signin}>
                        <a href="*">Don't have an account?</a>
                        <p>Sign Up</p>
                    </div>
                </section>
                <section className={styles.image_container} />

            </div>
        </main>
    )
}

