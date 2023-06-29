import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from "../styles/pages/Root.module.scss";
import ModalContainer from "../components/common/ModalContainer";



export default function Root() {


    return (
        <main className={styles.main}>
            <NavBar />
            <section className={styles.main_content}>
                <Outlet />
            </section>
            <ModalContainer />
        </main>
    )
}

