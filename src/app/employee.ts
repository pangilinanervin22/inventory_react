import { create } from 'zustand';
import { iEmployee } from '../utils/types';



type EmployeeStore = {
    employees: iEmployee[];
    addEmployee: (employee: iEmployee) => void;
    updateEmployee: (id: string, employee: iEmployee) => void;
    deleteEmployee: (id: string) => void;
};

export const useEmployeeStore = create<EmployeeStore>((set) => ({
    employees: [],
    addEmployee: (employee) => {
        set((state) => ({
            employees: [...state.employees, employee],
        }));
    },
    updateEmployee: (id, updatedEmployee) => {
        set((state) => ({
            employees: state.employees.map((employee) =>
                employee.employee_id === id ? updatedEmployee : employee
            ),
        }));
    },
    deleteEmployee: (id) => {
        set((state) => ({
            employees: state.employees.filter((employee) => employee.employee_id !== id),
        }));
    },
}));