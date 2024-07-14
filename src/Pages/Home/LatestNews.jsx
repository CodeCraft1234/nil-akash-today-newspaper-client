import { useEffect, useRef, useState } from "react";
import axios from "axios";

const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://akash-newspaper-server.vercel.app/news");
        setNewsData(response.data);
        setFilteredNews(response.data); // Initially set to all news
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ top: 100, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleCategoryChange = (category) => {
    const filtered = newsData.filter((news) => news.category === category);
    setFilteredNews(filtered);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">সর্বশেষ খবর</h2>
      <div className="flex justify-around mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setFilteredNews(newsData)}
        >
          All
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleCategoryChange("সারাদেশ")}
        >
          সারাদেশ
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleCategoryChange("শিক্ষা")}
        >
          শিক্ষা
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleCategoryChange("উপার বাংলা")}
        >
          উপার বাংলা
        </button>
      </div>
      <div className="overflow-y-auto max-h-96" ref={scrollContainerRef}>
        {filteredNews.map((news, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded shadow-md p-4 mb-4 flex items-center border border-gray-400"
          >
            <img
              src={news.photo}
              alt={news.title}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold mb-1">{news.title}</h3>
              <div className="text-gray-500 text-sm mb-1">{news.time}</div>
              <div className="text-gray-600">{news.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
