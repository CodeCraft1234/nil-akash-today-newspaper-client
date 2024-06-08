import NewsCard from "../../Components/NewsCard/NewsCard";

const TwoCard = () => {
    return (
        <div>
             <div className="grid grid-cols-2  gap-8">
        <NewsCard
          image="https://i.ibb.co/k5qND10/flower.jpg"
          title="শুরু হয়েছে শীতের মৌসুম, শীতের ফুলের রঙিন প্রাকৃতি"
          time="১ বছর আগে"
        />
        <NewsCard
          image="https://i.ibb.co/GVrfqtb/hasina.jpg"
          title="ম্যুরালে বঙ্গবন্ধু ও প্রধানমন্ত্রীর সঙ্গে কারও ছবি নয়: হাইকোর্ট"
          time="১ বছর আগে"
        />
      </div>
        </div>
    );
};

export default TwoCard;