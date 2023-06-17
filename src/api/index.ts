import { QueryClient } from "@tanstack/react-query";
import axios, { Axios, AxiosBasicCredentials, AxiosError, AxiosPromise, AxiosRequestConfig, AxiosStatic } from "axios";

interface User {
    name: string;
    age: number;
}

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBsb3llZV9pZCI6IjUyNjFmZDA0LWVlZmYtNDg1NC05YjMwLWE1MGFiMWFlZDhjZCIsImlzX2FkbWluIjoxLCJpYXQiOjE2ODY4MTE4ODQsImV4cCI6MTY4NzA3MTA4NH0.tUmE9DABHIO1XBeUSAVVpCcBXfVhWmV6YZT4Gr7xO5Q`

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        Authorization: `Bearer ${token}`
    }
});

axiosInstance.interceptors.response.use((config) => {
    // Do something before request is sent
    return config;
}, function (error: AxiosError) {
    // Do something with request error
    return Promise.reject(error.response?.data);
});


export async function postEmployee(user: User) {
    const res = await axiosInstance.post("", user);
    return res.data;
}

export async function getEmployee() {
    const res = await axiosInstance.get("/employee/");
    return res.data;
}

export async function deleteEmployee(id: number) {
    const deleteUser = await axiosInstance.delete("" + id);

    return deleteUser.data;
}



export const queryClient = new QueryClient();