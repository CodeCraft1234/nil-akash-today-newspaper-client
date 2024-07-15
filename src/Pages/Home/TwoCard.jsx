import { useEffect, useState } from "react";
import axios from "axios";
import MainCard from "../../Components/MainCard/MainCard";
import SmallCard from "../../Components/SmallCard/SmallCard";
import NewsCard from "../../Components/NewsCard/NewsCard";
import { Link } from "react-router-dom";

const TwoCard = () => {
  const [nationalNews, setNationalNews] = useState([]);
  const [internationalNews, setInternationalNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://akash-newspaper-server.vercel.app/news");
        const national = response.data.filter(
          (news) => news.category === "জাতীয়"
        );
        const international = response.data.filter(
          (news) => news.category === "আন্তর্জাতিক"
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

  const truncateTitle = (title = "", wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };
  return (
    <div className=" px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2  text-white">
            জাতীয়
          </h2>
          <div className="flex flex-col gap-4">
            <div className="lg:w-full">
            <div  className="rounded-lg">
                <NewsCard {...nationalNews[0]} />
            </div>
            </div>
            <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {nationalNews.slice(1, 5).map((article) => (
                  <SmallCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: International News */}
        <div className="">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 shadow-md text-white">
            আন্তর্জাতিক
          </h2>
          <div className="flex flex-col gap-4">
            <div className="lg:w-full">
            <div  className="rounded-lg">
                <NewsCard {...internationalNews[0]} />
              </div>
            </div>
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4">
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

export default TwoCard;
