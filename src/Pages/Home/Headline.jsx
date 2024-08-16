import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import UseNews from "../../AxiosFetch/UseNews";

const Headline = () => {
  const [news] = UseNews();
  const [latestNewsByCategory, setLatestNewsByCategory] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const categories = ["জাতীয়", "আন্তর্জাতিক", "রাজনীতি", "অর্থনীতি", "সারাদেশ", "বিনোদন", "খেলা", "শিক্ষা", "উপর বাংলা", "স্বাস্থ্য"];

  useEffect(() => {
    if (news && news.length > 0) {
      const latestNews = categories.map(category => {
        const newsInCategory = news.filter(item => item.category === category);
        return newsInCategory.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
      }).filter(item => item); // Filter out undefined values

      setLatestNewsByCategory(latestNews);
    }
  }, [news, categories]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex justify-between items-center mt-32 z-0 px-3 py-3  rounded-md">
      <div className="flex items-center">
        <h1 className="bg-blue-700 text-white py-2 px-4 rounded-l-md text-sm font-bold">শিরোনাম</h1>
        <Marquee className="space-x-10 text-black py-2">
          {latestNewsByCategory.map((newsItem, index) => (
            <Link key={index} to={`/newsDetails/${newsItem._id}`}>
              <h1 className="mr-5">{newsItem.title} । </h1>
            </Link>
          ))}
        </Marquee>
      </div>
      <button
        className=" p-2 rounded-full transition-colors duration-300"
        onClick={() => setIsVisible(false)}
      >
        ✕
      </button>
    </div>
  );
};

export default Headline;
