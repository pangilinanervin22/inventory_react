import { Link } from "react-router-dom";
import styles from "../styles/components/navbar.module.scss";
import ReactLogo from '../assets/react.svg';


export default function NavBar() {

    return (
        <>
            <div className={styles.container}>
                <img src={ReactLogo} alt="" />
                <div className={styles.nav}>
                    <div>
                        <img src={ReactLogo} alt="" />
                        <Link to="/"><h1>HOME</h1></Link >
                    </div>
                    <div>
                        <img src={ReactLogo} alt="" />
                        <Link to="/sample"><h1>sample</h1></Link>
                    </div>
                    <div>
                        <img src={ReactLogo} alt="" />
                        <Link to="/register"><h1>logout</h1></Link>
                    </div>
                </div>

                <img src={ReactLogo} alt="" />
            </div>
        </>
    )
}

