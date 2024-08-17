import React, { useEffect, useState } from "react";
import UseNews from "../../AxiosFetch/UseNews";
import { Link } from "react-router-dom";

const EveryCategory = () => {
  const [news] = UseNews();
  const [latestNewsByCategory, setLatestNewsByCategory] = useState([]);

  const categories = [
    "জাতীয়",
    "আন্তর্জাতিক",
    "রাজনীতি",
    "অর্থনীতি",
    "সারাদেশ",
    "বিনোদন",
    "খেলা",
    "শিক্ষা",
    "উপর বাংলা",
    "স্বাস্থ্য",
  ];

  useEffect(() => {
    if (news && news.length > 0) {
      const latestNews = categories
        .map((category) => {
          const newsInCategory = news.filter(
            (item) => item.category === category
          );
          return newsInCategory.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          )[0];
        })
        .filter((item) => item); // Filter out undefined values

      setLatestNewsByCategory(latestNews);
    }
  }, [news]);

  const truncateTitle = (title = "", wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  return (
    <div className="grid gap-5 p-4 m-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {latestNewsByCategory.map((newsItem) => (
        <div
          key={newsItem._id}
          className="hover:text-blue-800 rounded-lg overflow-hidden shadow-lg border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-start"
        >
          <Link to={`/newsDetails/${newsItem._id}`} className="block h-full">
            <div className="flex flex-col h-full">
              <div className="w-full h-[270px] flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src={newsItem.photo}
                  alt="News"
                />
              </div>
              <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div className="text-black text-start mb-2">
                  {truncateTitle(newsItem.title, 7)}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EveryCategory;
