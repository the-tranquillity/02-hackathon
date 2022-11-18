import { Outlet } from 'react-router-dom';
import NavBar from './navBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
