import DeleteModal from "../components/common/DeleteModal";
import { useModalStore } from "../components/common/ModalContainer"

export default function Inventory() {
    const { openModal } = useModalStore();

    // openModal(<DeleteModal confirmAction={() => console.log("delete")} />)
    return (
        <>
            <h1>Stock</h1>
            <button onClick={() =>
                openModal(<DeleteModal confirmAction={() => console.log("delete")} />)} >
                Click Me
            </button>
        </>
    )
}
