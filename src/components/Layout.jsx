import { Outlet } from 'react-router-dom';

import SideBar from './Sidebar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-grow w-auto">
        <SideBar />
        <div className="flex-grow w-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
