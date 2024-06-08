import NewsSide from "../../Components/NewsCard/NewsSide/NewsSide";
import Carousel from "./Carousel";
import TwoCard from "./TwoCard";


const Saradesh = () => {
    return (
        <div>
            
            <h1 className='text-3xl font-bold ml-5 text-black'>বাংলাদেশ {'>'} </h1>
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
        </div>
    );
};

export default Saradesh;