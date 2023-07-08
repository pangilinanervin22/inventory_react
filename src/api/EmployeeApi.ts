import { toast } from "react-toastify";
import { axiosInstance } from ".";

export async function getEmployees() {
    const res = await axiosInstance.get("/employee/");
    return res.data;
}

export async function getEmployeeById(id: number) {
    const res = await axiosInstance.get("/employee/" + id);
    return res.data;
}

export async function getEmployeeByToken() {
    const res = await axiosInstance.get("/employee/token");
    return res.data;
}

export async function deleteEmployee(id: string) {
    const res = axiosInstance.delete("/employee/" + id);


    return await toast.promise(
        res,
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
}

export async function editInfoEmployee(data: any) {
    const res = axiosInstance.put("/employee/edit", data);

    return await toast.promise(
        res,
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