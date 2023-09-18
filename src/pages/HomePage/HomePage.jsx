import { ROUTER_URL_LIST } from '../../constants/index.js';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <h1>
      Home page <Link to={ROUTER_URL_LIST.CATALOG}>to catalog</Link>
    </h1>
  );
};
