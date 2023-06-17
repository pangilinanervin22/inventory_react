import { NavLink } from "react-router-dom";
import styles from "../styles/components/navbar.module.scss";
import { ReactComponent as ReactLogo } from "../assets/react.svg";
import { ReactComponent as Logo } from "../assets/search.svg";
import User from "../assets/user.png";

export default function NavBar() {
    return (
        <>
            <div className={styles.container}>
                <ReactLogo />
                <div className={styles.nav}>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""} >
                        <Logo />
                        <h1>Report</h1>
                    </NavLink>
                    <NavLink to="/product" className={({ isActive }) => isActive ? styles.active : ""} >
                        <Logo />
                        <h1>Product</h1>
                    </NavLink>
                    <NavLink to="/inventory" className={({ isActive }) => isActive ? styles.active : ""} >
                        <Logo />
                        <h1>Inventory</h1>
                    </NavLink>
                    <NavLink to="/sales" className={({ isActive }) => isActive ? styles.active : ""} >
                        <Logo />
                        <h1>Sales</h1>
                    </NavLink>
                    <NavLink to="/employee" className={({ isActive }) => isActive ? styles.active : ""} >
                        <Logo />
                        <h1>Employee</h1>
                    </NavLink>
                </div>

                <div>
                    <h3>employee</h3>
                    <img
                        className={styles.user_photo}
                        src={User}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}
