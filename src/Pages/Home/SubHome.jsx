import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import UseNews from "../../AxiosFetch/UseNews";
import Carousel from "./Carousel";
import EveryCategory from "./EveryCategory";
import LatestTwoNews from "./LatestTwoNews";

const SubHome = () => {
  const [news] = UseNews();
  const [activeSection, setActiveSection] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(10);
  const [newer, setNewer] = useState([]);

  useEffect(() => {
    if (news.length === 0) return;
    const sorted2 = news.sort((a, b) => new Date(b.date) - new Date(a.date));
    setNewer(sorted2);
  }, [news]);

  const handleToggle = (section) => {
    setActiveSection(section);
    setVisibleCount(10); // Reset the visible count when switching sections
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setVisibleCount((prevCount) => prevCount + 10); // Load 10 more items when scrolled to bottom
    }
  };

  const itemsToShow = activeSection === "latest" ? newer : news;

  return (
    <div className="mt-5 px-1">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
        {/* Left side (blank) */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <div className="rounded-lg bg-gray-200">
              <LatestTwoNews></LatestTwoNews>
            </div>
          </div>
        </div>

        {/* Middle section */}
        <div className="lg:col-span-6">
          <div className="mb-8">
            <div className="rounded-lg bg-gray-200">
              <Carousel />
            </div>
          </div>
          <div className="mt-8">
            <div className="rounded-lg bg-gray-200">
              <EveryCategory />
            </div>
          </div>
        </div>

        {/* Right side (সর্বশেষ and জনপ্রিয় data) */}
        <div class="h-32 rounded-lg bg-gray-200 lg:col-span-3">
          <div className="rounded-lg w-full">
            <div className="rounded-lg text-black bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://i.ibb.co/99Bfx2B/Walton1465127503.webp"
                alt=""
              />
              <div className="p-4 mt-3">
                <div className="flex mb-4">
                  <button
                    className={`mr-2 p-2 transition duration-500 ease-in-out transform ${
                      activeSection === "latest"
                        ? "bg-blue-500 text-white scale-105"
                        : "bg-gray-300"
                    }`}
                    onClick={() => handleToggle("latest")}
                  >
                    সর্বশেষ
                  </button>
                  <button
                    className={`p-2 transition duration-500 ease-in-out transform ${
                      activeSection === "popular"
                        ? "bg-blue-500 text-white scale-105"
                        : "bg-gray-300"
                    }`}
                    onClick={() => handleToggle("popular")}
                  >
                    জনপ্রিয়
                  </button>
                </div>
                <div className="h-64 overflow-y-scroll" onScroll={handleScroll}>
                  <ul className="space-y-2">
                    {itemsToShow.slice(0, visibleCount).map((item) => (
                      <Link key={item.id} to={`/newsDetails/${item._id}`}>
                        <li className="flex hover:bg-gray-100 items-center justify-start gap-2 space-x-2">
                          <img
                            className="h-14 w-16 object-cover"
                            src={item.photo}
                            alt=""
                          />
                          <span className="hover:text-blue-800 hover:font-extralight">
                            {item.title}
                          </span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
              <img
                className="w-full py-4 h-48 object-cover"
                src="https://i.ibb.co/99Bfx2B/Walton1465127503.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHome;
