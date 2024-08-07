import { Helmet } from "react-helmet-async";
import AdminDashboard from "./AdminDashboard";






const Dashboard = ({ showSidebar }) => {


  return (
        <div
          className={` bg-[#1b1b1b] w-48 min-h-screen lg:fixed text-white  ${
            showSidebar ? "block" : "hidden"
          } md:block`}
        >
          <Helmet>
        <title>NilAkashToday | AdminDashboard</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
          <ul className="menu  text-center text-lg md:text-xl">
               <AdminDashboard></AdminDashboard> 
          </ul>
        </div>
  ); 
};

export default Dashboard;
