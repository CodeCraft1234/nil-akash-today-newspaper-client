import MostViewedNews from "../../Components/MostViewedNews/MostViewedNews";
import LatestNews from "../Home/LatestNews";
import NewsCard from "../../Components/NewsCard/NewsCard";
import { useEffect, useState } from "react";
import UseNews from "../../AxiosFetch/UseNews";
const Education= () => {

  const [news,refetch]=UseNews() 
  const [newses,setNewses]=useState([])
  useEffect(()=>{
    const filtered=news.filter(n=>n.category === 'শিক্ষা') 
    console.log(filtered)
    setNewses(filtered)
  },[news])

  console.log(news)

    return (
        <div className="mt-36 mx-3 lg:mx-10">
        <h1 className='text-3xl font-bold ml-5 mr-5 text-blue-500 border-2 border-gray-300 w-full p-4 mb-8 rounded-lg'>
         
শিক্ষা
        </h1>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-lg lg:col-span-2">
            {/* big-card */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
          <div className="rounded-lg">
            <LatestNews />
            <MostViewedNews />
          </div>
        </div>
      </div>
    );
};

export default Education;