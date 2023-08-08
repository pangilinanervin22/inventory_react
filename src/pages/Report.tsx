import ProductChart from "../components/Report/ProductChart";
import SalesChart from "../components/Report/SalesChart";
import styles from ".././styles/pages/Report.module.scss"
import CardReport from "../components/Report/CardReport";
import { useQuery } from "@tanstack/react-query";
import { getReportLowStock, getReportPopular, getReportSales } from "../api";


export default function Report() {

  const { data: fetchedData, isSuccess } = useQuery({ queryKey: ['report_low'], queryFn: getReportLowStock });
  const { data: fetchedSales, isSuccess: isSalesSuccess } = useQuery({ queryKey: ['report_sales'], queryFn: getReportSales });
  const { data: fetchedPopular, isSuccess: isPopularSuccess } = useQuery({ queryKey: ['report_popular'], queryFn: getReportPopular });


  return (
    <section className={styles.container}>
      <div className={styles.alert_container}>
        {isSuccess && fetchedData.name ?
          <>
            <h3>Stock Alert</h3>
            <p>The
              <span>{fetchedData.name}</span>
              only have
              <span>{fetchedData.quantity}</span>
              remaining stock</p>
          </>
          :
          <>
            <h3>Stocks News</h3>
            <p>All stocks are in safe number</p>
          </>}
      </div>
      <CardReport />
      <div className={styles.chart_container}>
        <div className={styles.bar}>
          <h2 style={{ width: "100%" }}>Sales Last 6 months</h2>
          <SalesChart dataProps={isSalesSuccess ? fetchedSales : []} />
        </div>
        <div className={styles.pie}>
          <h2 style={{ width: "100%" }}>Popular Products</h2>
          <ProductChart dataProps={isPopularSuccess ? fetchedPopular : []} />
        </div>
      </div>
    </section>
  )

}
