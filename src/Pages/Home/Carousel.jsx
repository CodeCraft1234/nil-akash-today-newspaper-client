import React, { useEffect, useState } from 'react';
import UseNews from '../../AxiosFetch/UseNews';
import NewsCard from '../../Components/NewsCard/NewsCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const [news] = UseNews();
  const [latestNewsByCategory, setLatestNewsByCategory] = useState([]);

  const categories = [
    "জাতীয়", "আন্তর্জাতিক", "রাজনীতি", "অর্থনীতি",
    "সারাদেশ", "বিনোদন", "খেলা", "শিক্ষা",
    "উপর বাংলা", "স্বাস্থ্য"
  ];

  useEffect(() => {
    if (news && news.length > 0) {
      const latestNews = categories.map(category => {
        const newsInCategory = news.filter(item => item.category === category);
        return newsInCategory.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
      }).filter(item => item); // Filter out undefined values

      setLatestNewsByCategory(latestNews);
    }
  }, [news]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="  pb-8">
      <Slider {...settings}>
        {latestNewsByCategory.map((newsItem, index) => (
          <div key={index} className="px-2">
                           <div key={newsItem._id} className="w-full overflow-hidden border border-gray-400 mb-4 rounded-lg bg-gray-100">
                  <div className="relative w-full h-[250px]">
                    <img
                      className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
                      src={newsItem.photo}
                      alt="News"
                    />
                    <div className="absolute  bottom-0 w-full bg-gray-700 bg-opacity-40 text-white px-2 py-4">
                      <div className="font-bold text-sm md:text-xl">{newsItem.title}</div>
                    </div>
                  </div>
                </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
