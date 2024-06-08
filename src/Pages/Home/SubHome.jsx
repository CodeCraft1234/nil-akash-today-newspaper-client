import NewsCardFinal from "../../Components/NewsCard/NewsCardFinal";
import Banner from "./Banner";
import Carousel from "./Carousel";
import TwoCard from "./TwoCard";


const SubHome = () => {
    return (
        <div className="mt-5 mx-3">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-2">
              <div className=" rounded-lg bg-gray-200 lg:col-span-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-2">
                 <div className=" rounded-lg  lg:col-span-3">
                    <Carousel></Carousel>
                    <TwoCard></TwoCard>
                    </div>
                 <div className=" rounded-lg bg-blue-200 lg:col-span-2"></div>
             </div>
                <NewsCardFinal></NewsCardFinal>
                </div>
              <div className=" rounded-lg bg-gray-200 lg:col-span-1"></div>
            </div>        
        </div>
    );
};

export default SubHome;