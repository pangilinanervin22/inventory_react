import MainTable, { TableStructure } from "../components/MainTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useModalStore } from "../components/common/ModalContainer";
import DeleteModal from "../components/common/DeleteModal";
import { mainQueryClient } from "../api";
import { deleteSales, getSales } from "../api/SalesApi";
import SalesEditModal from "../components/Forms/SalesEditModal";
import storeUserProfile from "../app/login";
import { convertDate } from "../utils/date";
import POSComponent from "../components/pos/POSComponent";

const content: TableStructure = {
    title: "Sales",
    id: "sales_id",
    searchPath: "name",
    defaultSort: "name",
    structure: [
        { label: "Product", path: "name", width: "250px", fontSize: "20px" },
        { label: "Total Sales", path: "total_price", width: "200px", fontSize: "20px" },
        {
            label: "Sales Date", path: "sales_date", width: "250px",
            fontSize: "20px",
            element: ((val) => <span>{convertDate(val["sales_date"])}</span>),
        },
    ]
};


export default function Sales() {
    const position = storeUserProfile(state => state.position)
    const { openModal } = useModalStore();

    const { data, isSuccess } = useQuery({ queryKey: ["sales"], queryFn: getSales });
    const { mutate: mutateDeleteSales, } = useMutation(deleteSales, {
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
        openModal(<DeleteModal confirmAction={() => mutateDeleteSales(data.sales_id)} />)
    }

    function onHandleAdd() {
        openModal(<POSComponent />)
    }

    function onHandleUpdate(data: any) {
        openModal(<SalesEditModal defaultValues={data} />)
    }
}


