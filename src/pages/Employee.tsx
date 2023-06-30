import { mainQueryClient } from "../api";
import { deleteEmployee, getEmployee } from "../api/EmployeeApi";
import MainTable, { tableProps } from "../components/MainTable";
import DeleteModal from "../components/common/DeleteModal";
import { useModalStore } from "../components/common/ModalContainer";
import styles from "../styles/components/Table.module.scss";
import { useMutation, useQuery } from "@tanstack/react-query";


const content: tableProps = {
    title: "Employee",
    id: "employee_id",
    searchPath: "name",
    structure: [
        { label: "Name", path: "name", width: "200px", fontSize: "20px" },
        { label: "Username", path: "username", width: "200px", fontSize: "20px" },
        { label: "Position", path: "position", width: "150px", fontSize: "20px" },
        { label: "Phone Number", path: "contact_no", width: "250px", fontSize: "20px" },
    ]
};

export default function Employee() {
    const { data, isSuccess } = useQuery(["employee"], getEmployee);

    const { openModal } = useModalStore();
    const { mutate: mutateDeleteProduct, } = useMutation(deleteEmployee, {
        onSuccess: () => {
            mainQueryClient.invalidateQueries({ queryKey: ["employee"] })
        },
    });

    if (isSuccess) return (<MainTable structure={content} data={data} handleUpdate={onHandleUpdate}
        handleDelete={onHandleDelete} handleAdd={onHandleAdd} />)


    function onHandleDelete(id: string) {
        openModal(<DeleteModal confirmAction={() => mutateDeleteProduct(id)} />)

    }

    function onHandleAdd() {
        // openModal(<ProductAddFormModal />)
    }

    function onHandleUpdate(data: any) {
    }
}
