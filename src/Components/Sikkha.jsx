// import axios from "axios";
// import { useEffect, useState } from "react";
// import SmallCard from "./SmallCard/SmallCard";
// import { Link } from "react-router-dom";

// const Sikkha = () => {
//     const [binodonNews, setBinodonNews] = useState([]);
//     const [oparbanglaNews, setOparbanglaNews] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get("https://akash-newspaper-server.vercel.app/news");

//           const sortByDate = (newsArray) => {
//             return newsArray.sort((a, b) => new Date(b.date) - new Date(a.date));
//           };

//           const binodon = sortByDate(response.data.filter(news => news.category === "স্বাস্থ্য"));
//           const oparbangla = sortByDate(response.data.filter(news => news.category === "শিক্ষা"));

//           setBinodonNews(binodon);
//           setOparbanglaNews(oparbangla);
//         } catch (error) {
//           console.error("Error fetching the news data", error);
//         }
//       };

//       fetchData();
//     }, []);

//     if (binodonNews.length === 0 || oparbanglaNews.length === 0) {
//       return <p>Loading...</p>;
//     }

//     const truncateTitle = (title = "", wordLimit) => {
//       const words = title.split(" ");
//       if (words.length > wordLimit) {
//         return words.slice(0, wordLimit).join(" ") + "...";
//       }
//       return title;
//     };

//     return (
//         <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Left Column */}
//         <div className="col-span-2">
//           <div className="bg-red-600 text-white p-2 rounded">স্বাস্থ্য</div>
//           <div>
//             <div className="grid lg:grid-cols-2 gap-3 my-3">
//               {binodonNews.slice(0, 2).map((latestNews) => (
//                 <Link key={latestNews._id} to={`/newsDetails/${latestNews._id}`}>
//                     <div  className="w-full overflow-hidden border border-gray-400 my-4 rounded-lg bg-gray-100">
//                   <div className="relative w-full h-[250px]">
//                     <img
//                       className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
//                       src={latestNews.photo}
//                       alt="News"
//                     />
//                     <div className="absolute bottom-0 w-full bg-gray-700 bg-opacity-40 text-white px-2 py-4">
//                       <div className="font-bold text-sm md:text-xl">{latestNews.title}</div>
//                     </div>
//                   </div>
//                 </div>
//                 </Link>

//               ))}
//             </div>
//             <div className="grid lg:grid-cols-3 gap-3 mb-3">
//               {oparbanglaNews.slice(2, 5).map((data) => (
//                 <Link key={data._id} to={`/newsDetails/${data._id}`} className="block shadow-lg h-full">
//                   <div className="flex flex-col h-full">
//                     <img
//                       className="w-full h-[140px] object-cover"
//                       src={data.photo}
//                       alt="News"
//                     />
//                     <div className="px-6 py-4 flex-1 flex flex-col justify-between">
//                       <div className="text-black text-start mb-2">
//                         {truncateTitle(data.title, 7)}
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div>
//           <div className="bg-red-600 text-white p-2 rounded">শিক্ষা</div>
//           <div className="grid grid-cols-1 my-3 mt-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4">
//             {oparbanglaNews.slice(1, 8).map((article) => (
//               <SmallCard key={article._id} article={article} />
//             ))}
//           </div>
//           <img className="w-full h-200px mt-4" src="https://i.ibb.co/1GTjGnL/Fresh-Exercise-Book.jpg" alt="" />
//         </div>
//       </div>
//     </div>
//     );
// };

// export default Sikkha;

import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard/NewsCard";
import SmallCard from "./SmallCard/SmallCard";

const Sikkha = () => {
  const [binodonNews, setBinodonNews] = useState([]);
  const [oparbanglaNews, setOparbanglaNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://akash-newspaper-server.vercel.app/news"
        );

        const sortByDate = (newsArray) => {
          return newsArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        };

        const binodon = sortByDate(
          response.data.filter((news) => news.category === "স্বাস্থ্য")
        );
        const oparbangla = sortByDate(
          response.data.filter((news) => news.category === "শিক্ষা")
        );

        setBinodonNews(binodon);
        setOparbanglaNews(oparbangla);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    };

    fetchData();
  }, []);

  if (binodonNews.length === 0 || oparbanglaNews.length === 0) {
    return <p>Loading...</p>;
  }

  const truncateTitle = (title = "", wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Health Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
            স্বাস্থ্য
          </h2>
          {binodonNews.length > 0 && (
            <div className="space-y-4">
              <div className="w-full overflow-hidden rounded-lg">
                <NewsCard {...binodonNews[0]} />
              </div>
              {binodonNews.slice(1, 4).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
            শিক্ষা
          </h2>
          {oparbanglaNews.length > 0 && (
            <div className="space-y-4">
              <div className="w-full overflow-hidden rounded-lg">
                <NewsCard {...oparbanglaNews[0]} />
              </div>
              {oparbanglaNews.slice(1, 4).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sikkha;
