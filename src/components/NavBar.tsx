import { NavLink } from "react-router-dom";
import styles from "../styles/components/navbar.module.scss";
import { ReactComponent as MainIcon } from "../assets/svg/Main.svg";
import { ReactComponent as EmployeeLogo } from "../assets/svg/Employee.svg";
import { ReactComponent as ReportIcon } from "../assets/svg/Report.svg";
import { ReactComponent as ProductIcon } from "../assets/svg/Product.svg";
import { ReactComponent as InventoryIcon } from "../assets/svg/Inventory.svg";
import { ReactComponent as SalesIcon } from "../assets/svg/Sales.svg";
import { ReactComponent as LogoutIcon } from "../assets/svg/Logout.svg";


import User from "../assets/user.png";
import DropDownHover from "./common/DropDownHover";

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
                        <EmployeeLogo />
                        <h2>Employee</h2>
                    </NavLink>
                </div>

                <div>
                    <h3>employee</h3>
                    <DropDownHover
                        trigger={
                            <img
                                src={User}
                                className={styles.user_photo}
                            />
                        }
                        content={
                            <section className={styles.dropdown_container}>
                                <div className={styles.dropdown_item}>
                                    <EmployeeLogo />
                                    <h2>Account</h2>
                                </div>
                                <div className={styles.dropdown_item}
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        window.location.href = '/';
                                    }}>
                                    <LogoutIcon />
                                    <h2>Logout</h2>
                                </div>
                            </section>
                        }
                    />
                </div>
            </div>
        </>
    );
}
