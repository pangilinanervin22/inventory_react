import styles from "../../styles/pages/Report.module.scss"
import { ReactComponent as SalesIcon } from "../../assets/svg/Report_Total_Sales.svg";
import { ReactComponent as StocksIcon } from "../../assets/svg/Product.svg";
import { ReactComponent as ReportIcon } from "../../assets/svg/Chocolate.svg";
import { getReportTotal } from "../../api";
import { useQuery } from "@tanstack/react-query";

const month = new Date().toLocaleString('default', { month: 'long' });

export default function CardRerport() {

    const { data, isSuccess } = useQuery({ queryKey: ['total'], queryFn: getReportTotal });

    const report = {
        total_product: isSuccess ? data.total_product : "0",
        total_stock: isSuccess ? data.total_stock : "0",
        total_sales: isSuccess ? data.total_sales : "0",
    }

    return (
        <div className={styles.display_container}>
            <div className={styles.display_item}>
                <h3>
                    Total Sales of {month}
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
