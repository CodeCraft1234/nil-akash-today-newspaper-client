import React, { useEffect, useState } from 'react';
import UseNews from '../../AxiosFetch/UseNews';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { Link } from 'react-router-dom';

const LatestTwoNews = () => {
    const [news] = UseNews();
    const [latestTwoNews, setLatestTwoNews] = useState([]);

    useEffect(() => {
        if (news && news.length > 0) {
            const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
            setLatestTwoNews(sortedNews.slice(0, 2));
        }
    }, [news]);

    const truncateText = (text = "", wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <div className="text-black mx-3">
            {latestTwoNews.map(newsItem => (
                <Link key={newsItem._id} to={`/newsDetails/${newsItem._id}`} className="block mb-5 h-full">
                    <div className="relative gap-6 mb-4">
                        <img className="h-48 w-full object-cover md:h-64 lg:h-72 rounded" src={newsItem.photo} alt="" />
                        <div className="absolute bottom-0 w-full bg-gray-700 bg-opacity-60 text-white px-2 py-4">
                            <div className="font-bold text-sm md:text-lg lg:text-xl">
                                {truncateText(newsItem.title, 7)}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default LatestTwoNews;
