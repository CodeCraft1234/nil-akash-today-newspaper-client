const NewsCard = ({ photo, title, description, date }) => {
  
  return (
    <div className="max-w-sm rounded-lg text-black overflow-hidden  my-4">
      <img className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105" src={photo} alt="News" />
      <div className="px-6 py-4">
        <div className="font-bold text-sm md:text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        ১ বছর আগে
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
