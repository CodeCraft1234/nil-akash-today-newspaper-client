import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSection from './NewsSection';

function Banijjo () {
  const [binodonNews, setBinodonNews] = useState([]);
  const [oparbanglaNews, setOparbanglaNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/news");

        const sortByDate = (newsArray) => {
          return newsArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        };

        const binodon = sortByDate(response.data.filter(news => news.category === "স্বাস্থ্য"));
        const oparbangla = sortByDate(response.data.filter(news => news.category === "শিক্ষা"));

        setBinodonNews(binodon);
        setOparbanglaNews(oparbangla);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid text-black lg:grid-cols-2 gap-3 p-4">
      <NewsSection title="স্বাস্থ্য" news={binodonNews} />
      <NewsSection title="শিক্ষাঙ্গন" news={oparbanglaNews} />
    </div>
  );
}

export default Banijjo;
