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
    <div className="mt-2 px-2 lg:px-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8">
        {/* Main content area */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
            {/* Left side */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="mb-2">
                <div className="rounded-lg  p-2 lg:p-4">
                  <LatestTwoNews />
                </div>
              </div>
            </div>

            {/* Middle section */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="mb-2">
                <div className="rounded-lg  p-2 lg:p-4">
                  <Carousel />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="rounded-lg  p-2 lg:p-4">
              <EveryCategory />
            </div>
          </div>
        </div>

        {/* Right side (সর্বশেষ and জনপ্রিয় data) */}
        <div className="h-full rounded-lg  lg:col-span-3">
          <div className="rounded-lg w-full">
            <div className="rounded-lg text-black bg-white p-2 lg:p-4">
              <img
                className="w-full h-32 md:h-48 object-cover"
                src="https://i.ibb.co/99Bfx2B/Walton1465127503.webp"
                alt=""
              />
              <div className="mt-3">
                <div className="flex mb-4">
                  <button
                    className={`mr-2 p-2 text-xs md:text-sm transition duration-500 ease-in-out transform ${
                      activeSection === "latest"
                        ? "bg-blue-500 text-white scale-105"
                        : "bg-gray-300"
                    }`}
                    onClick={() => handleToggle("latest")}
                  >
                    সর্বশেষ
                  </button>
                  <button
                    className={`p-2 text-xs md:text-sm transition duration-500 ease-in-out transform ${
                      activeSection === "popular"
                        ? "bg-blue-500 text-white scale-105"
                        : "bg-gray-300"
                    }`}
                    onClick={() => handleToggle("popular")}
                  >
                    জনপ্রিয়
                  </button>
                </div>
                <div
                  className="h-48 md:h-64 overflow-y-scroll"
                  onScroll={handleScroll}
                >
                  <ul className="space-y-2">
                    {itemsToShow.slice(0, visibleCount).map((item) => (
                      <Link key={item.id} to={`/newsDetails/${item._id}`}>
                        <li className="flex hover:bg-gray-100 items-center justify-start gap-2 space-x-2">
                          <img
                            className="h-10 w-12 md:h-14 md:w-16 object-cover"
                            src={item.photo}
                            alt=""
                          />
                          <span className="hover:text-blue-800 hover:font-extralight text-xs md:text-sm">
                            {item.title}
                          </span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
              <img
                className="w-full h-32 md:h-48 object-cover mt-4"
                src="https://i.ibb.co/99Bfx2B/Walton1465127503.webp"
                alt=""
              />
              <img className="w-full h-200px mt-4" src="https://i.ibb.co/YW2Gqsx/images-2.jpg" alt="" />
              <img
                className="w-full h-32 md:h-48 object-cover mt-4"
                src="https://i.ibb.co/M82yNzT/Daraz-11-11-Featured.webp"
                alt=""
              />
              <img
                className="w-full h-32 md:h-48 object-cover mt-4"
                src="https://i.ibb.co/bmHXv48/Bkash-1-2209281207.jpg"
                alt=""
              />
               <img className="w-full h-200px mt-4" src="https://i.ibb.co/9cFD4ng/8aed5-x2015-04-11-27-3-b.jpg" alt="" />
               <img className="w-full h-200px mt-4" src="https://i.ibb.co/4YNYD2v/3da8b9197750446af5e6ef6767336d30.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHome;
