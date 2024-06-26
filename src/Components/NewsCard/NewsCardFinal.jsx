
import NewsCard from "./NewsCard";

const NewsCardFinal = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* card 2 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <NewsCard
          image="https://i.ibb.co/8mBwNTd/kasim.jpg"
          title="কাশিমপুর কারাগারে ধর্ষণ মামলার আসামির ফাঁসি কার্যকর"
       
          time="১ বছর আগে"
        />
        <NewsCard
          image="https://i.ibb.co/rm9SY56/padma.jpg"
          title="পদ্মা নদীতে আটকে পড়া শিক্ষার্থী ও শিশুসহ ২৪ জনকে উদ্ধার করেছে নৌপুলিশ"
        
          time="১ বছর আগে"
        />
        <NewsCard
          image="https://i.ibb.co/ZVg4qGG/istema.jpg"
          title="জেনে নিন বিশ্ব ইজতেমার জেলাভিত্তিক খিত্তার তালিকা"
         
          time="১ বছর আগে"
        />
      </div>
      {/* card 3 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <NewsCard
          image="https://i.ibb.co/WxrXhHY/hasina2.jpg"
          title="জনগণ বিচার করবে ১৪ বছরে আ. লীগ কী দিয়েছে : প্রধানমন্ত্রী"
        
          time="১ বছর আগে"
        />
        <NewsCard
          image="https://i.ibb.co/jfScjqs/dhumketo.jpg"
          title="৫০ হাজার বছর পর আকাশে উঠবে যে ধূমকেতু, দেখা যাবে খালি চোখেও"
        
          time="১ বছর আগে"
        />
        <NewsCard
          image="https://i.ibb.co/kgYtcF7/kajol.jpg"
          title="‘সিন্দাবাদ-আলাদীনের মতো কাজল রেখাও দর্শকমনে স্থান করে নেবে’"
         
          time="১ বছর আগে"
        />
      </div>
      {/* card 4 */}
      
    </div>
  );
};

export default NewsCardFinal;
