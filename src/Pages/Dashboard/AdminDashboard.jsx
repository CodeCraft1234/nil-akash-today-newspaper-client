// import { NavLink } from "react-router-dom";
// import {
//   FaBlog,
//   FaBlogger,
//   FaBorderAll,
//   FaEmpire,
//   FaHome,
//   FaUsers,
// } from "react-icons/fa";

// import { RxDashboard } from "react-icons/rx";

// import { MdAccountCircle, MdCampaign } from "react-icons/md";
// import { IoPeopleSharp } from "react-icons/io5";
// import { FaPeopleGroup,  } from "react-icons/fa6";



// const AdminDashboard = () => {
//   return (
//     <div className="overflow-y-scroll h-screen">
//       <div className="w-[250px]">
//         <img
//           className="w-44 mx-auto"
//           src="https://i.ibb.co/sHLrjHq/Logo-Nilakash-Today-1.png"
//           alt=""
//         />
//         <ul className="space-y-5">
//           <li className="bg-[#003A90] rounded-lg my-2">
//             <NavLink
//               to="dashboard/admin/home"
//               activeClassName="text-red-500 bg-red-200"
//               className="flex items-center py-2 px-4 rounded-lg"
//             >
//               <RxDashboard className="mr-2" />
//               Admin Dashboard
//             </NavLink>
//           </li>

        
//              <li>
//                   <NavLink
//                     to="dashboard/addNews"
//                     className="text-white bg-red-800 hover:bg-green-300 hover:text-black"
//                     activeClassName="bg-green-300"
//                   >
//                     <MdAccountCircle className="w-6 h-6" /> Add News
//                   </NavLink>
//                 </li>
//              <li>
//                   <NavLink
//                     to="dashboard/allUsers"
//                     className="text-white bg-red-800 hover:bg-green-300 hover:text-black"
//                     activeClassName="bg-green-300"
//                   >
//                     <MdAccountCircle className="w-6 h-6" /> All Users
//                   </NavLink>
//                 </li>
               
               
               
//                 <li>
//                   <NavLink
//                     to="dashboard/allEmployee"
//                     className="text-white bg-red-800 hover:bg-green-300 hover:text-black"
//                     activeClassName="bg-green-300"
//                   >
//                     <FaPeopleGroup className="w-6 h-6" />All News
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="dashboard/employeePayment"
//                     className="text-white bg-red-800 hover:bg-green-300 hover:text-black"
//                     activeClassName="bg-green-300"
//                   >
//                     <FaPeopleGroup className="w-6 h-6" /> Settings
//                   </NavLink>
//                 </li>

//           <li className="bg-[#003A90] rounded-lg my-2">
//             <NavLink to="/">
//               <FaHome className="mr-2" />
//               Go Home
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// export default AdminDashboard;




///////////////////
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  useContext, useEffect, useState } from "react";
import { MdOutlinePayments, MdPeopleOutline } from "react-icons/md";
import { BsCartCheckFill, BsCartPlusFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import useLogo from "../../AxiosFetch/useLogo";
import { AuthContext } from "../../Security/AuthProvider";


const AdminDashboard = () => {
  const [logo, setLogo] = useLogo();
  const [latestLogo, setLatestLogo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (logo && logo.length > 0) {
      // Sort the logos based on date in descending order
      const sortedLogo = [...logo].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      // Get the latest logo
      const latest = sortedLogo[0];

      // Set the sorted logo and latest logo state
      setLogo(sortedLogo);
      setLatestLogo(latest);
    }
  }, [logo, setLogo]);

  // const {  logOut } = useContext(AuthContext)
  const navigate = useNavigate();

  // const handleLogOut = () => {
  //   logOut().then().catch();
  //   navigate("/");
  // };

  const getButtonClass = (path) => {
    return `w-full mb-2 text-start  py-2  px-1 rounded-lg focus:outline-none ${
      location.pathname === path
        ? "bg-blue-500 text-white"
        : " text-white hover:bg-red-700"
    }`;
  };

  return (
    <div className="overflow-y-auto text-start h-screen">
     
      <div className="w-[150px]">
        <div className="flex items-center justify-center mb-8">
          <Link to={"/"}>
            <img
              className="h-20 w:24 lg:w-36 "
              src={latestLogo?.photo}
              alt="Logo"
            />
          </Link>
        </div>

        <nav>
          <div className="space-y-2 text-start">
            <Link to="/dashboard/admin/adminHome">
              <button className={getButtonClass("/dashboard/admin/adminHome")}>
                <RxDashboard className="text-xl inline-block mr-2" />
                Dashboard
              </button>
            </Link>
            <Link   to="dashboard/addNews">
              <button className={getButtonClass("/dashboard/admin/allOrders")}>
                <MdOutlinePayments className="text-xl inline-block mr-2" />
               Add News
              </button>
            </Link>
            <Link to="dashboard/allNews">
              <button className={getButtonClass("/dashboard/admin/allProducts")}>
                <BsCartPlusFill className="text-xl inline-block mr-2" />
                All News
              </button>
            </Link>
            
            {/* <Link to="/dashboard/admin/addProduct">
              <button className={getButtonClass("/dashboard/admin/addProduct")}>
                <BsCartCheckFill className="text-xl inline-block mr-2" />
                Add Product
              </button>
            </Link> */}
          
            {/* <Link to="/dashboard/admin/totalCustomers">
              <button className={getButtonClass("/dashboard/admin/totalCustomers")}>
                <MdPeopleOutline className="text-xl inline-block mr-2" />
                Customers
              </button>
            </Link> */}
            <Link to="dashboard/settings">
              <button className={getButtonClass("/dashboard/admin/settings")}>
                <AiOutlineSetting className="text-xl inline-block mr-2" />
                Settings
              </button>
            </Link>
            <Link to="/">
              <button className={getButtonClass("/dashboard/admin/settings")}>
                <AiOutlineSetting className="text-xl inline-block mr-2" />
                Go Home
              </button>
            </Link>

            {/* <button
              onClick={handleLogOut}
              className="mr-2 mb-2 py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-700 focus:outline-none w-full flex items-center justify-center"
            >
              <IoIosLogOut className="text-xl mr-2" />
              Logout
            </button> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AdminDashboard;

