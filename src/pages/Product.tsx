import MainTable, { TableStructure } from "../components/MainTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteProduct, getProduct } from "../api/ProductApi";
import { useModalStore } from "../components/common/ModalContainer";
import DeleteModal from "../components/common/DeleteModal";
import { mainQueryClient } from "../api";
import ProductAddModal from "../components/Forms/ProductAddModal";
import ProductEditModal from "../components/Forms/ProductEditModal";
import storeUserProfile from "../app/login";

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

    const { data, isSuccess } = useQuery(["product"], getProduct);
    const { mutate: mutateDeleteProduct, } = useMutation(deleteProduct, {
        onSuccess: () => {
            mainQueryClient.invalidateQueries({ queryKey: ["product"] })
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

    function onHandleDelete(id: string) {
        openModal(<DeleteModal confirmAction={() => mutateDeleteProduct(id)} />)
    }

    function onHandleAdd() {
        openModal(<ProductAddModal />)
    }

    function onHandleUpdate(data: any) {
        openModal(<ProductEditModal defaultValues={data} />)
    }
}
