import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Components/Navber/Navber";
import ScrollTop from "./ScrollTop";
import TheAdmin from "./TheAdmin";
import Footer from "./Components/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const noheaderfooter =
    location.pathname.includes("dashboard") ||
    location.pathname.includes("login") ||
    location.pathname.includes("signup");
    location.pathname.includes("search");

  return (
    <div className="bg-white">
      <ScrollTop />
      {noheaderfooter || <TheAdmin />}
      {noheaderfooter || <NavBar />}
      <div className="min-h-screen overflow-y-hidden  mx-12">
        <Outlet />
      </div>
      {noheaderfooter || <Footer />}
    </div>
  );
};

export default Root;
