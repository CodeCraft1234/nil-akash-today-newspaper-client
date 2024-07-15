import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import SmallCard from "../../Components/SmallCard/SmallCard";

const Draft = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handlePost = async (id) => {
    try {
      // Simulate a post action, you can implement the actual logic here
      console.log(`Post news with id: ${id}`);

      // Show a success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'News Published Successfully!',
        showConfirmButton: false,
        timer: 1500
      });

      // Optionally, you can update the status of the news item in the backend
      // const response = await axios.put(`http://localhost:5000/news/${id}`, { status: 'Published' });

      // For demonstration, let's fetch updated news data after "posting"
      const response = await axios.get('http://localhost:5000/news');
      setNews(response.data);

    } catch (error) {
      console.error('Error posting news:', error);
      // Show an error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Failed to Publish News',
        text: 'Please try again later.',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 mx-4">
      {news.map(item => (
        <SmallCard key={item._id} article={item} onPost={handlePost} />
      ))}
    </div>
  );
};

export default Draft;
