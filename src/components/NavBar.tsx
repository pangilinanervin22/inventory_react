import { NavLink } from "react-router-dom";
import styles from "../styles/components/navbar.module.scss";
import { ReactComponent as MainIcon } from "../assets/svg/Main.svg";
import { ReactComponent as Employee } from "../assets/svg/Employee.svg";
import { ReactComponent as ReportIcon } from "../assets/svg/Report.svg";
import { ReactComponent as ProductIcon } from "../assets/svg/Product.svg";
import { ReactComponent as InventoryIcon } from "../assets/svg/Inventory.svg";
import { ReactComponent as SalesIcon } from "../assets/svg/Sales.svg";

import User from "../assets/user.png";

export default function NavBar() {
    return (
        <>
            <div className={styles.container}>
                <MainIcon />
                <div className={styles.nav}>
                    <NavLink to="/" style={{ textDecoration: "none" }} className={({ isActive }) => isActive ? styles.active : ""} >
                        <ReportIcon />
                        <h2>Report</h2>
                    </NavLink>
                    <NavLink to="/product" className={({ isActive }) => isActive ? styles.active : ""} >
                        <ProductIcon />
                        <h2>Product</h2>
                    </NavLink>
                    <NavLink to="/inventory" className={({ isActive }) => isActive ? styles.active : ""} >
                        <InventoryIcon />
                        <h2>Inventory</h2>
                    </NavLink>
                    <NavLink to="/sales" className={({ isActive }) => isActive ? styles.active : ""} >
                        <SalesIcon />
                        <h2>Sales</h2>
                    </NavLink>
                    <NavLink to="/employee" className={({ isActive }) => isActive ? styles.active : ""} >
                        <Employee />
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
