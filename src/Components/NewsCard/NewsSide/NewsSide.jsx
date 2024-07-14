import React, { useEffect, useState } from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const NewsSide = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://akash-newspaper-server.vercel.app/news');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Filter news by category 'বিনোদন'
        const binodonNews = data.filter(item => item.category === 'বিনোদন');
        setNews(binodonNews);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchNews();
  }, []);

  if (!news) {
    return <div>Loading...</div>;
  }

  // Assuming 'news' is an array and you want to display the first item
  const firstNews = news[0];

  return (
    <div className="relative flex text-black items-center border border-gray-300 p-2 rounded hover:shadow-lg transition-shadow duration-300">
      {/* <div className="relative w-1/3">
        <FaHandPointRight className="w-8 h-8 object-cover rounded"></FaHandPointRight>
        <div className="absolute bottom-1 left-0 right-0 w-full flex items-center justify-center bg-gray-300 rounded-lg opacity-0 hover:opacity-90 transition-opacity duration-300">
          <p className="font-bold">{firstNews.date}</p>
        </div>
      </div> */}
      <div className="w-full pl-2">
        <img className='rounded' src={firstNews?.photo} alt="" />
        <h1 className="text-2xl font-bold mb-1">{firstNews.title}</h1>
        <p>{firstNews.description}</p>
      </div>
    </div>
  );
};

export default NewsSide;
