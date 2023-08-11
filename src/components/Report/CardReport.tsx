import styles from "../../styles/pages/Report.module.scss"
import { ReactComponent as SalesIcon } from "../../assets/svg/Report_Total_Sales.svg";
import { ReactComponent as StocksIcon } from "../../assets/svg/Product.svg";
import { ReactComponent as ReportIcon } from "../../assets/svg/Chocolate.svg";

const NOW_MONTH = new Date().toLocaleString('default', { month: 'long' });

export default function CardReport() {

    const report = {
        "total_product": 11,
        "total_stock": 136,
        "total_sales": 9300
    }

    return (
        <div className={styles.display_container}>
            <div className={styles.display_item}>
                <h3>
                    Total Sales of {NOW_MONTH}
                </h3>
                <div>
                    <SalesIcon />
                    <h2>{report.total_sales}</h2>
                </div>
            </div>
            <div className={styles.display_item}>
                <h3>
                    Available Product
                </h3>
                <div>
                    <ReportIcon />
                    <h2>{report.total_product}</h2>
                </div>
            </div>
            <div className={styles.display_item}>
                <h3>
                    Total Inventory
                </h3>
                <div>
                    <StocksIcon />
                    <h2>{report.total_stock}</h2>
                </div>
            </div>
        </div>
    )
}
