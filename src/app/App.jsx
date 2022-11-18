import { useRoutes } from 'react-router-dom';
import NavBar from './components/ui/navBar';
// import Container from 'react-bootstrap/esm/Container';
import { routes } from './routes/routes';

const App = () => {
  const elements = useRoutes(routes);
  return <>{elements}</>;
};

export default App;
