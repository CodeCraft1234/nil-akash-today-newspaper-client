import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import UseNews from "../../AxiosFetch/UseNews";

const Headline = () => {
  const [news] = UseNews();
  const [latestNewsByCategory, setLatestNewsByCategory] = useState([]);

  const categories = ["জাতীয়", "আন্তর্জাতিক", "রাজনীতি", "অর্থনীতি", "সারাদেশ", "বিনোদন", "খেলা", "শিক্ষা", "উপর বাংলা", "স্বাস্থ্য"];

  useEffect(() => {
      if (news && news.length > 0) {
          const latestNews = categories.map(category => {
              const newsInCategory = news.filter(item => item.category === category);
              return newsInCategory.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
          }).filter(item => item); // Filter out undefined values

          setLatestNewsByCategory(latestNews);
      }
  }, [news,categories]);
  console.log(latestNewsByCategory);

    return (
        <div className="flex justify-start mt-32  z-0 items-center px-3">
           <h1 className="bg-blue-700  py-3 text-white rounded-md px-2 tex-4xl font-bold">শিরোনাম</h1>
            <Marquee className="space-x-10 text-black bg-sky-100 py-3">
            {latestNewsByCategory.map((newsItem, index) => (
                <Link key={index} to={`/newsDetails/${newsItem._id}`} >
                <h1 className="mr-5">{newsItem.title} । </h1> 
                </Link>
             
            ))}
            </Marquee>
        </div>
    );
};

export default Headline;