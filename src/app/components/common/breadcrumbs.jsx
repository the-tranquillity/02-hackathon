import { routes } from "app/routes/routes";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);
    return (
        <div className=" my-4 shrink-0 container mx-auto">
            <div className="text-sm breadcrumbs">
                <ul>
                    {breadcrumbs.map(({ match, breadcrumb }, i) => (
                        <li key={"bc-key" + i}>
                            {breadcrumbs.length > i + 1 ? (
                                <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                            ) : (
                                <>{breadcrumb}</>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumbs;
