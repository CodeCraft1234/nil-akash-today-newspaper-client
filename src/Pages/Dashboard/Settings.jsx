
import { Helmet } from "react-helmet-async";
import AddAddress from "./AddAddress";
import AddBanner from "./AddBanner";
import AddLinks from "./AddLinks";
import AddLogos from "./AddLogos";
import AddNumber from "./AddNumber";




const Settings = () => {
    return (
        <div className=" py-8 mx-4">
           <Helmet>
        <title>NilAkashToday | Settings</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
           <div>
           <AddLogos></AddLogos>
           <AddBanner></AddBanner>
           <AddAddress></AddAddress>
           <AddNumber></AddNumber>
           <AddLinks></AddLinks>
           </div>
          
        </div>
    );
};

export default Settings;