const NewsSide = ({ image, title, description, time }) => {
  return (
    <div className="relative flex items-center border border-gray-300 p-2 rounded hover:shadow-lg transition-shadow duration-300">
    <div className="relative w-1/3">
      <img
        className="w-full h-full object-cover rounded"
        src={image}
        alt="News"
      />
      <div className="absolute bottom-1 left-0 right-0 w-full flex items-center justify-center bg-red-500 rounded-lg opacity-0 hover:opacity-90 transition-opacity duration-300">
        <p className="text-white font-bold">{time}</p>
      </div>
    </div>
    <div className="w-2/3 pl-2">
      <h1 className="text-lg font-bold mb-1">{title}</h1>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </div>
  );
};

export default NewsSide;
