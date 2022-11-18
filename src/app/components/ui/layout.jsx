import { Outlet } from 'react-router-dom';
import NavBar from './navBar';

const Layout = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container mt-5 mb-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
