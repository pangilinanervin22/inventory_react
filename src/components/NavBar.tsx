import { NavLink } from "react-router-dom";
import styles from "../styles/components/navbar.module.scss";
import { ReactComponent as ReactLogo } from "../assets/react.svg";
import { ReactComponent as Search } from "../assets/svg/Search.svg";
import { ReactComponent as Report } from "../assets/svg/Report.svg";
import { ReactComponent as Product } from "../assets/svg/Product.svg";
import { ReactComponent as Inventory } from "../assets/svg/Inventory.svg";
import { ReactComponent as Sales } from "../assets/svg/Sales.svg";

import User from "../assets/user.png";

export default function NavBar() {
    return (
        <>
            <div className={styles.container}>
                <ReactLogo />
                <div className={styles.nav}>
                    <NavLink to="/" style={{textDecoration: "none"}} className={({ isActive }) => isActive ? styles.active : ""} >
                        <Report />
                        <h2>Report</h2>
                    </NavLink>
                    <NavLink to="/product" className={({ isActive }) => isActive ? styles.active : ""} >
                        <Product />
                        <h2>Product</h2>
                    </NavLink>
                    <NavLink to="/inventory" className={({ isActive }) => isActive ? styles.active : ""} >
                        <Inventory />
                        <h2>Inventory</h2>
                    </NavLink>
                    <NavLink to="/sales" className={({ isActive }) => isActive ? styles.active : ""} >
                        <Sales />
                        <h2>Sales</h2>
                    </NavLink>
                    <NavLink to="/employee" className={({ isActive }) => isActive ? styles.active : ""} >
                        <Search />
                        <h2>Employee</h2>
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
