import MainTable, { tableProps } from "../components/MainTable";
import { iEmployee, iProduct, } from "../utils/types"
import styles from "../styles/components/Table.module.scss";

const employeData: iProduct[] = [
    {
        "product_id": "3694fe5c-e9e9-43c2-bac1-66e3a13ea2e2",
        "name": "Mouse",
        "price": 385,
        "brand": "Licensed Bronze Computer"
    },
    {
        "product_id": "3cb9543a-0e4c-4640-a375-fb057deab10c",
        "name": "Sausages",
        "price": 19,
        "brand": "Practical Soft Shirt"
    },
    {
        "product_id": "6fded1c3-aff2-4dbc-ae35-3b7a88ac8cfe",
        "name": "Shirt",
        "price": 911,
        "brand": "Elegant Concrete Bike"
    },
    {
        "product_id": "95a71b78-3dca-4210-a511-bbb549cbbcf8",
        "name": "Pizza",
        "price": 515,
        "brand": "Intelligent Wooden Ball"
    },
    {
        "product_id": "aae855b4-d491-4f0a-a6ba-d9d0e8a70f8b",
        "name": "Gloves",
        "price": 351,
        "brand": "Recycled Metal Gloves"
    },
    {
        "product_id": "ac3fa55b-7d8f-477b-b8b1-c24d7645f077",
        "name": "Shirt",
        "price": 839,
        "brand": "Elegant Cotton Table"
    },
    {
        "product_id": "c593a07a-c1be-473e-9a99-df6b1c964d00",
        "name": "Towels",
        "price": 700,
        "brand": "Ergonomic Steel Pants"
    },
    {
        "product_id": "c62d2c4e-2645-4281-8c3b-918af187bc36",
        "name": "Sausages",
        "price": 890,
        "brand": "Ergonomic Frozen Chips"
    },
    {
        "product_id": "e2c74f22-bf5f-450d-b322-89bc014d8a4a",
        "name": "Computer",
        "price": 682,
        "brand": "Handmade Rubber Towels"
    },
    {
        "product_id": "e82a9987-de15-4297-9269-4df5d84a9223",
        "name": "Hat",
        "price": 842,
        "brand": "Handcrafted Steel Bacon"
    },
    {
        "product_id": "ea9d48c2-c55d-40c7-b40a-c1fcc6631c79",
        "name": "Bacon",
        "price": 342,
        "brand": "Generic Frozen Pizza"
    },
    {
        "product_id": "ed3c25a8-582b-45de-9f4f-3563e6d3ac44",
        "name": "Towels",
        "price": 757,
        "brand": "Modern Granite Chips"
    },
    {
        "product_id": "f9bd48d8-1b73-4f9c-9065-e3eed331b35f",
        "name": "Pants",
        "price": 977,
        "brand": "Modern Steel Chips"
    }
];

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

    return (
        <>
            <MainTable structure={content} data={employeData} />
        </>
    )
}
