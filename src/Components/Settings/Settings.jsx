import AddAddress from "./AddAddress";
import AddLinks from "./AddLinks";
import AddLogos from "./AddLogos";
import AddNumber from "./AddNumbers";

const Settings = () => {
    return (
        <div className=" py-8 mx-4">

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