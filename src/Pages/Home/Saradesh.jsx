import NewsSide from "../../Components/NewsCard/NewsSide/NewsSide";
import Carousel from "./Carousel";
import TwoCard from "./TwoCard";


const Saradesh = () => {
    return (
        <div >
            
            <h1 className='text-3xl font-bold ml-5 my-3 text-black'>বাংলাদেশ {'>'} </h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-2">
                 <div className=" rounded-lg  lg:col-span-3">
                 <div className="w-full overflow-hidden my-4 rounded-lg shadow-lg">
              <img
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                src='https://i.ibb.co/kgYtcF7/kajol.jpg'
                alt="News"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-xl mb-2">
                  সিন্দাবাদ-আলাদীনের মতো কাজল রেখাও দর্শকমনে স্থান করে নেবে
                </div>
                <p className="text-black text-sm md:text-base">
                  চট্টগ্রামের আনোয়ারা উপজেলায় বাজেটকে স্বাগত জানিয়ে আনন্দ মিছিলের আগে অর্থ প্রতিমন্ত্রী ওয়াসিকা আয়শা খান ও সাবেক ভূমিমন্ত্রী সাইফুজ্জামান চৌধুরীর অনুসারীদের দু’গ্রুপের সংঘর্ষের ঘটনা ঘটেছে
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  ১ বছর আগে
                </span>
              </div>
            </div>
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