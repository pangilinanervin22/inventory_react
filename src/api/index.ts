import { QueryClient } from "@tanstack/react-query";
import { toast } from 'react-toastify';
import { listEmployee } from "./fake.data/employee";

interface UserLogin {
    username: string;
    password: string;
}

export const employeeLogin = async (data: UserLogin) => {
    const fetch = new Promise<any>((resolve, reject) => {
        const find = listEmployee.find(employee => employee.username == data.username);

        setTimeout(() => {
            if (data.username === find?.username && data.password === find.password)
                resolve(find);
            else if (!find)
                reject(new Error('Username is not exist'));
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
                    return `Successfully login`
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

export async function signUpEmployee(data: any) {
    const fetch = new Promise<any>((resolve, reject) => {
        setTimeout(() => { resolve(data) }, 2000);
    });

    return await toast.promise(
        fetch,
        {
            pending: {
                render() {
                    return "Signup is loading"
                },
            },
            success: {
                render() {
                    return `Successfully Signup your account`
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

export async function requestSuccess(message: string) {
    const fetch = new Promise<any>((resolve, reject) => {
        setTimeout(() => { resolve(message) }, 1000);
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
                    return message;
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

export const mainQueryClient = new QueryClient();