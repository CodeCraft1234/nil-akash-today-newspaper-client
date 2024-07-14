import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseNews from "../AxiosFetch/UseNews"; // Assuming this is a custom hook to fetch news data
import NewsCard from "../Components/NewsCard/NewsCard"; // Assuming this is a component to display 
import { Helmet } from "react-helmet-async";

const Category = () => {
    const { categorys } = useParams();
    const [news] = UseNews();
    const [latestNews, setLatestNews] = useState(null);
    const [otherNews, setOtherNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(12);
    const [activeSection, setActiveSection] = useState('latest');
    const [visibleCount, setVisibleCount] = useState(10);
    const [newer,setNewer] = useState([]);
  
    useEffect(() => {
      if (news.length === 0) return;
  
      const filtered = news.filter((n) => n.category === categorys);
      const sorted = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      const sorted2 = news.sort((a, b) => new Date(b.date) - new Date(a.date));
  
      setNewer(sorted2);
      if (sorted.length > 0) {
        setLatestNews(sorted[1]);
        setOtherNews(sorted.slice(1));
      } else {
        setLatestNews(null);
        setOtherNews([]);
      }
    }, [news, categorys]);
  
  
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = otherNews.slice(indexOfFirstNews, indexOfLastNews);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const handleToggle = (section) => {
      setActiveSection(section);
      setVisibleCount(10); // Reset the visible count when switching sections
    };
  
    const handleScroll = (e) => {
      const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) {
        setVisibleCount(prevCount => prevCount + 10); // Load 10 more items when scrolled to bottom
      }
    };
  
    const itemsToShow = activeSection === 'latest' ? newer : news;
  

  return (
    <div className="mt-24 pt-10 px-3 bg-white lg:px-10">
      <Helmet>
        <title>NilAkashToday | {categorys}</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <h1 className="text-3xl font-bold text-blue-500 border-2 border-gray-300 w-full p-2 mb-2 rounded-lg">
        {categorys}
      </h1>
      <div className="grid grid-cols-1 bg-white gap-3 lg:grid-cols-3 lg:gap-3">
        <div className="rounded-lg lg:col-span-2">
          {/* Big Card for Latest News */}
          {latestNews && (
            <div key={latestNews._id} className="w-full overflow-hidden border border-gray-400 my-4 rounded-lg bg-gray-100">
              <div className="relative w-full h-[500px]">
                <img
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  src={latestNews.photo}
                  alt="News"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white px-2 py-4">
                  <div className="font-bold text-sm md:text-xl">{latestNews.title}</div>
                </div>
              </div>
            </div>
          )}
          {/* Grid for Other News */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currentNews.map((newsItem) => (
              <div key={newsItem._id} className="rounded-lg">
                <NewsCard {...newsItem} />
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <nav aria-label="Pagination">
              <ul className="flex items-center gap-2 text-sm font-medium">
                {/* Previous Page */}
                <li>
                  <button
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition-colors duration-200 ${
                      currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <span className="sr-only">Previous Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                
                {/* Pagination Items */}
                {Array.from({ length: Math.ceil(otherNews.length / newsPerPage) }, (_, i) => i + 1).map((number) => (
                  <li key={number}>
                    <button
                      className={`w-10 h-10 my-5 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-blue-500 hover:text-white transition-colors duration-200 ${
                        currentPage === number ? "bg-violet-600 text-white" : ""
                      }`}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </button>
                  </li>
                ))}
                
                {/* Next Page */}
                <li>
                  <button
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition-colors duration-200 ${
                      currentPage === Math.ceil(otherNews.length / newsPerPage)
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    onClick={() => currentPage < Math.ceil(otherNews.length / newsPerPage) && paginate(currentPage + 1)}
                    disabled={currentPage === Math.ceil(otherNews.length / newsPerPage)}
                  >
                    <span className="sr-only">Next Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="rounded-lg w-full">
          <div className="rounded-lg text-black bg-white">
            <img className="w-full h-200px" src="https://i.ibb.co/99Bfx2B/Walton1465127503.webp" alt="" />
            <div className="p-4 mt-3">
              <div className="flex mb-4">
                <button
                  className={`mr-2 p-2 transition duration-500 ease-in-out transform ${
                    activeSection === 'latest' ? 'bg-blue-500 text-white scale-105' : 'bg-gray-300'
                  }`}
                  onClick={() => handleToggle('latest')}
                >
                  সর্বশেষ
                </button>
                <button
                  className={`p-2 transition duration-500 ease-in-out transform ${
                    activeSection === 'popular' ? 'bg-blue-500 text-white scale-105' : 'bg-gray-300'
                  }`}
                  onClick={() => handleToggle('popular')}
                >
                  জনপ্রিয়
                </button>
              </div>
              <div className="h-64 overflow-y-scroll" onScroll={handleScroll}>
                <ul className="space-y-2">
                  {itemsToShow.slice(0, visibleCount).map(item => (
                      <Link key={item.id} to={`/newsDetails/${item._id}`}>
                      <li key={item.id} className="flex hover:bg-gray-100 items-center justify-start gap-2 space-x-2">
                      <img className="h-14 w-16" src={item.photo} alt="" />
                      <a className="hover:text-blue-800 hover:font-extralight">{item.title}</a>
                    </li>
                      </Link>
                   
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
