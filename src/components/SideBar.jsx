import { Link } from 'react-router-dom';
import logo from '../assets/logo-BfNap0Pe.png';
export default function SideBar() {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-[#F29724] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <i className="fa-solid fa-burger"></i>
      </button>
      <aside
        id="default-sidebar"
        className=" top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto  bg-gray-50 dark:bg-[#1B1D1E]">
          <ul className="space-y-2 font-medium">
            <li>
              <img src={logo} className="w-100" />
            </li>
            <li>
              <Link
                to="/"
                className="border-orange-400 border-solid border-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F29724] hover:scale-105 transition-transform duration-300  group"
              >
                <i className="fa-solid fa-utensils"></i>
                <h2 className="ms-3 text-3xl">Meals</h2>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="border-orange-400 border-solid border-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F29724] hover:scale-105 transition-transform duration-300  group"
              >
                <i className="fa-solid fa-utensils"></i>
                <h2 className="flex-1 ms-3 whitespace-nowrap text-3xl">
                  Ingredients
                </h2>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-orange-400 border-solid border-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#F29724] hover:scale-105 transition-transform duration-300 group"
              >
                <i className="fa-solid fa-warehouse"></i>
                <h2 className="flex-1 ms-3 whitespace-nowrap text-3xl">Area</h2>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
