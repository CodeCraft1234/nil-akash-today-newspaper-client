import { useEffect, useState } from "react";
import axios from "axios";
import MainCard from "../../Components/MainCard/MainCard";
import SmallCard from "../../Components/SmallCard/SmallCard";

const TwoCard = () => {
  const [nationalNews, setNationalNews] = useState([]);
  const [internationalNews, setInternationalNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/news");
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: National News */}
        <div>
          <h2 className="text-2xl font-bold mb-4">জাতীয়</h2>
          <div className="flex flex-col gap-4">
            <div className="lg:w-full">
              <MainCard article={nationalNews[0]} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {nationalNews.slice(1, 5).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: International News */}
        <div>
          <h2 className="text-2xl font-bold mb-4">আন্তর্জাতিক</h2>
          <div className="flex flex-col gap-4">
            <div className="lg:w-full">
              <MainCard article={internationalNews[0]} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {internationalNews.slice(1, 5).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {nationalNews.slice(5, 9).map((article) => (
          <SmallCard key={article.id} article={article} />
        ))}
        {internationalNews.slice(5, 9).map((article) => (
          <SmallCard key={article.id} article={article} />
        ))}
      </div> */}
    </div>
  );
};

export default TwoCard;
