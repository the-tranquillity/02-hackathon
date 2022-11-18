import { Navigate, useParams } from 'react-router-dom';
import Layout from '../components/ui/layout';
import NotFound from '../components/ui/notFound';
import Favourites from '../pages/favourites';
import Main from '../pages/mainPage';
import User from '../pages/userPage';

const UsersRedirect = () => {
  const { userId } = useParams();
  return <Navigate to={`/user/${userId}`} />;
};

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'user',
        children: [
          {
            index: true,
            element: <Navigate to="1" />,
          },
          {
            path: ':userId',
            children: [
              {
                index: true,
                element: <User />,
              },
              {
                path: '*',
                element: <Navigate to="../" />,
              },
            ],
          },
        ],
      },
      {
        path: 'users',
        children: [
          {
            index: true,
            element: <Navigate to="../user" />,
          },
          {
            path: ':userId',
            element: <UsersRedirect />,
          },
        ],
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];
