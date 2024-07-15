import React, { useEffect, useState } from 'react';
import UseNews from '../../AxiosFetch/UseNews';
import NewsCard from '../../Components/NewsCard/NewsCard';

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
        <div>
            {latestTwoNews.map(newsItem => (
               <div className='mb-4' key={newsItem._id}>
                    <img className='h-60 w-full' src={newsItem.photo} alt="" />
                    <h1>{newsItem.title}</h1>
                    {truncateText(news[0]?.description, 35)}
               </div>
            ))}
        </div>
    );
};

export default LatestTwoNews;
