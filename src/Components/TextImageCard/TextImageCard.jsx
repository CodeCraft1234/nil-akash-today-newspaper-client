const TextImageCard = ({ image, title }) => {
    return (
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt="News"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gray-600 bg-opacity-70 p-2">
          <h1 className="text-white  text-base font-bold">{title}</h1>
        </div>
      </div>
    );
  };
  
  export default TextImageCard;