import { toast } from 'react-toastify';
import { axiosInstance } from ".";
import { iSales } from "../utils/types";

export async function getSales() {
    const res = await axiosInstance.get("/sales/");
    return res.data;
}

export async function getSalesById(id: string) {
    const res = await axiosInstance.get("/sales/" + id);
    return res.data;
}

export async function deleteSales(id: string) {
    const respond = axiosInstance.delete("/sales/" + id);

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

export async function postSales(sales: iSales) {
    const respond = axiosInstance.post("/sales/", sales);

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

export async function updateSales(sales: iSales) {
    const respond = axiosInstance.put("/sales/", sales);

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






