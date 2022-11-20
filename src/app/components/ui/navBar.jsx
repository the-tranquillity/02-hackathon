import useHeightReacher from "app/hooks/useHeightReacher";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const { isReached } = useHeightReacher(10);
    const activLink = (active) => (active ? "text-white bg-transparent" : "text-slate-300");
    return (
        <div
            className={
                "sticky shrink-0 top-0 navbar nav-custom py-[14px] z-40 " +
                (isReached ? "bg-[#0D0D0D]" : "bg-transparent")
            }
        >
            <div className="w-full md:container mx-auto justify-between">
                <div className="navbar-start inline-flex">
                    <NavLink className="btn btn-ghost svg-container" to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 377 377"
                            className="w-[50px] svg-content"
                            width="100%"
                            height="100%"
                        >
                            <path
                                id="Tm4"
                                d="M117.059 208.143v24.894H149.6v65.631h29.852v-65.631H212v-24.894h-94.941Zm130.4 90.525v-40.09h2.371l11.531 40.09h22.2l11.532-40.09h2.37v40.09h28.451v-90.525H288.3l-14.764 51.621h-2.156l-14.764-51.621h-37.608v90.525h28.451Zm129.851-95.841h-20.42l-25.006 30.661v13.194h28.022v8.918h17.4v-8.922h7.979v-13.19h-7.975v-30.661Zm-17.4 14.765v15.9h-12.947Z"
                                className="cls-1"
                                transform="translate(-62 -62)"
                            />
                            <circle cx="188.5" cy="188.5" r="188.5" fill="#fff" />
                            <path
                                id="T4"
                                d="M204.639 298.668V231.55h39.314v-29.1H126.011v29.1h39.314v67.118h39.314Zm108.113-16.682v16.682h38.668v-16.682h23.019v-26.253H351.42v-53.927h-47.591l-55.221 57.678v22.5h64.144Zm-29.227-26.253 29.227-30.391v30.391h-29.227Z"
                                className="cls-1"
                                transform="translate(-62 -62)"
                            />
                        </svg>
                    </NavLink>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-medium">
                        <li>
                            <NavLink className={({ isActive }) => activLink(isActive)} to="/mates">
                                Участники
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => activLink(isActive)}
                                to="/favourites"
                            >
                                Избранные
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 right-0 bg-[#0D0D0D] "
                    >
                        <li>
                            <NavLink
                                className={({ isActive }) => activLink(isActive) + " ml-auto"}
                                to="/favourites"
                            >
                                Избранные
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
