import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import SmallCard from "../../Components/SmallCard/SmallCard";
import UseDraft from "../../AxiosFetch/UseDraft";
import { Link } from "react-router-dom";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";

const Draft = () => {
  const [draft, setDraft] = UseDraft();
  const AxiosPublic = UseAxiosPublic();

  const handlePublish = (item) => {
    const postData = {
      title: item.title,
      description: item.description,
      photo: item.photo,
      date: item.date,
      category: item.category,
      division: item.division,
      district: item.district,
      dates: item.dates,
      reporter: "Robiul Islam"
    };

    AxiosPublic.post('/news', postData)
      .then(response => {
        Swal.fire({
          icon: 'success',
          title: 'Published!',
          text: 'Your news has been published successfully.',
        });

        // Delete the draft item
        return AxiosPublic.delete(`/draft/${item._id}`);
      })
      .then(response => {
        // Remove the published item from the draft list
        setDraft(prevDraft => prevDraft.filter(d => d._id !== item._id));
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
        console.error("There was an error publishing the news!", error);
      });
  };
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-4 mx-4">
      {draft.map(item => (
        <div key={item._id} className="rounded text-black overflow-hidden shadow-md flex flex-row items-center">
          <Link to={`/newsDetails/${item._id}`}>
            <li className="flex items-center justify-start gap-2 space-x-2">
              <img className="h-14 w-16" src={item.photo} alt="" />
              <a className="hover:text-blue-800 hover:font-extralight">{item.title}</a>
            </li>
          </Link>
          <button onClick={() => handlePublish(item)}>
            <h1 className="bg-blue-700 py-1 text-white rounded-md ml-4 px-2">Publish</h1>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Draft;
