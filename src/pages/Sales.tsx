import MainTable, { TableStructure } from "../components/MainTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useModalStore } from "../components/common/ModalContainer";
import DeleteModal from "../components/common/DeleteModal";
import { mainQueryClient } from "../api";
import { deleteSales, getSales } from "../api/SalesApi";
import SaleskAddModal from "../components/Forms/SalesAddModal";
import SalesEditModal from "../components/Forms/SalesEditModal";
import storeUserProfile from "../app/login";

const content: TableStructure = {
    title: "Sales",
    id: "sales_id",
    searchPath: "name",
    defaultSort: "sales_date",
    structure: [
        { label: "Product", path: "name", width: "250px", fontSize: "20px" },
        { label: "Total Sales", path: "total_price", width: "200px", fontSize: "20px" },
        { label: "Sales Date", path: "sales_date", element: ((val) => renderDate(val["sales_date"])), width: "250px", fontSize: "20px" },
    ]
};

function renderDate(input: any) {
    const date = new Date(input);
    const month = date.getMonth() + 1; // getMonth() returns a zero-based index, so we add 1
    const day = date.getDate();
    const year = date.getFullYear();

    return <span>{`${month}/${day}/${year}`}</span>;
}

export default function Sales() {
    const position = storeUserProfile(state => state.position)
    const { openModal } = useModalStore();

    const { data, isSuccess } = useQuery(["sales"], getSales);
    const { mutate: muatateDeleteSales, } = useMutation(deleteSales, {
        onSuccess: () => {
            mainQueryClient.invalidateQueries({ queryKey: ["sales"] })
        },
    });

    if (isSuccess) return (
        <MainTable
            data={data}
            isEditable={position != "guest"}
            structure={content}
            handleUpdate={onHandleUpdate}
            handleDelete={onHandleDelete}
            handleAdd={onHandleAdd} />
    );
    else return "";

    function onHandleDelete(data: any) {
        openModal(<DeleteModal confirmAction={() => muatateDeleteSales(data.sales_id)} />)
    }

    function onHandleAdd() {
        openModal(<SaleskAddModal />)
    }

    function onHandleUpdate(data: any) {

        openModal(<SalesEditModal defaultValues={data} />)
    }
}


