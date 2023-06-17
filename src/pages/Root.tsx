import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "../styles/pages/Root.module.scss";



export default function Root() {


    return (
        <main className={styles.body}>
            <NavBar />
            <section className={styles.main}>
                <Outlet />
            </section>
        </main>
    )
}

