import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SmallCard from './SmallCard/SmallCard';

const Khela = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5001/news');
        const khelaNews = response.data.filter(article => article.category === 'খেলা');
        setNews(khelaNews);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  const leftNews = news.slice(0, 4);
  const middleNews = news[4];
  const rightNews = news.slice(4, 9);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Left Side News */}
   
      <div className="">
        <div className="bg-red-600 text-white p-2 rounded">খেলা</div>
        {leftNews.length > 0 ? (
          leftNews.map((article, index) => (
            // <Link key={article._id} to={`/newsDetails/${article._id}`} className="block shadow-lg h-full">
              <div key={index} className="mb-4 mt-2">
              <SmallCard key={article.id} article={article} />
              </div>
            // </Link>
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>
      

      {/* Middle News */}
      <div className="col-span-1 md:col-span-1 w-full overflow-hidden rounded-lg bg-gray-100">
        {middleNews && (
          <div className='relative w-full h-[450px]'>
            <img src={middleNews.photo} alt={middleNews.title} className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105 mb-2" />
            <h3 className="text-xl font-semibold">{middleNews.title}</h3>
            <p>{middleNews.description.slice(0,210)}</p>
          </div>
        )}
      </div>

      {/* Right Side News */}
      <div className="col-span-1">
        <div className="grid gap-4">
          {rightNews.length > 0 ? (
          rightNews.map((article, index) => (
            <Link key={article._id} to={`/newsDetails/${article._id}`} className="block shadow-lg h-full">
            <div key={index} className="mb-4">
            <SmallCard key={article.id} article={article} />
            </div>
            </Link>
           ))
        ) : (
          <p>No articles found</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Khela;
