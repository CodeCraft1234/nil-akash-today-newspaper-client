import { useEffect, useRef } from "react";

const newsData = [
  {
    title: "ছয় দফা দিবস উপলক্ষে ইবি বঙ্গবন্ধু পরিবারের আলোচনা সভা",
    time: "৩৩ মিনিট আগে",
   
    imageUrl: "https://i.ibb.co/ZKqF21S/bongo.webp",
  },
  {
    title: "সৌম্যের লজ্জার রেকর্ড",
    time: "৬১ মিনিট আগে",
   
    imageUrl: "https://i.ibb.co/TMjmHcH/soumyo.webp",
  },
  {
    title: "গাজায় শিশুরা কাজে যাচ্ছে অতিবরে ভাঙাচোরা",
    time: "৩ ঘন্টা আগে",
  
    imageUrl: "https://i.ibb.co/9wnC24s/gaja.webp",
  },
  {
    title: "গাজায় শিশুরা কাজে যাচ্ছে অতিবরে ভাঙাচোরা",
    time: "৩ ঘন্টা আগে",
   
    imageUrl: "https://i.ibb.co/9wnC24s/gaja.webp",
  },
  {
    title: "গাজায় শিশুরা কাজে যাচ্ছে অতিবরে ভাঙাচোরা",
    time: "৩ ঘন্টা আগে",
  
    imageUrl: "https://i.ibb.co/9wnC24s/gaja.webp",
  },
  {
    title: "গাজায় শিশুরা কাজে যাচ্ছে অতিবরে ভাঙাচোরা",
    time: "৩ ঘন্টা আগে",
  
    imageUrl: "https://i.ibb.co/9wnC24s/gaja.webp",
  },
  // Add more items as needed
];

const MostViewedNews = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ top: 100, behavior: 'smooth' });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Most Viewed News</h2>
      <div className="overflow-y-auto max-h-screen" ref={scrollContainerRef}>
        {newsData.map((news, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded shadow-md p-4 mb-4 flex items-center border border-gray-400"
          >
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold mb-1">{news.title}</h3>
              <div className="text-gray-500 text-sm mb-1">{news.time}</div>
              <div className="text-gray-600">{news.category}</div>
            </div>
          </div>
      ))}
    </div>
  </div>
  );
};

export default MostViewedNews;
