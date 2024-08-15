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
                <Link key={newsItem._id} to={`/newsDetails/${newsItem._id}`} className="block mb-5 h-full">
 <div className='mb-4 relative gap-6' >
                    <img className='h-84 w-full' src={newsItem.photo} alt="" />
                    <div className="absolute  bottom-0 w-full bg-gray-700 bg-opacity-40 text-white px-2 py-4">
                      <div className="font-bold text-sm md:text-xl">{newsItem.title}</div>
                    </div>
                 
                      {/* <p className="text-justify mb-4 bg-white" dangerouslySetInnerHTML={{ __html: truncateText(news[0]?.description, 35) }}></p> */}
               </div>
                </Link>
              
            ))}
        </div>
    );
};

export default LatestTwoNews;
