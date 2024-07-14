import React from "react";
import { Link } from "react-router-dom";

const MainCard = ({ article, _id }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Link to={`/newsDetails/${_id}`}>
        <img
          className="w-full h-64 object-cover"
          src={article.photo}
          alt={article.title}
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{article.title}</h2>
          <p className="text-gray-600 text-sm">{article.date}</p>
         
        </div>
      </Link>
    </div>
  );
};

export default MainCard;
