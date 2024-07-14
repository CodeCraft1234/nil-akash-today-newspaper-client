
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Security/AuthProvider";
import { useContext } from "react";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className={`navbar  text-black bg-white mb-44 lg:pt-1 px-4 shadow-lg py-2  lg:px-10 md:px-8 fixed z-50 border-b ${user ? 'top-8' : 'top-0'}`} >
      <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center py-3">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            className="h-12 w-auto"
            src="https://i.ibb.co/sHLrjHq/Logo-Nilakash-Today-1.png"
            alt="Nilakash Today"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-4">
            <NavLink
              to={"/category/জাতীয়"}
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`
              }
            >
              জাতীয়
            </NavLink>
            <NavLink
              to={"/category/আন্তর্জাতিক"}
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`
              }
            >
              আন্তর্জাতিক
            </NavLink>
            <NavLink
              to={"/category/রাজনীতি"}
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`
              }
            >
              রাজনীতি
            </NavLink>
            <NavLink
              to={"/category/অর্থনীতি"}
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`
              }
            >
              অর্থনীতি
            </NavLink>
            <NavLink
              to={"/category/সারাদেশ"}
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`
              }
            >
              সারাদেশ
            </NavLink>
            <NavLink
              to={"/category/বিনোদন"}
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`
              }
            >
              বিনোদন
            </NavLink>
            <NavLink
              to={"/category/খেলা"}
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`
              }
            >
              খেলা
            </NavLink>
            <NavLink
              to={"/category/শিক্ষা"}
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`
              }
            >
              শিক্ষা
            </NavLink>
            <NavLink
              to={"/category/উপার বাংলা"}
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`
              }
            >
              উপার বাংলা
            </NavLink>
            <NavLink
              to={"/category/স্বাস্থ্য"}
              className={({ isActive }) =>
                `text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md font-medium ${
                  isActive ? "bg-blue-100 text-blue-600" : ""
                }`
              }
            >
              স্বাস্থ্য
            </NavLink>
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="lg:hidden">
          <ul className="menu menu-sm dropdown-content bg-violet-950 mt-3 z-[1] p-2 shadow rounded-box w-52 absolute right-0">
            <NavLink
              to={"/category/জাতীয়"}
              className="text-white py-2 px-1 hover:bg-violet-700 rounded-md"
            >
              জাতীয়
            </NavLink>
            <NavLink
              to={"/category/আন্তর্জাতিক"}
              className="text-white py-2 px-1 hover:bg-violet-700 rounded-md"
            >
              আন্তর্জাতিক
            </NavLink>
            <NavLink
              to={"/category/রাজনীতি"}
              className="text-white py-2 px-1 hover:bg-violet-700 rounded-md"
            >
              রাজনীতি
            </NavLink>
            <NavLink
              to={"/category/অর্থনীতি"}
              className="text-white py-2 px-1 hover:bg-violet-700 rounded-md"
            >
              অর্থনীতি
            </NavLink>
            <NavLink
              to={"/category/সারাদেশ"}
              className="text-white py-2 px-4 hover:bg-violet-700 rounded-md"
            >
              সারাদেশ
            </NavLink>
            <NavLink
              to={"/category/বিনোদন"}
              className="text-white py-2 px-4 hover:bg-violet-700 rounded-md"
            >
              বিনোদন
            </NavLink>
            <NavLink
              to={"/category/খেলা"}
              className="text-white py-2 px-4 hover:bg-violet-700 rounded-md"
            >
              খেলা
            </NavLink>
            <NavLink
              to={"/category/শিক্ষা"}
              className="text-white py-2 px-4 hover:bg-violet-700 rounded-md"
            >
              শিক্ষা
            </NavLink>
            <NavLink
              to={"/category/উপার বাংলা"}
              className="text-white py-2 px-4 hover:bg-violet-700 rounded-md"
            >
              উপার বাংলা
            </NavLink>
            <NavLink
              to={"/category/স্বাস্থ্য"}
              className="text-white py-2 px-4 hover:bg-violet-700 rounded-md"
            >
              স্বাস্থ্য
            </NavLink>
            <NavLink
              to={"/addNews"}
              className="text-white py-2 px-4 hover:bg-violet-700 rounded-md"
            >
              Add News
            </NavLink>
            <NavLink
              to={"/dashboard"}
              className="text-white py-2 px-4 hover:bg-violet-700 rounded-md"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
