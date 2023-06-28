import styles from "../styles/components/TableForm.module.scss";

export default function Sales() {

    return (
        <>
            <section className={styles.container}>
                <form >
                    <h2>Add Product Information</h2>
                    <div>
                        <label htmlFor="">Product Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Product Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Product Name</label>
                        <input type="text" />
                    </div>

                    <div>
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>

                </form>
            </section>
        </>
    )
}
