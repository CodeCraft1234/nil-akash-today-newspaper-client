const NewsCardTest = ({ title, photo }) => {
  return (
    <div className="relative">
      <img
        src={photo}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="absolute bottom-0 w-full bg-gray-700 bg-opacity-40 text-white px-2 py-4">
        <div className="font-bold text-sm md:text-xl">{title}</div>
      </div>
    </div>
  );
};

export default NewsCardTest;
