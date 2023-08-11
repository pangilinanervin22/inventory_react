import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { iEmployee } from '../utils/types';

type AuthStore = {
    name: string,
    img_src: string,
    position: string,
    token: string,
    login: (token: iEmployee) => void;
    logout: () => void;
};

const storeUserProfile = create<AuthStore>()(
    persist(
        (set) => ({
            name: "",
            img_src: "",
            token: "",
            position: "guest",
            login: (value) => set({
                name: value.name,
                token: value.employee_id,
                position: value.position,
                img_src: value.img_src,
            }),
            logout: () => set({ token: "" })
        }),
        {
            name: "AccountData", // unique name
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
);

export default storeUserProfile;