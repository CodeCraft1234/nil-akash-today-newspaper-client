
// import { Helmet } from "react-helmet-async";
import AddAddress from "./AddAddress";
import AddLinks from "./AddLinks";
import AddLogos from "./AddLogos";
import AddNumber from "./AddNumbers";

const Settings = () => {
    return (
        <div className=" py-8 mx-4">
            
            {/* <Helmet>
        <title>NilAkashToday | Settings</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet> */}
           <div>
           <AddLogos></AddLogos>
           <AddAddress></AddAddress>
           <AddNumber></AddNumber>
           <AddLinks></AddLinks>
           </div>
          
        </div>
    );
};

export default Settings;
