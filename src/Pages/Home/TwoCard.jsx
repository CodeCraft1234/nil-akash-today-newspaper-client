import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCard from "../../Components/NewsCard/NewsCard";
import SmallCard from "../../Components/SmallCard/SmallCard";

const TwoCard = () => {
  const [nationalNews, setNationalNews] = useState([]);
  const [internationalNews, setInternationalNews] = useState([]);
  const [politicsNews, setPoliticsNews] = useState([]);
  const [economicsNews, setEconomicsNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://akash-newspaper-server.vercel.app/news");
        const national = response.data.filter(
          (news) => news.category === "জাতীয়"
        );
        const international = response.data.filter(
          (news) => news.category === "আন্তর্জাতিক"
        );
        const politics = response.data.filter(
          (news) => news.category === "রাজনীতি"
        );
        const economics = response.data.filter(
          (news) => news.category === "অর্থনীতি"
        );
        setNationalNews(national);
        setInternationalNews(international);
        setPoliticsNews(politics);
        setEconomicsNews(economics);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    };

    fetchData();
  }, []);

  if (nationalNews.length === 0 || internationalNews.length === 0) {
    return <p>Loading...</p>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 1, // Scroll one card at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // For large devices
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // For medium devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#eee",
          borderRadius: "10px",
          padding: "10px",
          bottom: "-30px",
        }}
      >
        <ul style={{ margin: "0px", display: "flex", justifyContent: "center" }}> 
          {dots} 
        </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#2c5282",
          margin: "0 5px",
        }}
      ></div>
    )
  };

  return (
    <div className="px-4 py-8">
      {/* জাতীয় Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
          জাতীয়
        </h2>
        {nationalNews.length > 0 && (
          <Slider {...settings}>
            {nationalNews.map((article) => (
              <div key={article.id} className="px-2">
                <div className="w-full overflow-hidden rounded-lg">
                  <NewsCard {...article} />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Other Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* International Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
            আন্তর্জাতিক
          </h2>
          {internationalNews.length > 0 && (
            <div className="space-y-4">
              <div className="w-full overflow-hidden rounded-lg">
                <NewsCard {...internationalNews[0]} />
              </div>
              {internationalNews.slice(1, 4).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>

        {/* Politics Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
            রাজনীতি
          </h2>
          {politicsNews.length > 0 && (
            <div className="space-y-4">
              <div className="w-full overflow-hidden rounded-lg">
                <NewsCard {...politicsNews[0]} />
              </div>
              {politicsNews.slice(1, 4).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>

        {/* Economics Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
            অর্থনীতি
          </h2>
          {economicsNews.length > 0 && (
            <div className="space-y-4">
              <div className="w-full overflow-hidden rounded-lg">
                <NewsCard {...economicsNews[0]} />
              </div>
              {economicsNews.slice(1, 4).map((article) => (
                <SmallCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoCard;
