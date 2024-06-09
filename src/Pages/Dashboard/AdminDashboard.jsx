import { NavLink } from "react-router-dom";
import {
  FaBlog,
  FaBlogger,
  FaBorderAll,
  FaEmpire,
  FaHome,
  FaUsers,
} from "react-icons/fa";

import { RxDashboard } from "react-icons/rx";

import { MdAccountCircle, MdCampaign } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPeopleGroup,  } from "react-icons/fa6";



const AdminDashboard = () => {
  return (
    <div className="overflow-y-scroll h-screen">
      <div className="w-[250px]">
        <img
          className="w-44 mx-auto"
          src="https://i.ibb.co/sHLrjHq/Logo-Nilakash-Today-1.png"
          alt=""
        />
        <ul className="space-y-5">
          <li className="bg-[#003A90] rounded-lg my-2">
            <NavLink
              to="dashboard/admin/home"
              activeClassName="text-red-500 bg-red-200"
              className="flex items-center py-2 px-4 rounded-lg"
            >
              <RxDashboard className="mr-2" />
              Admin Dashboard
            </NavLink>
          </li>

        
             <li>
                  <NavLink
                    to="dashboard/addNews"
                    className="text-white bg-red-800 hover:bg-green-300 hover:text-black"
                    activeClassName="bg-green-300"
                  >
                    <MdAccountCircle className="w-6 h-6" /> Add News
                  </NavLink>
                </li>
             <li>
                  <NavLink
                    to="dashboard/allUsers"
                    className="text-white bg-red-800 hover:bg-green-300 hover:text-black"
                    activeClassName="bg-green-300"
                  >
                    <MdAccountCircle className="w-6 h-6" /> All Users
                  </NavLink>
                </li>
               
               
               
                <li>
                  <NavLink
                    to="dashboard/allEmployee"
                    className="text-white bg-red-800 hover:bg-green-300 hover:text-black"
                    activeClassName="bg-green-300"
                  >
                    <FaPeopleGroup className="w-6 h-6" />All News
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="dashboard/employeePayment"
                    className="text-white bg-red-800 hover:bg-green-300 hover:text-black"
                    activeClassName="bg-green-300"
                  >
                    <FaPeopleGroup className="w-6 h-6" /> Settings
                  </NavLink>
                </li>

          <li className="bg-[#003A90] rounded-lg my-2">
            <NavLink to="/">
              <FaHome className="mr-2" />
              Go Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AdminDashboard;
