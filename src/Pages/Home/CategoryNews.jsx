import { useEffect, useState } from "react";
import axios from "axios";

import MainCard from "../../Components/MainCard/MainCard";
import SmallCard from "../../Components/SmallCard/SmallCard";

const CategoryNews = () => {
  const [saradeshNews, setSaradeshNews] = useState([]);
  const [shikkhaNews, setShikkhaNews] = useState([]);
  const [upamahadeshNews, setUpamahadeshNews] = useState([]);
  const [healthNews, setHealthNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://akash-newspaper-server.vercel.app/news");
        const saradesh = response.data.filter(
          (news) => news.category === "সারাদেশ"
        );
        const shikkha = response.data.filter(
          (news) => news.category === "শিক্ষা"
        );
        const upamahadesh = response.data.filter(
          (news) => news.category === "উপার বাংলা"
        );
        const healthNews = response.data.filter(
          (news) => news.category === "স্বাস্থ্য"
        );
        setSaradeshNews(saradesh);
        setShikkhaNews(shikkha);
        setUpamahadeshNews(upamahadesh);
        setHealthNews(healthNews);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    };

    fetchData();
  }, []);

  if (
    saradeshNews.length === 0 ||
    shikkhaNews.length === 0 ||
    upamahadeshNews.length === 0
  ) {
    return <p>Loading...</p>;
  }

  const renderCategorySection = (title, news) => (
    <div>
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 shadow-md text-white">
        {title}
      </h2>
      <div className="flex flex-col gap-4">
        <div className="lg:w-full">
          <MainCard article={news[0]} />
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {news.slice(1, 5).map((article) => (
            <SmallCard key={article.id} article={article} />
          ))}
        </div> */}
      </div>
    </div>
  );

  return (
    <div className="  px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className=" rounded-lg  lg:col-span-1">
          <img src="https://i.ibb.co/z8vr3sm/1000010077.jpg" alt="" />
        </div>
        {renderCategorySection("সারাদেশ", saradeshNews)}
        {renderCategorySection("শিক্ষা", shikkhaNews)}
        {renderCategorySection("উপার বাংলা", upamahadeshNews)}
        {renderCategorySection("স্বাস্থ্য", healthNews)}
      </div>
    </div>
  );
};

export default CategoryNews;
