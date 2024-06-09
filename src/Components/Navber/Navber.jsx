
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="navbar  text-black bg-white font-bold py-3  rounded-md shadow-lg lg:px-28 md:px-10 px-5 fixed z-50 top-0 border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-violet-950 mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <li>
              <NavLink to={"/national"}>জাতীয়</NavLink>
            </li>
            <li>
              <NavLink to={"/interNational"}>আন্তর্জাতিক</NavLink>
            </li>
            <li>
              <NavLink to={"/politics"}>রাজনীতি</NavLink>
            </li>
            <li>
              <NavLink to={"/economics"}>অর্থনীতি</NavLink>
            </li>
            <li>
              <NavLink to={"/wholeBD"}>সারাদেশ</NavLink>
            </li>
            <li>
              <NavLink to={"/Entertainment"}>বিনোদন</NavLink>
            </li>
            <li>
              <NavLink to={"/Sports"}>খেলা</NavLink>
            </li>
            <li>
              <NavLink to={"/Education"}>শিক্ষা</NavLink>
            </li>
            <li>
              <NavLink to={"/WestBengal"}>উপার বাংলা</NavLink>
            </li>
            <li>
              <NavLink to={"/Health"}>স্বাস্থ্য</NavLink>
            </li>
            <li>
              <NavLink to={"/addNews"}>Add News</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <img
              className="h-12 w-44 "
              src="https://i.ibb.co/sHLrjHq/Logo-Nilakash-Today-1.png" // Update this path
              alt="Nilakash Today"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center px-1 flex gap-1">
          <li>
            <NavLink to={"/national"}>জাতীয়</NavLink>
          </li>
          <li>
            <NavLink to={"/interNational"}>আন্তর্জাতিক</NavLink>
          </li>
          <li>
            <NavLink to={"/politics"}>রাজনীতি</NavLink>
          </li>
          <li>
            <NavLink to={"/economics"}>অর্থনীতি</NavLink>
          </li>
          <li>
            <NavLink to={"/wholeBD"}>সারাদেশ</NavLink>
          </li>
          <li>
            <NavLink to={"/Entertainment"}>বিনোদন</NavLink>
          </li>
          <li>
            <NavLink to={"/Sports"}>খেলা</NavLink>
          </li>
          <li>
            <NavLink to={"/Education"}>শিক্ষা</NavLink>
          </li>
          <li>
            <NavLink to={"/WestBengal"}>উপার বাংলা</NavLink>
          </li>
          <li>
            <NavLink to={"/Health"}>স্বাস্থ্য</NavLink>
          </li>
          <li>
              <NavLink to={"/addNews"}>Add News</NavLink>
            </li>
          <li>
              <NavLink to={"dashboard"}>Dashboard</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
       
      </div>
    </div>
  );
};

export default NavBar;
