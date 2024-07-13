import { useEffect, useState } from "react";
import axios from "axios";
import MainCard from "../MainCard/MainCard";
import SmallCard from "../SmallCard/SmallCard";

const NewsCardFinal = () => {
  const [nationalNews, setNationalNews] = useState([]);
  const [internationalNews, setInternationalNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/news");
        const national = response.data.filter(
          (news) => news.category === "অর্থনীতি"
        );
        const international = response.data.filter(
          (news) => news.category === "রাজনীতি"
        );
        setNationalNews(national);
        setInternationalNews(international);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    };

    fetchData();
  }, []);

  if (nationalNews.length === 0 || internationalNews.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 shadow-md text-white">
          অর্থনীতি
          </h2>
          <div className="flex flex-col gap-4">
            <div className="lg:w-full">
              <MainCard article={nationalNews[0]} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {nationalNews.slice(1, 5).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 shadow-md text-white">
          রাজনীতি
          </h2>
          <div className="flex flex-col gap-4">
            <div className="lg:w-full">
              <MainCard article={internationalNews[0]} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {internationalNews.slice(1, 5).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCardFinal;
