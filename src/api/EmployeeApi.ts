import { axiosInstance } from ".";

export async function getEmployee() {
    const res = await axiosInstance.get("/employee/");
    return res.data;
}

export async function deleteEmployee(id: string) {
    const deleteUser = await axiosInstance.delete("/employee/" + id);

    return deleteUser.data;
}