import { toast } from 'react-toastify';
import { axiosInstance } from ".";
import { iProduct } from "../utils/types";

export async function getProduct() {
    const res = await axiosInstance.get("/product/");
    return res.data;
}

export async function getProductById(id: string) {
    const res = await axiosInstance.get("/product/" + id);
    return res.data;
}

export async function deleteProduct(id: string) {
    const respond = axiosInstance.delete("/product/" + id);

    return await toast.promise(
        respond,
        {
            pending: {
                render() {
                    return "Request is loading"
                },
            },
            success: {
                render() {
                    return `Successfuly delete`
                },
                // other options
                // icon: "🟢",
            },
            error: {
                render({ data: error }) {
                    return `${error}`
                },
            }
        }
    )
};

export async function postProduct(product: iProduct) {
    const respond = axiosInstance.post("/product/", product);

    return await toast.promise(
        respond,
        {
            pending: {
                render() {
                    return "Request is loading"
                },
            },
            success: {
                render() {
                    return `Successfuly added`
                },
                // other options
                // icon: "🟢",
            },
            error: {
                render({ data: error }) {
                    return `${error}`
                },
            }
        }
    )
}

export async function updateProduct(product: iProduct) {
    console.log("/product/" + product.product_id, product);
    const respond = axiosInstance.put("/product/", product);


    return await toast.promise(
        respond,
        {
            pending: {
                render() {
                    return "Request is loading"
                },
            },
            success: {
                render() {
                    return `Successfuly update`
                },
                // other options
                // icon: "🟢",
            },
            error: {
                render({ data: error }) {
                    return `${error}`
                },
            }
        }
    )
};






