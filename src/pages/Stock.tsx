import { useModalStore } from "../components/common/ModalContainer"

export default function Inventory() {
    const { openModal } = useModalStore();

    return (
        <>
            <h1>Stock</h1>
            <button onClick={() => openModal(<h1>A modal</h1>)}>click me</button>
        </>
    )
}
