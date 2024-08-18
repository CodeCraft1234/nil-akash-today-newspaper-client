import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard/SmallCard';
import UseNews from '../AxiosFetch/UseNews';
import NewsCard from './NewsCard/NewsCard';

const Khela = () => {
  const [khelaNews, setKhelaNews] = useState([]);
  const [deshNews, setDeshNews] = useState([]);
  const [news] = UseNews();

  useEffect(() => {
    const filteredKhelaNews = news
      .filter(article => article.category === 'খেলা')
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sorting by date

    setKhelaNews(filteredKhelaNews);
  }, [news]);

  useEffect(() => {
    const filteredDeshNews = news
      .filter(article => article.category === 'সারাদেশ')
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sorting by date

    setDeshNews(filteredDeshNews);
  }, [news]);

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className='px-4 py-8'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Khela Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
            খেলা
          </h2>
          {khelaNews.length > 0 && (
            <div className="space-y-4">
              <div className="w-full overflow-hidden rounded-lg">
                <NewsCard {...khelaNews[0]} />
              </div>
              {khelaNews.slice(1, 4).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>

        {/* Desh Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
            সারাদেশ
          </h2>
          {deshNews.length > 0 && (
            <div className="space-y-4">
              <div className="w-full overflow-hidden rounded-lg">
                <NewsCard {...deshNews[0]} />
              </div>
              {deshNews.slice(1, 4).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Khela;
