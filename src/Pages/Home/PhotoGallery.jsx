import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PhotoGallery = () => {
  const [sliderNews, setSliderNews] = useState([]);
  const [sidebarNews, setSidebarNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://akash-newspaper-server.vercel.app/news');
        const newsData = response.data;

        // Filter the first 7 categories for the main slider
        const sliderCategories = ['জাতীয়', 'আন্তর্জাতিক', 'রাজনীতি', 'অর্থনীতি', 'সারাদেশ', 'বিনোদন', 'খেলা'];
        const sliderFilteredNews = newsData.filter((item) => sliderCategories.includes(item.category)).slice(0, 7);
        setSliderNews(sliderFilteredNews);

        // Filter the first 3 categories for the sidebar
        const sidebarCategories = ['জাতীয়', 'আন্তর্জাতিক', 'রাজনীতি'];
        const sidebarFilteredNews = newsData.filter((item) => sidebarCategories.includes(item.category)).slice(0, 5);
        setSidebarNews(sidebarFilteredNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < sliderNews.length - 1 ? prevIndex + 1 : 0));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [sliderNews.length]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : sliderNews.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < sliderNews.length - 1 ? prevIndex + 1 : 0));
  };

  if (!sliderNews.length || !sidebarNews.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 relative">
        <div className="relative">
          <img
            src={sliderNews[currentIndex].photo}
            alt={sliderNews[currentIndex].title}
            className="w-full h-96 object-cover rounded"
          />
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
            onClick={handlePrevClick}
          >
            &lt;
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2"
            onClick={handleNextClick}
          >
            &gt;
          </button>
        </div>
        <p className="mt-2 text-center text-white bg-black py-2">{sliderNews[currentIndex].title}</p>
        <div className="flex justify-center mt-4 overflow-x-auto">
          {sliderNews.map((item, index) => (
            <Link key={index} to={`/newsDetails/${item._id}`}>
              <div
                className={`cursor-pointer p-1 ${index === currentIndex ? 'bg-gray-200' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:w-1/4 mt-4 lg:mt-0 lg:ml-4 space-y-4">
        {sidebarNews.map((item, index) => (
          <Link key={index} to={`/newsDetails/${item._id}`}>
             <li className="flex p-4 hover:bg-gray-100 cursor-pointer">
                  <img
                    src={item.photo}
                    alt={`News ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <span className='hover:text-blue-800 hover:font-extralight'>{item.title}</span>
                </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
