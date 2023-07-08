import { toast } from 'react-toastify';
import { axiosInstance } from ".";
import { iStock } from "../utils/types";

export async function getStock() {
    const res = await axiosInstance.get("/stock/");
    return res.data;
}

export async function getStockById(id: string) {
    const res = await axiosInstance.get("/stock/" + id);
    return res.data;
}

export async function deleteStock(id: string) {
    const respond = axiosInstance.delete("/stock/" + id);

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
            },
            error: {
                render({ data: error }) {
                    return `${error}`
                },
            }
        }
    )
};

export async function postStock(stock: iStock) {
    const respond = axiosInstance.post("/stock/", stock);

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
            },
            error: {
                render({ data: error }) {
                    return `${error}`
                },
            }
        }
    )
}

export async function updateStock(stock: iStock) {
    const respond = axiosInstance.put("/stock/", stock);

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
            },
            error: {
                render({ data: error }) {
                    return `${error}`
                },
            }
        }
    )
};






