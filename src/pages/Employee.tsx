import { mainQueryClient } from "../api";
import { deleteEmployee, getEmployees } from "../api/EmployeeApi";
import storeUserProfile from "../app/login";
import EmployeeEditModal from "../components/Forms/EmployeeEditModal";
import ViewTable, { tableProps } from "../components/MainTable/ViewTable";
import DeleteModal from "../components/common/DeleteModal";
import { useModalStore } from "../components/common/ModalContainer";
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
    const position = storeUserProfile(state => state.position)

    const { data, isSuccess } = useQuery(["employee"], getEmployees);

    const { openModal } = useModalStore();
    const { mutate: mutateDeleteProduct, } = useMutation(deleteEmployee, {
        onSuccess: () => {
            mainQueryClient.invalidateQueries({ queryKey: ["employee"] })
        },
    });

    if (isSuccess) return (<ViewTable
        data={data}
        isEditable={position == "admin"}
        structure={content}
        handleUpdate={onHandleUpdate}
        handleDelete={onHandleDelete} />)


    function onHandleDelete(id: string) {
        openModal(<DeleteModal confirmAction={() => mutateDeleteProduct(id)} />)

    }

    function onHandleUpdate(data: any) {
        openModal(<EmployeeEditModal defaultValues={data} positionEditable={true} />)
    }
}
