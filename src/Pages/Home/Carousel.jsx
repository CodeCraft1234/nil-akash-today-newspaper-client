import React, { useEffect, useState } from 'react';
import UseNews from '../../AxiosFetch/UseNews';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

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

  // Custom arrow components
  const SampleNextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-70 z-10 group-hover:block hidden"
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    );
  };

  const SamplePrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-70 z-10 group-hover:block hidden"
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5l-7 7 7 7"></path>
        </svg>
      </div>
    );
  };

  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide change every 3 seconds
    arrows: true, // Show arrows for navigation
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative pb-8 group">
      <Slider {...settings}>
        {latestNewsByCategory.map((newsItem, index) => (
          <div key={index} className="px-2">
            <div key={newsItem._id} className="w-full overflow-hidden mb-2 rounded-lg">
            <Link to={`/newsDetails/${newsItem._id}`} className="block h-full">
              <div className="relative w-full h-[500px]">
                <img
                  className="w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-105"
                  src={newsItem.photo}
                  alt="News"
                />
                <div className="absolute bottom-0 w-full bg-gray-700 bg-opacity-40 text-white px-2 py-4">
                  <div className="font-bold text-sm md:text-xl">{newsItem.title}</div>
                </div>
              </div>
              </Link>
            </div> 
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
