import { Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../common/breadcrumbs";
import Footer from "./footer";
import NavBar from "./navBar";

const Layout = () => {
    const location = useLocation();
    return (
        <>
            <NavBar />
            {location.pathname !== "/" && (
                <div className="my-4 container mx-auto">
                    <Breadcrumbs />
                </div>
            )}
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
