import { QueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from 'react-toastify';
import { axiosInstance } from ".";





export async function signUpEmployee(user: any) {
    const res = await axiosInstance.post("", user);
    return res.data;
}

export async function getProduct() {
    const res = await axiosInstance.get("/product");
    return res.data;
}

export async function deleteEmployee(id: number) {
    const deleteUser = await axiosInstance.delete("" + id);

    return deleteUser.data;
}








export const queryClient = new QueryClient();