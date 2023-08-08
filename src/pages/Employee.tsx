import { mainQueryClient } from "../api";
import { deleteEmployee, getEmployees } from "../api/EmployeeApi";
import storeUserProfile from "../app/login";
import EmployeeEditModal from "../components/Forms/EmployeeEditModal";
import DeleteModal from "../components/common/DeleteModal";
import { useModalStore } from "../components/common/ModalContainer";
import { useMutation, useQuery } from "@tanstack/react-query";
import NotAllowedModal from "../components/common/NotAllowedModal";
import MainTable, { TableStructure } from "../components/MainTable";


const content: TableStructure = {
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

    const { data: employeeData, isSuccess } = useQuery(["employee"], getEmployees);

    const { openModal } = useModalStore();
    const { mutate: mutateDeleteProduct, } = useMutation(deleteEmployee, {
        onSuccess: () => {
            mainQueryClient.invalidateQueries({ queryKey: ["employee"] })
        },
    });

    if (isSuccess) return (<MainTable
        data={employeeData}
        isEditable={position == "admin" || position == "owner"}
        structure={content}
        handleUpdate={onHandleUpdate}
        handleDelete={onHandleDelete} />)


    function onHandleDelete(data: any) {
        if (data.position == "owner")
            openModal(<NotAllowedModal titleDelete="Owner's account can't be delete" />)
        else
            openModal(<DeleteModal confirmAction={() => mutateDeleteProduct(data.employee_id)} />)

    }

    function onHandleUpdate(data: any) {
        openModal(<EmployeeEditModal defaultValues={data} positionEditable={true} />)
    }
}
