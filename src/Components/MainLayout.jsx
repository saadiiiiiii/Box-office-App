import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';
const MainLayout = () => {
  return (
    <div>
      <Navs />
      <AppTitle title="Hello" subtitle="" />
      <Outlet></Outlet>
    </div>
  );
};
export default MainLayout;
