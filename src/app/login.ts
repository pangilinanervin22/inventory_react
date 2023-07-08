import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthStore = {
    img_src: string,
    position: string,
    isAuthenticated: boolean;
    token: "",
    login: (token: any) => void;
    logout: () => void;
    changeCredentials: (value: any) => void;
};

const storeUserProfile = create<AuthStore>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            img_src: "",
            token: "",
            position: "guest",
            login: (token: any) => set({ token: token }),
            logout: () => set({ token: "" }),
            changeCredentials: (value: any) =>
                set({
                    position: value.position,
                    img_src: value.img_src,
                    token: value.token,
                }),
        }),
        {
            name: "login", // unique name
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
);

export default storeUserProfile;