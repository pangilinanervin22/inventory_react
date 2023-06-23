import ProductChart from "../components/ProductChart";
import SalesChart from "../components/SalesChart";
import styles from ".././styles/pages/Report.module.scss"
import { ReactComponent as SalesIcon } from "../assets/svg/Report_Total_Sales.svg";
import { ReactComponent as StocksIcon } from "../assets/svg/Report_Total_Stocks.svg";
import { ReactComponent as ReportIcon } from "../assets/svg/Product.svg";


export default function Report() {
  return (
    <section className={styles.container}>
      <div className={styles.alert_container}>
        <h3>Stock Alert</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, voluptatibus.</p>
      </div>
      <div className={styles.display_container}>
        <div className={styles.display_item}>
          <h3>
            Total Sales
          </h3>
          <div>
            <SalesIcon />
            <h2>1500</h2>
          </div>
        </div>
        <div className={styles.display_item}>
          <h3>
            Total Sales
          </h3>
          <div>
            <StocksIcon />
            <h2>1500</h2>
          </div>
        </div>
        <div className={styles.display_item}>
          <h3>
            Total Sales
          </h3>
          <div>
            <ReportIcon />
            <h2>1500</h2>
          </div>
        </div>
      </div>
      <div className={styles.chart_container}>
        <div className={styles.bar}>
          <h2 style={{width: "100%"}}>Sales Last 6 months</h2>
          <SalesChart />
        </div>
        <div className={styles.pie}>
          <h2 style={{width: "100%"}}>Popular Products</h2>
          <ProductChart />
        </div>
      </div>
    </section>
  )

}
