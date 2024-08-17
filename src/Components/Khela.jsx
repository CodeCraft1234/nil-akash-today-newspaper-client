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
  <div className="flex flex-col items-center py-4 border border-green-600 rounded-lg">
    {/* Header Section */}
    <div className="bg-green-600 w-full text-center py-2 rounded-t-lg -mt-4">
      <h1 className="text-white font-bold text-xl lg:text-2xl">
        NilAkashToday ই - পেপার
      </h1>
    </div>

    {/* Image Section */}
    <div className="w-full max-w-4xl mt-4 shadow-lg rounded-lg overflow-hidden flex justify-center">
      <a href="https://nilakashtoday.com">
      <img
        src="https://i.ibb.co/8P10nGd/acrop.png"
        alt="Newspaper"
        className="w-full md:w-3/4 lg:w-1/2 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 mx-auto"
      />
      </a>
    </div>
    
  </div>
  <img className="w-full h-200px mt-4" src="https://i.ibb.co/CKCFHGP/bookad.jpg" alt="" />
</div>

    </div>
    </div>
   
  );
};

export default Khela;
