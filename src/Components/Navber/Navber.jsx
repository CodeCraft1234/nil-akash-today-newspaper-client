import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Security/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className={`navbar text-black bg-white mb-44 lg:pt-1 px-4 shadow-lg py-2 lg:px-10 md:px-8 fixed z-50 border-b ${user ? 'top-8' : 'top-0'}`}>
      <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center py-3">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Open menu"
            onClick={toggleSidebar}
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
        <Link to="/" className="flex items-center lg:justify-start justify-center w-full lg:w-auto">
          <img
            className="h-12 w-auto"
            src="https://i.ibb.co/sHLrjHq/Logo-Nilakash-Today-1.png"
            alt="Nilakash Today"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-4">
            {[
              "জাতীয়",
              "আন্তর্জাতিক",
              "রাজনীতি",
              "অর্থনীতি",
              "সারাদেশ",
              "বিনোদন",
              "খেলা",
              "শিক্ষা",
              "উপর বাংলা",
              "স্বাস্থ্য"
            ].map((category) => (
              <NavLink
                key={category}
                to={`/category/${category}`}
                className={({ isActive }) =>
                  `text-gray-800 hover:text-blue-600 px-1 py-2 rounded-md font-medium ${isActive ? "bg-blue-100 text-blue-600" : ""}`
                }
              >
                {category}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeSidebar}></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-lg">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:bg-gray-600"
                onClick={closeSidebar}
              >
                <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-5 flex-1 h-0 overflow-y-auto">
              <nav className="px-2">
                {[
                  "জাতীয়",
                  "আন্তর্জাতিক",
                  "রাজনীতি",
                  "অর্থনীতি",
                  "সারাদেশ",
                  "বিনোদন",
                  "খেলা",
                  "শিক্ষা",
                  "উপর বাংলা",
                  "স্বাস্থ্য"
                ].map((category) => (
                  <NavLink
                    key={category}
                    to={`/category/${category}`}
                    className="block text-black py-2 px-4 hover:bg-gray-100 rounded-md"
                    onClick={closeSidebar}
                  >
                    {category}
                  </NavLink>
                ))}
                <NavLink
                  to={"/addNews"}
                  className="block text-black py-2 px-4 hover:bg-gray-100 rounded-md"
                  onClick={closeSidebar}
                >
                  Add News
                </NavLink>
                <NavLink
                  to={"/dashboard"}
                  className="block text-black py-2 px-4 hover:bg-gray-100 rounded-md"
                  onClick={closeSidebar}
                >
                  Dashboard
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
