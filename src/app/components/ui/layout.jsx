import { Outlet } from "react-router-dom";
import Breadcrumbs from "../common/breadcrumbs";
import Footer from "./footer";
import NavBar from "./navBar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-4">
                <div className="mb-4">
                    <Breadcrumbs />
                </div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
