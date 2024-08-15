import React, { useEffect, useState } from 'react';
import UseNews from '../../AxiosFetch/UseNews';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { Link } from 'react-router-dom';

const EveryCategory = () => {
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
    }, [news]);
    console.log(latestNewsByCategory);
    const truncateTitle = (title = "", wordLimit) => {
        const words = title.split(" ");
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(" ") + "...";
        }
        return title;
      };
    return (
        <div className='grid gap-5 m-3 lg:grid-cols-4'>
            {latestNewsByCategory.map((newsItem, index) => (
                <div key={newsItem._id} className="max-w-sm h-[270px] hover:text-blue-800 rounded-lg overflow-hidden shadow-lg border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-start">
                <Link to={`/newsDetails/${newsItem._id}`} className="block h-full">
                  <div className="flex flex-col h-full">
                    <img
                      className="w-full h-[140px] object-cover"
                      src={newsItem.photo}
                      alt="News"
                    />
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
