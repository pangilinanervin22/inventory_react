import MainTable, { TableStructure } from "../components/MainTable";
import { useModalStore } from "../components/common/ModalContainer";
import DeleteModal from "../components/common/DeleteModal";
import ProductAddModal from "../components/Forms/ProductAddModal";
import ProductEditModal from "../components/Forms/ProductEditModal";
import storeUserProfile from "../app/login";
import { listProduct } from "../api/fake.data/product";
import { toast } from "react-toastify";

const content: TableStructure = {
    id: "product_id",
    title: "Product",
    searchPath: "name",
    structure: [
        { label: "Name", path: "name", width: "280px", fontSize: "20px" },
        { label: "Price", path: "price", width: "200px", fontSize: "20px" },
        { label: "Brand", path: "brand", width: "250px", fontSize: "20px" },
    ]
};

export default function Product() {
    const position = storeUserProfile(state => state.position)

    const { openModal } = useModalStore();


    return (<MainTable
        data={listProduct}
        isEditable={position != "guest"}
        structure={content}
        handleUpdate={onHandleUpdate}
        handleDelete={onHandleDelete}
        handleAdd={onHandleAdd} />
    );

    function onHandleDelete(data: any) {
        console.log(data);
        openModal(<DeleteModal confirmAction={() => toast.success("Successfully Deleted ")} />)
    }

    function onHandleAdd() {
        openModal(<ProductAddModal />)
    }

    function onHandleUpdate(data: any) {
        openModal(<ProductEditModal defaultValues={data} />)
    }
}
