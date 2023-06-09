import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

interface User {
    name: string;
    age: number;
}

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/",
});

export async function postUser(user: User) {
    const res = await axiosInstance.post("", user);

    return res.data;
}

export async function getUsers() {
    const res = await axiosInstance.get("");
    return res.data;
}

export async function deleteUser(id: number) {
    const deleteUser = await axiosInstance.delete("" + id);

    return deleteUser.data;
}

export const queryClient = new QueryClient();