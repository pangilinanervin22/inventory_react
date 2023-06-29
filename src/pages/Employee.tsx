import MainTable, { tableProps } from "../components/MainTable";
import styles from "../styles/components/Table.module.scss";
import { getEmployee } from "../api";
import { useQuery } from "@tanstack/react-query";


const content: tableProps = {
    title: "Employee",
    id: "employee_id",
    searchPath: "name",
    structure: [
        { label: "Name", path: "name", width: "200px", fontSize: "20px" },
        { label: "Username", path: "username", width: "200px", fontSize: "20px" },
        { label: "Position", path: "position", width: "150px", fontSize: "20px" },
        { label: "Phone Number", path: "contact_no", width: "250px", fontSize: "20px" },
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

export default function Employee() {
    const { data, isSuccess } = useQuery(["employee"], getEmployee);

    if (isSuccess) console.log(data);
    return (
        <>
            {isSuccess ? <MainTable structure={content} data={data} /> : "wew"}
        </>
    )
}
