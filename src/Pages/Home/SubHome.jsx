import MostViewedNews from "../../Components/MostViewedNews/MostViewedNews";
import NewsCardFinal from "../../Components/NewsCard/NewsCardFinal";
import NewsSide from "../../Components/NewsCard/NewsSide/NewsSide";
import Banner from "./Banner";
import Carousel from "./Carousel";
import LatestNews from "./LatestNews";
import TwoCard from "./TwoCard";


const SubHome = () => {
    return (
        <div className="mt-5 mx-3">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-2">
              <div className=" rounded-lg  lg:col-span-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-2">
                 <div className=" rounded-lg  lg:col-span-3">
                    <Carousel></Carousel>
                    <TwoCard></TwoCard>
                    </div>
                 <div className=" rounded-lg space-y-5 lg:col-span-2">
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                </div>
             </div>
                <NewsCardFinal></NewsCardFinal>
                </div>
              <div className=" rounded-lg  lg:col-span-1">
                <img src="https://i.ibb.co/z8vr3sm/1000010077.jpg" alt="" />
              <LatestNews></LatestNews>
              <img src="https://i.ibb.co/z8vr3sm/1000010077.jpg" alt="" />
                <MostViewedNews></MostViewedNews>
              </div>
            </div>        
        </div>
    );
};

export default SubHome;