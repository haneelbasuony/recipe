import { Link } from 'react-router-dom';
import logo from '../assets/logo-BfNap0Pe.png';
export default function Footer() {
  return (
    <>
      <footer className="bg-[#17191A] rounded-lg shadow-sm m-4 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <h2 className="text-white text-4xl">Recipe</h2>

          <img src={logo} className="w-1/12" />

          <ul className="flex flex-wrap items-center mt-3 text-lg cursor-pointer font-medium text-white sm:mt-0">
            <li>
              <h2 className="hover:underline me-4 md:me-6">About</h2>
            </li>
            <li>
              <h2 className="hover:underline me-4 md:me-6">Privacy Policy</h2>
            </li>
            <li>
              <h2 className="hover:underline me-4 md:me-6">Licensing</h2>
            </li>
            <li>
              <h2 className="hover:underline">Contact</h2>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
