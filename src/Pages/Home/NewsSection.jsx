import React from 'react';
import { Link } from 'react-router-dom';
import SmallCard from '../../Components/SmallCard/SmallCard';

const NewsSection = ({ title, news,id }) => {
    const truncateText = (text = "", wordLimit) => {
        const words = text.split(" ");
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(" ") + "...";
        }
        return text;
    };

    return (
        <div className="mb-8 h-[450px] bg-white ">
            <div className="bg-red-600 text-white p-2 rounded mb-4">{title}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div >
                <Link  to={`/newsDetails/${id}`}>
                {news[0] && (
                          <div className="relative mb-4">
                            <img src={news[0].photo} alt="news" className="w-full rounded" />
                            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 rounded-b w-full">
                                {news[0].title}
                            </div>
                        </div>
                    )}
                    {news[0] && (
                        <div className="bg-white p-2 rounded shadow">
                              <p className="text-justify mb-4 bg-white" dangerouslySetInnerHTML={{ __html: truncateText(news[0].description, 35 )}}></p>
                        </div>
                    )}
                </Link>
                </div>
                <div>
                    <div className="space-y-4">
                        {news.slice(1, 6).map((item, index) => (
                            <div key={index} className="bg-white  ">
                                <SmallCard key={item.id} article={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
