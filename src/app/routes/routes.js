import PropTypes from "prop-types";
import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/ui/layout";
import NotFound from "../pages/notFound";
import Favourites from "../pages/matesFav";
import Main from "../pages/mainPage";
import User from "../pages/mateProfile";
import teamData from "../mockData/teamMates.json";
import Mates from "app/pages/matesRest";

const DynamicUserBreadcrumb = ({ match }) => {
    const bcUser = teamData.find((m) => +m._id === +match.params.userId);
    return <span key={match.params.userId}>{bcUser.name}</span>;
};

const UsersRedirect = () => {
    const { userId } = useParams();
    return <Navigate to={`/user/${userId}`} />;
};

export const routes = [
    {
        path: "/",
        breadcrumb: "Главная",
        element: <Layout />,
        children: [
            {
                path: "02-hackathon",
                element: <Navigate to="/" />
            },
            {
                index: true,
                element: <Main />
            },
            {
                path: "user",
                breadcrumb: "Участники команды",
                children: [
                    {
                        index: true,

                        element: <Navigate to="../mates" />
                    },
                    {
                        path: ":userId",
                        breadcrumb: DynamicUserBreadcrumb,
                        children: [
                            {
                                index: true,

                                element: <User />
                            },
                            {
                                path: "*",
                                element: <Navigate to="../" />
                            }
                        ]
                    }
                ]
            },
            {
                path: "users",
                breadcrumb: "Участники команды",
                children: [
                    {
                        index: true,
                        element: <Navigate to="../user" />
                    },
                    {
                        path: ":userId",
                        element: <UsersRedirect />
                    }
                ]
            },
            {
                path: "favourites",
                breadcrumb: "Избранное",
                element: <Favourites />,
                menu: true
            },
            {
                path: "mates",
                breadcrumb: "Участники",
                element: <Mates />,
                menu: true
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
];
DynamicUserBreadcrumb.propTypes = {
    match: PropTypes.object
};
