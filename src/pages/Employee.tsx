import { mainQueryClient, requestSuccess } from "../api";
import storeUserProfile from "../app/login";
import EmployeeEditModal from "../components/Forms/EmployeeEditModal";
import DeleteModal from "../components/common/DeleteModal";
import { useModalStore } from "../components/common/ModalContainer";
import NotAllowedModal from "../components/common/NotAllowedModal";
import MainTable, { TableStructure } from "../components/MainTable";
import { listEmployee } from "../api/fake.data/employee";


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
    const { openModal } = useModalStore();


    return (<MainTable
        data={listEmployee}
        isEditable={position == "admin" || position == "owner"}
        structure={content}
        handleUpdate={onHandleUpdate}
        handleDelete={onHandleDelete} />)

    function onHandleDelete(data: any) {
        if (data.position == "owner")
            openModal(<NotAllowedModal titleDelete="Owner's account can't be delete" />)
        else
            openModal(<DeleteModal confirmAction={() => requestSuccess("Successfully delete " + data.name)} />)
    }

    function onHandleUpdate(data: any) {
        openModal(<EmployeeEditModal defaultValues={data} positionEditable={true} />)
    }
}
