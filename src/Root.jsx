import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navber/Navber";
import Footer from "./Components/Footer/Footer";


const Root = () => {
    return (
        <div className="bg-white">
            <NavBar></NavBar>
           <div className="min-h-screen bg-white">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;