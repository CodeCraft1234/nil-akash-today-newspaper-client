import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsCard from "../../Components/NewsCard/NewsCard";
import SmallCard from "../../Components/SmallCard/SmallCard";
import NewsCardTest from "../../Components/NewsCard/NewsCardTest";

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
    slidesToShow: 4, // Show 4 cards per slide
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
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
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 text-white">
        জাতীয়
      </h2>
      {nationalNews.length > 0 && (
        <Slider {...settings}>
          {nationalNews.slice(0, 4).map((article) => (
            <div key={article.id} className="px-2">
              <div className="w-full overflow-hidden rounded-lg">
                <NewsCard {...article} />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 shadow-md text-white">
            আন্তর্জাতিক
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {internationalNews.slice(0, 3).map((article) => (
              <SmallCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 shadow-md text-white">
            রাজনীতি
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {politicsNews.slice(0, 3).map((article) => (
              <SmallCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-700 rounded-md p-2 shadow-md text-white">
            অর্থনীতি
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {economicsNews.slice(0, 3).map((article) => (
              <SmallCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoCard;
