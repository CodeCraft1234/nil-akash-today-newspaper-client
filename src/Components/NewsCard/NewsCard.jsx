import { Link } from "react-router-dom";

const NewsCard = ({ photo, title, _id }) => {
  const truncateTitle = (title = "", wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };
console.log(photo,title);
  return (
    <div className=" h-[370px] hover:text-blue-800 rounded-lg overflow-hidden shadow-lg border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col">
      <Link to={`/newsDetails/${_id}`} className="block h-full">
        <div className="flex flex-col h-full">
          <img
            className="w-full h-[300px] object-cover"
            src={photo}
            alt="News"
          />
          <div className="px-6 py-4 flex-1 flex flex-col justify-between">
            <div className="text-black text-start mb-2">
              {truncateTitle(title, 7)}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
