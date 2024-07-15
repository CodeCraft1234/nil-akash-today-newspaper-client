import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SmallCard from './SmallCard/SmallCard';
import UseNews from '../AxiosFetch/UseNews';

const Khela = () => {
  const [newss, setNews] = useState([]);
  const [news] = UseNews();

  useEffect(() => {
    const khelaNews = news
      .filter(article => article.category === 'খেলা')
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sorting by date

    setNews(khelaNews);
  }, [news]);

  const leftNews = newss.slice(0, 5); // Latest 5 articles
  const rightNews = newss.slice(5); // Articles after the first 5

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  return (
    <div>
       <div className="bg-red-600 mx-3 text-white p-2 rounded">খেলা</div>
       <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Left Side News */}
      <div className="">
       
        {leftNews.length > 0 ? (
          leftNews.map((article, index) => (
            <div key={index} className="mb-4 mt-2">
              <SmallCard key={article.id} article={article} />
            </div>
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>

      {/* Middle News */}
      <div className="col-span-1 md:col-span-1 w-full overflow-hidden rounded-lg text-black">
        {leftNews[0] && (
<Link  to={`/newsDetails/${leftNews[0]._id}`} className="block h-full">
<div  className="news-article mb-4">
  <div className="w-full pl-2">
    <img className='rounded' src={leftNews[0].photo} alt="" />
    <h1 className="text-2xl font-bold mb-1">{leftNews[0].title}</h1>
    <p className="text-justify mb-4 bg-white" dangerouslySetInnerHTML={{ __html: truncateDescription(leftNews[0]?.description, 50) }}></p>
  </div>
</div>
</Link>
        )}
      </div>

      {/* Right Side News */}
      <div className="col-span-1">
        <div className="grid gap-4">
          {rightNews.length > 0 ? (
            rightNews.map((article, index) => (
              <Link key={article._id} to={`/newsDetails/${article._id}`} className="block  h-full">
                <div key={index} className="">
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
    </div>
   
  );
};

export default Khela;
