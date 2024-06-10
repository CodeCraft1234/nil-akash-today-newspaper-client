import { Link } from "react-router-dom";


const NewsCard = ({ photo, title,_id, description, date }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg my-4 border border-gray-400 flex flex-col justify-between">
      <Link to={`/newsDetails/${_id}`}>
      <div>
        <img
          className="w-full h-[200px] object-cover transform transition-transform duration-500 hover:scale-105"
          src={photo}
          alt="News"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-black text-start text-sm md:text-base lg:text-lg mb-2">
            {title}
          </div>
        
        </div>
      </div>
      <div className="-2 pt-4 pb-2 text-start">
        <span className="inline-block  rounded-full px-3 py-1 text-xs md:text-sm lg:text-base font-semibold text-gray-700">
          {date}
        </span>
      </div>
      </Link>
    </div>
  );
};

export default NewsCard;
