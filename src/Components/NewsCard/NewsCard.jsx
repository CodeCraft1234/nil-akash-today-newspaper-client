

const NewsCard = ({ photo, title, description, time }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg my-4 border border-gray-400 flex flex-col justify-between">
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
          <p className="text-gray-700 text-sm md:text-base">{description}</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm lg:text-base font-semibold text-gray-700">
          {time}
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
