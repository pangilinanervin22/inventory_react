import styles from "../styles/pages/SignUp.module.scss";


export default function SignUp() {

    return (
        <main className={styles.signup}>
            <section className={styles.container}>
                <h1>Sign Up</h1>
                <div className={styles.privacy_policy}>
                    <input type="checkbox" name="check" id="check" />
                    <p>By signing up, you are setting up a account and agree to our Privacy Policy.</p>
                </div>

                <form className={styles.form} action="">

                    <div>
                        <label>First Name</label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type="tel" required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" required />
                    </div>
                    <div className={styles.error}>
                        <label>Confirm Password</label>
                        <input type="password" required />
                        <label className={styles.error}>Password Don't Match</label>
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

