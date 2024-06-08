const NewsSide = ({ image, title, description, time }) => {
  return (
    <div className="relative flex text-black items-center border border-gray-300 p-2 rounded hover:shadow-lg transition-shadow duration-300">
    <div className="relative w-1/3">

      <img
        className="w-full h-full object-cover rounded"
        src="https://i.ibb.co/hcYs4Hq/mahi.jpg"
        alt="News"
      />
      <div className="absolute bottom-1 left-0 right-0 w-full flex items-center justify-center bg-gray-300 rounded-lg opacity-0 hover:opacity-90 transition-opacity duration-300">
        <p className=" font-bold">১ বছর আগে</p>
      </div>
    </div>
    <div className="w-2/3 pl-2">
      <h1 className="text-lg font-bold mb-1">ঘুম না আসা পর্যন্ত সকল দিও: মাহিয়া মাহি</h1>
      <p className="text-sm ">মাহিয়া মাহি</p>
    </div>
  </div>
  );
};

export default NewsSide;
