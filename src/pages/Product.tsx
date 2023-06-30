import MainTable, { tableProps } from "../components/MainTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteProduct, getProduct } from "../api/ProductApi";
import { useModalStore } from "../components/common/ModalContainer";
import DeleteModal from "../components/common/DeleteModal";
import { mainQueryClient } from "../api";
import ProductAddFormModal from "../components/Forms/ProductAddFormModal";
import ProductEditFormModal from "../components/Forms/ProductEditFormModal";

const content: tableProps = {
    title: "Product",
    id: "product_id",
    searchPath: "name",
    structure: [
        { label: "Name", path: "name", width: "200px", fontSize: "20px" },
        { label: "Price", path: "price", width: "200px", fontSize: "20px" },
        { label: "Brand", path: "brand", width: "250px", fontSize: "20px" },

    ]
};

export default function Product() {
    const { openModal } = useModalStore();

    const { data, isSuccess } = useQuery(["product"], getProduct);
    const { mutate: mutateDeleteProduct, } = useMutation(deleteProduct, {
        onSuccess: () => {
            // Login successful, redirect or perform any desired actions
            mainQueryClient.invalidateQueries({ queryKey: ["product"] })
        },
    });

    if (isSuccess) return (
        <MainTable structure={content} data={data} handleUpdate={onHandleUpdate} handleDelete={onHandleDelete} handleAdd={onHandleAdd} />
    );
    else return "";

    function onHandleDelete(id: string) {
        openModal(<DeleteModal confirmAction={() => mutateDeleteProduct(id)} />)
    }

    function onHandleAdd() {
        openModal(<ProductAddFormModal />)
    }

    function onHandleUpdate(data: any) {
        openModal(<ProductEditFormModal defaultValues={data} />)
    }
}
