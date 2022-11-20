/* eslint-disable react/prop-types */
import { routes } from "app/routes/routes";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);
    const rihgt = <span className="mx-2">{"/"}</span>;
    return (
        <div className="d-flex align-items-center">
            {breadcrumbs.map(({ match, breadcrumb }, i) =>
                breadcrumbs.length > i + 1 ? (
                    <span key={"bc-key" + i}>
                        <NavLink key={"bc-key-" + i} to={match.pathname}>
                            <small>{breadcrumb}</small>
                        </NavLink>
                        {rihgt}
                    </span>
                ) : (
                    <small key={"bc-key-" + i}>{breadcrumb}</small>
                )
            )}
        </div>
    );
};

export default Breadcrumbs;
