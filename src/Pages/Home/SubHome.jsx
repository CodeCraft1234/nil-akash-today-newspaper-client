import { Link } from "react-router-dom";
import MostViewedNews from "../../Components/MostViewedNews/MostViewedNews";
import NewsCardFinal from "../../Components/NewsCard/NewsCardFinal";
import NewsSide from "../../Components/NewsCard/NewsSide/NewsSide";
import Banner from "./Banner";
import Carousel from "./Carousel";
import LatestNews from "./LatestNews";
import TwoCard from "./TwoCard";
import UseNews from "../../AxiosFetch/UseNews";
import { useEffect, useState } from "react";
import EveryCategory from "./EveryCategory";
import LatestTwoNews from "./LatestTwoNews";


const SubHome = () => {
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
    const sorted2 = news.sort((a, b) => new Date(b.date) - new Date(a.date));

    setNewer(sorted2);
  }, [news]);


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
        <div className="mt-5 px-1">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-2">
              <div className=" rounded-lg  lg:col-span-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-2">
                 <div className=" rounded-lg  lg:col-span-3">
                    <Carousel></Carousel>
                    <EveryCategory></EveryCategory>
                    <div className="">   
                    </div>
                  </div>

                 <div className=" rounded-lg space-y-5 lg:col-span-2">
                <LatestTwoNews></LatestTwoNews>
                </div>
             </div>
                </div>
             


                <div className="rounded-lg w-full">
          <div className="rounded-lg text-black bg-white">
        
         
            <img className="w-full h-200px" src="  https://i.ibb.co/Kqp8y1F/33d582ad-0750-464f-b4dd-47d5b7558717.jpg" alt="" />
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
            <img className="w-full py-2 h-200px" src="https://i.ibb.co/LRyY1ht/b9880a9b-001f-4308-95d1-56609da8577e.jpg" alt="" />
            <img className="w-full py-2 h-200px" src="https://i.ibb.co/xgYzBcx/96f7937e-e3af-42d6-893f-2c0ed2872f97.jpg" alt="" />
            <img className="w-full py-2 h-200px" src="https://i.ibb.co/Kqp8y1F/33d582ad-0750-464f-b4dd-47d5b7558717.jpg" alt="" />
            <img className="w-full py-2 h-200px" src="https://i.ibb.co/dMgfhVk/8bb4a054-a1a6-4283-af32-ad0ff75f149f.jpg" alt="" />
            <img className="w-full py-2 h-200px" src=" https://i.ibb.co/C7CLFXs/5c96d337-1bf3-454d-9a3d-7d5ca9028fac.jpg" alt="" />




          </div>
        </div>
            </div>        
        </div>
    );
};

export default SubHome;