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
        <div className='text-black mx-3 '>
            {latestTwoNews.map(newsItem => (
                <Link key={newsItem._id} to={`/newsDetails/${newsItem._id}`} className="block border-b border-gray-500 mb-5 h-full">
 <div className='mb-4' >
                    <img className='h-60 w-full' src={newsItem.photo} alt="" />
                    <h1>{newsItem.title}</h1>
                      <p className="text-justify mb-4 bg-white" dangerouslySetInnerHTML={{ __html: truncateText(news[0]?.description, 75) }}></p>
               </div>
                </Link>
              
            ))}
        </div>
    );
};

export default LatestTwoNews;
