import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthStore = {
    img_src: string,
    position: string,
    token: string,
    login: (token: any) => void;
    logout: () => void;
    changeCredentials: (value: any) => void;
};

const storeUserProfile = create<AuthStore>()(
    persist(
        (set) => ({
            img_src: "",
            token: "",
            position: "guest",
            login: (token: string) => set({ token: token }),
            logout: () => set({ token: "" }),
            changeCredentials: (value: any) =>
                set({
                    position: value.position,
                    img_src: value.img_src,
                }),
        }),
        {
            name: "AccountData", // unique name
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
);

export default storeUserProfile;