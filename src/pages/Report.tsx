import ProductChart from "../components/Report/ProductChart";
import SalesChart from "../components/Report/SalesChart";
import styles from ".././styles/pages/Report.module.scss"
import CardRerport from "../components/Report/CardRerport";
import { useQuery } from "@tanstack/react-query";
import { getReportLowStock } from "../api";


export default function Report() {

  const { data: fetchedData, isSuccess } = useQuery({ queryKey: ['wewe'], queryFn: getReportLowStock });

  if (isSuccess)
    console.log(fetchedData);

  const message = isSuccess && fetchedData.name ?
    <>
      <h3>Stock Alert</h3>
      <p>The <span>{fetchedData.name}</span> only have <span>{fetchedData.quantity}</span> remaining stock</p>
    </>
    :
    <>
      <h3>Stocks News</h3>
      <p>All stocks are in safe number</p>
    </>

  return (
    <section className={styles.container}>
      <div className={styles.alert_container}>
        {message}
      </div>
      <CardRerport />
      <div className={styles.chart_container}>
        <div className={styles.bar}>
          <h2 style={{ width: "100%" }}>Sales Last 6 months</h2>
          <SalesChart />
        </div>
        <div className={styles.pie}>
          <h2 style={{ width: "100%" }}>Popular Products</h2>
          <ProductChart />
        </div>
      </div>
    </section>
  )

}
