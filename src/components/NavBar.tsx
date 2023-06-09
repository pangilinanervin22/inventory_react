import { Link } from "react-router-dom";
import styles from "../styles/components/navbar.module.scss";

export default function NavBar() {

    return (
        <>
            <div className={styles.nav}>
                <Link to="/"><h1>HOME</h1></Link >
                <Link to="/sample"><h1>sample</h1></Link>
            </div>
        </>
    )
}

