import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSection from './NewsSection';

function Banijjo () {
  const [binodonNews, setBinodonNews] = useState([]);
  const [oparbanglaNews, setOparbanglaNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://akash-newspaper-server.vercel.app/news");

        const sortByDate = (newsArray) => {
          return newsArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        };

        const binodon = sortByDate(response.data.filter(news => news.category === "বিনোদন"));
        const oparbangla = sortByDate(response.data.filter(news => news.category === "উপার বাংলা"));

        setBinodonNews(binodon);
        setOparbanglaNews(oparbangla);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-3 p-4">
      <NewsSection title="অর্থ-বাণিজ্য" news={binodonNews} />
      <NewsSection title="শিক্ষাঙ্গন" news={oparbanglaNews} />
    </div>
  );
}

export default Banijjo;
