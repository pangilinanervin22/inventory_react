import MainTable, { TableStructure } from "../components/MainTable";
import { useModalStore } from "../components/common/ModalContainer";
import DeleteModal from "../components/common/DeleteModal";
import { mainQueryClient, requestSuccess } from "../api";
import StockAddModal from "../components/Forms/StockAddModal";
import StockEditModal from "../components/Forms/StockEditModal";
import storeUserProfile from "../app/login";
import { convertDate } from "../utils/date";
import { listStock } from "../api/fake.data/stock";

const content: TableStructure = {
    title: "Stock",
    id: "stock_id",
    searchPath: "name",
    defaultSort: "name",
    structure: [
        { label: "Product", path: "name", width: "250px", fontSize: "20px" },
        {
            label: "Quantity", path: "quantity",
            width: "150px", fontSize: "20px",
            element: ((val) => <span style={{ color: val["quantity"] < 5 ? "red" : "" }}>{val["quantity"]}</span>),
        },
        {
            label: "Production Date", path: "production_date",
            width: "210px", fontSize: "20px",
            element: ((val) => <span>{convertDate(val["production_date"])}</span>)
        },
        {
            label: "Expiration Date", path: "expiration_date",
            width: "210px", fontSize: "20px",
            element: ((val) => <span>{convertDate(val["expiration_date"])}</span>)
        },
    ]
};

export default function Stock() {
    const position = storeUserProfile(state => state.position)
    const { openModal } = useModalStore();

    return (
        <MainTable
            data={listStock}
            isEditable={position != "guest"}
            structure={content}
            handleUpdate={onHandleUpdate}
            handleDelete={onHandleDelete}
            handleAdd={onHandleAdd} />
    );

    function onHandleDelete(data: any) {
        openModal(<DeleteModal confirmAction={() => requestSuccess("Successfully delete a stock")} />)
    }

    function onHandleAdd() {
        openModal(<StockAddModal />)
    }

    function onHandleUpdate(data: any) {
        openModal(<StockEditModal defaultValues={data} />)
    }
}

