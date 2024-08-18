import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard/NewsCard";
import { Link } from "react-router-dom";
import SmallCard from "./SmallCard/SmallCard";

const Binnodon = () => {
  const [binodonNews, setBinodonNews] = useState([]);
  const [oparbanglaNews, setOparbanglaNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://akash-newspaper-server.vercel.app/news");

        const sortByDate = (newsArray) => {
          return newsArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        };

        const binodon = sortByDate(
          response.data.filter((news) => news.category === "বিনোদন")
        );
        const oparbangla = sortByDate(
          response.data.filter((news) => news.category === "উপার বাংলা")
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
        {/* International Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
            বিনোদন
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

        {/* Politics Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
            উপার বাংলা
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

export default Binnodon;
