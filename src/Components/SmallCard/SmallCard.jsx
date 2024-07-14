import React from "react";
import { Link } from "react-router-dom";

const SmallCard = ({ article }) => {
  return (
    <div className="rounded text-black overflow-hidden shadow-lg flex flex-row items-center">
     <Link  to={`/newsDetails/${article._id}`}>
           <li  className="flex hover:bg-gray-100 items-center justify-start gap-2 space-x-2">
                   <img className="h-14 w-16" src={article.photo} alt="" />
                   <a className="hover:text-blue-800 hover:font-extralight">{article.title}</a>
               </li>
         </Link>
    </div>
  );
};

export default SmallCard;
