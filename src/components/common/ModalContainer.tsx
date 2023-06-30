import React from 'react';
import { create } from 'zustand';
import styles from '../../styles/components/common/ModalContainer.module.scss';

type ModalState = {
    isOpen: boolean;
    content: React.ReactNode,
    closeModal: () => void;
    openModal: (content: React.ReactNode) => void;
};

const useModalStore = create<ModalState>((set) => ({
    isOpen: false,
    content: null,
    closeModal: () => set({ isOpen: false, content: null }),
    openModal: (content) => {
        set((state) => {
            if (!state.isOpen)
                return { isOpen: true, content };

            return state;
        });
    },
}));

const ModalContainer: React.FC = () => {
    const { isOpen, closeModal, content } = useModalStore();

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>

            <div className={styles.modal_content}>
                <button className={styles.modal_close} onClick={closeModal}>
                    x
                </button>
                {content}
            </div>
        </div>
    );
};

export default ModalContainer;
export { useModalStore };
