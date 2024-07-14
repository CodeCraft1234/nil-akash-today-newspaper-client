import NewsCard from "../../Components/NewsCard/NewsCard";

import MostViewedNews from "../../Components/MostViewedNews/MostViewedNews";
import LatestNews from "../Home/LatestNews";
import { useEffect, useState } from "react";
import UseNews from "../../AxiosFetch/UseNews";
import { Helmet } from "react-helmet-async";

const convertToBengaliNumber = (number) => {
  const bengaliNumbers = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  // Ensure number is converted to string
  const numberString = String(number);

  return numberString.replace(/\d/g, (digit) => bengaliNumbers[digit]);
};

const getBengaliDate = (dateString) => {
  const [datePart, timePart] = dateString.split(" ");
  const [day, month, year] = datePart.split("-");
  const [hour, minute, second] = timePart.split(":");

  const bengaliDate = `${convertToBengaliNumber(day)}-${convertToBengaliNumber(
    month
  )}-${convertToBengaliNumber(year)}`;
  const bengaliTime = `${convertToBengaliNumber(hour)}:${convertToBengaliNumber(
    minute
  )}:${convertToBengaliNumber(second)}`;

  return `${bengaliDate} ${bengaliTime}`;
};

const Entertainment = () => {
  const [news, refetch] = UseNews();
  const [latestNews, setLatestNews] = useState(null);
  const [otherNews, setOtherNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(6);

  useEffect(() => {
    const filtered = news.filter((n) => n.category === "বিনোদন");
    const sorted = filtered.sort(
      (a, b) => new Date(b.date2) - new Date(a.date2)
    );

    if (sorted.length > 0) {
      setLatestNews(sorted[0]); // Set the latest news as the first item after sorting
      setOtherNews(sorted.slice(1)); // Set the rest of the news after excluding the latest one
    } else {
      setLatestNews(null);
      setOtherNews([]);
    }
  }, [news]);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = otherNews.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getTimeDifference = (publishDate) => {
    // Time difference logic here
  };

  return (
    <div className="mt-36 mx-3 lg:mx-10">
      <Helmet>
        <title>NilAkashToday | Entertainment</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <h1 className="text-3xl font-bold ml-5 mr-5 text-blue-500 border-2 border-gray-300 w-full p-4 mb-8 rounded-lg">
        বিনোদন
      </h1>
      <div className="grid grid-cols-1 bg-white gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg lg:col-span-2">
          {/* big-card */}
          {latestNews && (
            <div
              key={latestNews._id}
              className="w-full overflow-hidden border border-gray-400 my-4 rounded-lg bg-gray-100"
            >
              <img
                className="w-full h-[500px] object-cover transform transition-transform duration-500 hover:scale-105"
                src={latestNews.photo}
                alt="News"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-xl mb-2">
                  {latestNews.title}
                </div>
                <p className="text-black text-sm md:text-base">
                  {latestNews.description}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {getTimeDifference(latestNews.date)}
                </span>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentNews.map((newsItem) => (
              <div key={newsItem._id} className="rounded-lg">
                <NewsCard {...newsItem} />
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <ol className="flex gap-1 text-3xl font-medium">
              {/* Previous Page */}
              <li>
                <a
                  href="#"
                  className="inline-flex items-center justify-center size-8 rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              {/* Pagination Items */}
              {Array.from(
                { length: Math.ceil(otherNews.length / newsPerPage) },
                (_, i) => i + 1
              ).map((number) => (
                <li key={number}>
                  <a
                    href="#"
                    className={`block size-8 rounded border border-gray-100 bg-white text-center leading-8 ${
                      currentPage === number
                        ? "bg-blue-600 text-white"
                        : "text-gray-900"
                    }`}
                    onClick={() => paginate(number)}
                  >
                    {convertToBengaliNumber(number)}
                  </a>
                </li>
              ))}

              {/* Next Page */}
              <li>
                <a
                  href="#"
                  className="inline-flex items-center justify-center size-8 rounded border border-gray-100 bg-white text-gray-900"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={
                    currentPage === Math.ceil(otherNews.length / newsPerPage)
                  }
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="rounded-lg">
          <LatestNews />
          <MostViewedNews />
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
