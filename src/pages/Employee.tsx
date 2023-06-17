import MainTable, { tableProps } from "../components/MainTable";
import { iEmployee, } from "../utils/types"
import styles from "../styles/components/Table.module.scss";

const employeData: iEmployee[] = [
    {
        "employee_id": "231c0044-85ca-430f-b8c1-823e6cc40a0e",
        "name": "Ms. Lorene Stamm",
        "username": "Jodie6@",
        "contact_no": "660-401-8222 x0",
        "position": "employee",
        "img_src": "https://avatars.githubusercontent.com/u/75058889"
    },
    {
        "employee_id": "283eb264-c282-45c0-b9d5-2f9affe4381b",
        "name": "Mabel Barton",
        "username": "Jadon_Rutherford3@",
        "contact_no": "(286) 868-8924 ",
        "position": "employee",
        "img_src": "https://avatars.githubusercontent.com/u/35194978"
    },
    {
        "employee_id": "33761bed-b0ad-48ae-b7fa-7abef89b458c",
        "name": "Al Powlowski",
        "username": "Ilene_OHara@",
        "contact_no": "209.471.9479 x9",
        "position": "employee",
        "img_src": "https://avatars.githubusercontent.com/u/46595405"
    },
    {
        "employee_id": "5261fd04-eeff-4854-9b30-a50ab1aed8cd",
        "name": "Ervin",
        "username": "ervin2002",
        "contact_no": "09367041121",
        "position": "employee",
        "img_src": "https://avatars.githubusercontent.com/u/95746670"
    },
    {
        "employee_id": "580548a3-62a6-4440-b295-e8c43e19953c",
        "name": "Preston DDS",
        "username": "Jamar_Boehm@",
        "contact_no": "1-805-726-5896 ",
        "position": "employee",
        "img_src": "https://avatars.githubusercontent.com/u/26759416"
    },
    {
        "employee_id": "f3965406-2230-44a5-a2f5-8d9b97f2f631",
        "name": "Kelli Rogahn",
        "username": "Bell.Pouros@",
        "contact_no": "(982) 602-0789 ",
        "position": "employee",
        "img_src": "https://avatars.githubusercontent.com/u/13641971"
    },
    {
        "employee_id": "fd72649e-b514-4da2-837c-cd2ec71d2efd",
        "name": "Alexis Bayer Sr.",
        "username": "Estel.Gulgowski56@",
        "contact_no": "(737) 977-9765 ",
        "position": "employee",
        "img_src": "https://avatars.githubusercontent.com/u/50627626"
    },
    {
        "employee_id": "1580548a3-62a6-4440-b295-e8c43e19953c",
        "name": "Preston DDS",
        "username": "Jamar_Boehm@",
        "contact_no": "1-805-726-5896 ",
        "position": "employee",
        "img_src": "https://avatars.githubusercontent.com/u/26759416"
    },
    {
        "employee_id": "1f3965406-2230-44a5-a2f5-8d9b97f2f631",
        "name": "Kelli Rogahn",
        "username": "Bell.Pouros@",
        "contact_no": "(982) 602-0789 ",
        "position": "employee",
        "img_src": "https://avatars.githubusercontent.com/u/13641971"
    },
    {
        "employee_id": "1fd72649e-b514-4da2-837c-cd2ec71d2efd",
        "name": "Alexis Bayer Sr.",
        "username": "Estel.Gulgowski56@",
        "contact_no": "(737) 977-9765 ",
        "position": "employee",
        "img_src": "https://avatars.githubusercontent.com/u/50627626"
    }
];



const content: tableProps = {
    title: "Employee",
    id: "employee_id",
    searchPath: "name",
    structure: [
        { label: "Name", path: "name", },
        { label: "Username", path: "username", },
        { label: "Position", path: "position", },
        { label: "Phone Number", path: "contact_no", },
        {
            label: "Update",
            element: ((val: any) =>
                <button className={styles.button_update}
                    onClick={() => console.log(val)}>EDIT</button>)
        },
        {
            label: "Delete", element: ((val: any) =>
                <button className={styles.button_delete}
                    onClick={() => console.log(val)}>DELETE</button>)
        },
    ]
};

export default function Employee() {

    return (
        <>
            <MainTable structure={content} data={employeData} />
        </>
    )
}
