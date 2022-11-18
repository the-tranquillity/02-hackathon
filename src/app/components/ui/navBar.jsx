import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    const activLink = (active) => (active ? "nav-link active" : "nav-link");
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={
                            +isOpen
                                ? "d-flex mx-auto"
                                : "collapse navbar-collapse"
                        }
                        id="navbarText"
                    >
                        <ul className="navbar-nav  mb-1 mb-lg-0 mx-lg-auto">
                            <li className="nav-item me-3">
                                <NavLink
                                    className={({ isActive }) =>
                                        activLink(isActive)
                                    }
                                    aria-current="page"
                                    to="/"
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink
                                    className={({ isActive }) =>
                                        activLink(isActive)
                                    }
                                    to="/favourites"
                                >
                                    Избранные
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
