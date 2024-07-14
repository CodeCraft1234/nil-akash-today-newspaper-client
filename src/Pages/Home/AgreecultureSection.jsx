import React, { useEffect, useState } from 'react';
import NewsCard from '../../Components/NewsCard/NewsCard';
import NewsSide from '../../Components/NewsCard/NewsSide/NewsSide';

const AgreecultureSection = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://akash-newspaper-server.vercel.app/news');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Filter news by category 'খেলা'
        const khelaNews = data.filter(item => item.category === 'খেলা');
        setNews(khelaNews);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNews();
  }, []);

  if (!news) {
    return <div>Loading...</div>;
  }

  // Check if there are at least three items in the filtered news
  if (news.length < 3) {
    return <div>Not enough news items in the 'খেলা' category</div>;
  }

  // Get the third news item
  const thirdNews = news[3];

  return (
    <div className='mx-5'>
      <h1 className='text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 shadow-md text-white'>খেলা</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 mx-4 lg:gap-5">
        <div className="lg:col-span-2">
          <div className="w-full rounded-lg overflow-hidden my-4">
            <img className="w-full h-auto object-cover  transform transition-transform duration-500 hover:scale-105" src={thirdNews.photo} alt="News" />
            <div className="px-6 py-4">
              <div className="font-bold text-sm md:text-xl mb-2">{thirdNews.title}</div>
              <p className="text-black text-sm md:text-base">{thirdNews.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {thirdNews.time}
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-lg">
          <NewsSide />
        </div>
      </div>
    </div>
  );
};

export default AgreecultureSection;
