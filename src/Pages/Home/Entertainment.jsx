import NewsSide from "../../Components/NewsCard/NewsSide/NewsSide";


const Entertainment = () => {
    return (
        <div>
             <h1 className='text-3xl font-bold ml-5 text-black'>বিনোদন {'>'} </h1>
            <div className="grid grid-cols-1  gap-4 lg:grid-cols-3 lg:gap-8">
                <div className=" border-r-2 px-5 border-black  space-y-5 ">
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    
                </div>
                <div className="ck rounded-lg ">
                <div className="w-full  overflow-hidden  my-4">
      <img className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105" src='https://i.ibb.co/kgYtcF7/kajol.jpg' alt="News" />
      <div className="px-6 py-4">
        <div className="font-bold text-sm md:text-xl mb-2">সিন্দাবাদ-আলাদীনের মতো কাজল রেখাও দর্শকমনে স্থান করে নেবে</div>
        <p className="text-black text-sm md:text-base">চট্টগ্রামের আনোয়ারা উপজেলায় বাজেটকে স্বাগত জানিয়ে আনন্দ মিছিলের আগে অর্থ প্রতিমন্ত্রী ওয়াসিকা আয়শা খান ও সাবেক ভূমিমন্ত্রী সাইফুজ্জামান চৌধুরীর অনুসারীদের দু’গ্রুপের সংঘর্ষের ঘটনা ঘটেছে</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        ১ বছর আগে
        </span>
      </div>
    </div>
                </div>
                <div className="space-y-5 border-l-2 px-5 border-black ">
                     <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                     <NewsSide></NewsSide>
                   
                </div>
            </div>
        </div>
    );
};

export default Entertainment;