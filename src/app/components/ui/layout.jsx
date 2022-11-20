import { Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../common/breadcrumbs";
import Footer from "./footer";
import NavBar from "./navBar";

const Layout = () => {
    const location = useLocation();
    return (
        <div className="min-h-screen flex flex-col items-stretch">
            <NavBar />
            {location.pathname !== "/" && <Breadcrumbs />}
            <main className="grow shrink-0 px-1.5">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
/*
shrink-0

*/
