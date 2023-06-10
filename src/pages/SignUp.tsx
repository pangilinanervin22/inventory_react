import styles from "../styles/pages/SignUp.module.scss";


export default function SignUp() {

    return (
        <main className={styles.signup}>
            <section className={styles.container}>
                <div>
                    <h2>Sign Up</h2>

                    <p>Welcome back! Login to access Ajapco Inventory System.</p>
                </div>

                <form className={styles.form} action="">
                    <div>
                        <h3>First Name</h3>
                        <input type="text" required />
                    </div>
                    <div>
                        <h3>Last Name</h3>
                        <input type="text" required />
                    </div>
                    <div>
                        <h3>Email Address</h3>
                        <input type="text" required />
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <input type="tel" required />
                    </div>
                    <div>
                        <h3>Password</h3>
                        <input type="password" required />
                    </div>
                    <div>
                        <h3>Confirm Password</h3>
                        <input type="password" required />
                    </div>
                    <div>
                        <button>Sign Up</button>
                        <div className={styles.link_signin}>
                            <a href="*">Don't have an account?</a>
                            <p>Sign Up</p>
                        </div>
                    </div>
                </form>

            </section>
        </main>
    )
}

