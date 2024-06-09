import React, { useEffect, useState } from 'react';
import MostViewedNews from "../../Components/MostViewedNews/MostViewedNews";
import LatestNews from "../Home/LatestNews";
import NewsCard from "../../Components/NewsCard/NewsCard";
import UseNews from '../../AxiosFetch/UseNews';

const convertToBengaliNumber = (number) => {
  const bengaliNumbers = {
    '0': '০',
    '1': '১',
    '2': '২',
    '3': '৩',
    '4': '৪',
    '5': '৫',
    '6': '৬',
    '7': '৭',
    '8': '৮',
    '9': '৯',
  };
  return number.replace(/\d/g, (digit) => bengaliNumbers[digit]);
};

const getBengaliDate = (dateString) => {
  const [datePart, timePart] = dateString.split(' ');
  const [day, month, year] = datePart.split('-');
  const [hour, minute, second] = timePart.split(':');

  const bengaliDate = `${convertToBengaliNumber(day)}-${convertToBengaliNumber(month)}-${convertToBengaliNumber(year)}`;
  const bengaliTime = `${convertToBengaliNumber(hour)}:${convertToBengaliNumber(minute)}:${convertToBengaliNumber(second)}`;

  return `${bengaliDate} ${bengaliTime}`;
};

const Economics = () => {
  const [news, refetch] = UseNews();
  const [latestNews, setLatestNews] = useState(null);
  const [otherNews, setOtherNews] = useState([]);

  useEffect(() => {
    const filtered = news.filter((n) => n.category === "অর্থনীতি");
    const sorted = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (sorted.length > 0) {
      setLatestNews(sorted[0]);
      setOtherNews(sorted.slice(1));
    } else {
      setLatestNews(null);
      setOtherNews([]);
    }
  }, [news]);

  const getTimeDifference = (publishDate) => {
    const currentDate = new Date();
    const difference = currentDate - new Date(publishDate);
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (years > 0) {
      return `${convertToBengaliNumber(years)} ${years === 1 ? 'বছর' : 'বছরগুলি'} আগে`;
    } else if (months > 0) {
      return `${convertToBengaliNumber(months)} ${months === 1 ? 'মাস' : 'মাসগুলি'} আগে`;
    } else if (weeks > 0) {
      return `${convertToBengaliNumber(weeks)} ${weeks === 1 ? 'সপ্তাহ' : 'সপ্তাহগুলি'} আগে`;
    } else if (days > 0) {
      return `${convertToBengaliNumber(days)} ${days === 1 ? 'দিন' : 'দিনগুলি'} আগে`;
    } else if (hours > 0) {
      return `${convertToBengaliNumber(hours)} ${hours === 1 ? 'ঘন্টা' : 'ঘন্টাগুলি'} আগে`;
    } else if (minutes > 0) {
      return `${convertToBengaliNumber(minutes)} ${minutes === 1 ? 'মিনিট' : 'মিনিটগুলি'} আগে`;
    } else {
      return 'এইমাত্র';
    }
  };
  
  return (
    <div className="mt-20 px-3  bg-white ">
      <h1 className='text-3xl font-bold ml-5 mr-5 text-blue-500 border-2 border-gray-300 w-full p-4 mb-8 rounded-lg'>
        অর্থনীতি
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg lg:col-span-2">
          {/* big-card */}
          {latestNews && (
            <div key={latestNews._id} className="w-full overflow-hidden my-4 rounded-lg shadow-lg bg-white">
              <img
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                src={latestNews.photo}
                alt="News"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-xl mb-2">
                  {latestNews.title}
                </div>
                <p className="text-black text-sm md:text-base">
                  {latestNews.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getTimeDifference(latestNews.date)}
                </span>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherNews.map(newsItem => (
              <div key={newsItem._id} className="bg-white rounded-lg shadow-lg">
                <NewsCard {...newsItem} />
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {getTimeDifference(newsItem.date)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg">
          <LatestNews />
          <MostViewedNews />
        </div>
      </div>
    </div>
  );
};

export default Economics;
