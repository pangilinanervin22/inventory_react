import ProductChart from "../components/Report/ProductChart";
import SalesChart from "../components/Report/SalesChart";
import styles from ".././styles/pages/Report.module.scss"
import CardReport from "../components/Report/CardReport";
import { popular_sales, total_sales } from "../api/fake.data/report";


export default function Report() {

  return (
    <section className={styles.container}>
      <div className={styles.alert_container}>
        <>
          <h3>Stock Alert</h3>
          <p>The
            <span> {"KitKat Original"} </span>
            only have
            <span> {"2"} </span>
            remaining stock</p>
        </>
      </div>
      <CardReport />
      <div className={styles.chart_container}>
        <div className={styles.bar}>
          <h2 style={{ width: "100%" }}>Sales Last 6 months</h2>
          <SalesChart dataProps={total_sales as []} />
        </div>
        <div className={styles.pie}>
          <h2 style={{ width: "100%" }}>Popular Products</h2>
          <ProductChart dataProps={popular_sales as []} />
        </div>
      </div>
    </section>
  )

}
