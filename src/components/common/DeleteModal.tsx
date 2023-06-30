import { useModalStore } from "./ModalContainer";
import styles from '../../styles/components/common/ModalContainer.module.scss'

interface thisProps {
  confirmAction: () => void;
  titleDelete?: string;
}

export default function DeleteModal({ confirmAction, titleDelete }: thisProps) {
  const { closeModal } = useModalStore();
  return (
    <div className={styles.delete_modal_container}>
      <h2>{titleDelete || "Are you sure you want to delete?"}</h2>
      <p>{"This will delete permanently. You cannot undo this action."}</p>
      <div>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={() => {
          confirmAction();
          closeModal();
        }}>
          Delete</button>
      </div>
    </div>
  )
}
