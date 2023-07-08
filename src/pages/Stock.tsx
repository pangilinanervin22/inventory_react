import MainTable, { TableStructure } from "../components/MainTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useModalStore } from "../components/common/ModalContainer";
import DeleteModal from "../components/common/DeleteModal";
import { mainQueryClient } from "../api";
import { deleteStock, getStock } from "../api/StockApi";
import StockAddModal from "../components/Forms/StockAddModal";
import StockEditModal from "../components/Forms/StockEditModal";
import storeUserProfile from "../app/login";

const content: TableStructure = {
    title: "Stock",
    id: "stock_id",
    searchPath: "name",
    defaultSort: "production_date",
    structure: [
        { label: "Product", path: "name", width: "250px", fontSize: "20px" },
        { label: "Quantity", path: "quantity", element: ((val) => <span style={{ color: val["quantity"] < 5 ? "red" : "" }}>{val["quantity"]}</span>), width: "150px", fontSize: "20px" },
        { label: "Production Date", path: "production_date", element: ((val) => renderDate(val["production_date"])), width: "210px", fontSize: "20px" },
        { label: "Expiration Date", path: "expiration_date", element: ((val) => renderDate(val["expiration_date"])), width: "210px", fontSize: "20px" },
    ]
};

function renderDate(input: any) {
    const date = new Date(input);
    const month = date.getMonth() + 1; // getMonth() returns a zero-based index, so we add 1
    const day = date.getDate();
    const year = date.getFullYear();

    return <span>{`${month}/${day}/${year}`}</span>;
}

export default function Stock() {
    const position = storeUserProfile(state => state.position)
    const { openModal } = useModalStore();

    const { data, isSuccess } = useQuery(["stock"], getStock);
    const { mutate: muatateDeleteStock, } = useMutation(deleteStock, {
        onSuccess: () => {
            mainQueryClient.invalidateQueries({ queryKey: ["stock"] })
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
    else return "No data"

    function onHandleDelete(id: string) {
        openModal(<DeleteModal confirmAction={() => muatateDeleteStock(id)} />)
    }

    function onHandleAdd() {
        openModal(<StockAddModal />)
    }

    function onHandleUpdate(data: any) {

        openModal(<StockEditModal defaultValues={data} />)
    }
}

