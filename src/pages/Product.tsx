import MainTable, { tableProps } from "../components/MainTable";
import styles from "../styles/components/Table.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/product";


const content: tableProps = {
    title: "Product",
    id: "product_id",
    searchPath: "name",
    structure: [
        { label: "Name", path: "name", width: "200px", fontSize: "20px" },
        { label: "Price", path: "price", width: "200px", fontSize: "20px" },
        { label: "Brand", path: "brand", width: "250px", fontSize: "20px" },
        {
            label: "Update",
            width: "110px",
            element: ((val: any) =>
                <button className={styles.button_update}
                    onClick={() => console.log(val)}>EDIT</button>)
        },
        {
            label: "Delete",
            width: "110px",
            element: ((val: any) =>
                <button className={styles.button_delete}
                    onClick={() => console.log(val)}>DELETE</button>)
        },
    ]
};

export default function Product() {
    const { data, isSuccess } = useQuery(["product"], getProduct);

    return (
        <>
            {isSuccess ? <MainTable structure={content} data={data} /> : ""}
        </>
    )
}
