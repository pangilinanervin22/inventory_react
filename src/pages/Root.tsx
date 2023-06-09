import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Root() {

    return (
        <>
            <NavBar />
            <h1>Hello World</h1>
            <Outlet />
        </>
    )
}

