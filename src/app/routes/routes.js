/* eslint-disable react/prop-types */
import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/ui/layout";
import NotFound from "../components/ui/notFound";
import Favourites from "../pages/favourites";
import Main from "../pages/mainPage";
import User from "../pages/userPage";
import teamData from "../mockData/teamMates.json";

const DynamicUserBreadcrumb = ({ match }) => {
    const bcUser = teamData.find((m) => +m._id === +match.params.userId);
    return <span key={match.params.userId}>{bcUser.name}</span>;
};

const UsersRedirect = () => {
    const { userId } = useParams();
    return <Navigate to={`/user/${userId}`} />;
};
// DynamicUserBreadcrumb
export const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                breadcrumb: "Главная",
                element: <Main />
            },
            {
                path: "user",
                breadcrumb: "Участники команды",
                children: [
                    {
                        index: true,

                        element: <Navigate to="1" />
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
                element: <Favourites />
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
