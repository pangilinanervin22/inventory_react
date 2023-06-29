import { useModalStore } from "./ModalContainer";

interface thisProps {
  confirmAction: () => void;
  titleDelete: string;
}

export default function DeleteModal({ confirmAction, titleDelete }: thisProps) {
  const closeModal = useModalStore(state => state.closeModal);
  return (
    <div>
      <h2>{titleDelete || "Are you sure you want to delete?"}</h2>
      <p>{"This will delete permanently. You cannot undo this action."}</p>
      <button onClick={closeModal}>Cancel</button>
      <button onClick={confirmAction}>Delete</button>
    </div>
  )
}
