import { useNavigate } from "react-router-dom";

export default function Sales() {
    const navigate = useNavigate();

    navigate("/")

    return (
        <>
            <h1>Sales</h1>
            <button onClick={() => { }}>click me</button>
        </>
    )
}
