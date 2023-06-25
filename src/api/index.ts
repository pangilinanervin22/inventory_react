import { QueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from 'react-toastify';
import { listEmployee } from "./fake.data/employee";

interface UserLogin {
    username: string;
    password: string;
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


export async function postEmployee(user: any) {
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

export const login = async (data: UserLogin) => {
    const fetch = new Promise<any>((resolve, reject) => {
        // Simulating an API call delay
        const find = listEmployee.find(employee => employee.username == data.username);

        setTimeout(() => {
            if (data.username === find?.username && data.password === find.password)
                resolve(find);
            else if (!find)
                reject(new Error('UserName is not exist'));
            else if (data.password != find.password)
                reject(new Error(`Invalid password`));
            else
                reject(new Error('Invalid username or password'));

        }, 2000);
    });

    return await toast.promise(
        fetch,
        {
            pending: {
                render() {
                    return "Request is loading"
                },
            },
            success: {
                render() {
                    return `Successfuly login`
                },
                // other options
                // icon: "🟢",
            },
            error: {
                render({ data }) {
                    return `${data}`
                },
            }
        }
    )
};



export const queryClient = new QueryClient();