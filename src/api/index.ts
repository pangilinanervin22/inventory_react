import { QueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from 'react-toastify';
import storeUserProfile from "../app/login";

interface UserLogin {
    username: string;
    password: string;
}


const url = "http://localhost:5000/api";

export const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${storeUserProfile.getState().token || ""}`
    }
});

axiosInstance.interceptors.response.use((config) => {
    // Do something before request is sent
    return config;
}, function (error: AxiosError) {
    // Do something with request error
    console.log(error, error.code);
    console.log(error.response?.status);

    if (error.response?.status === undefined)
        return Promise.reject("Server is currently offline");

    return Promise.reject(error.response?.data);
});


export const employeeLogin = async (data: UserLogin) => {
    const res = axiosInstance.post("/employee/login", data);

    // const fetch = new Promise<any>((resolve, reject) => {
    // Simulating an API call delay
    //     const find = listEmployee.find(employee => employee.username == data.username);

    //     setTimeout(() => {
    //         if (data.username === find?.username && data.password === find.password)
    //             resolve(find);
    //         else if (!find)
    //             reject(new Error('UserName is not exist'));
    //         else if (data.password != find.password)
    //             reject(new Error(`Invalid password`));
    //         else
    //             reject(new Error('Invalid username or password'));

    //     }, 2000);
    // });
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
                    return `Successfuly login`
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

export async function signUpEmployee(user: any) {
    const res = axiosInstance.post("/employee/", user).
        then((res) => {
            alert("Your account is pending for approval"); return res;
        }
        );

    return await toast.promise(
        res,
        {
            pending: {
                render() {
                    return "Signup is loading"
                },
            },
            success: {
                render() {
                    return `Successfuly Signup your account`
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

export const getReportTotal = async () => {
    const res = await axiosInstance.get("/report/total");

    return res.data;
}

export const getReportSales = async () => {
    const res = await axiosInstance.get("/report/total/sales");

    return res.data;
}

export const getReportPopular = async () => {
    const res = await axiosInstance.get("/report/popular");

    return res.data;
}

export const getReportLowStock = async () => {
    const res = await axiosInstance.get("/report/low");

    return res.data;
}


export const mainQueryClient = new QueryClient();