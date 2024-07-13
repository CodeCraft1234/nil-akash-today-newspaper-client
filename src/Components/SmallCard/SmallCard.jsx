import React from "react";

const SmallCard = ({ article }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-row items-center">
      <img
        className="w-1/3 h-20 object-cover"
        src={article.photo}
        alt={article.title}
      />
      <div className="p-4 w-2/3">
        <h2 className="text-lg font-bold mb-2">{article.title}</h2>
        <p className="text-gray-600 text-sm">{article.date}</p>
      </div>
    </div>
  );
};

export default SmallCard;
