import { useModalStore } from "./ModalContainer";
import styles from '../../styles/components/common/ModalContainer.module.scss'

interface thisProps {
    titleDelete?: string;
}

export default function NotAllowedModal({ titleDelete }: thisProps) {
    const { closeModal } = useModalStore();
    return (
        <div className={styles.delete_modal_container}>
            <h2>{titleDelete || "Are you sure you want to delete?"}</h2>
            <div>
                <button onClick={closeModal}>Confirm</button>
            </div>
        </div>
    )
}
