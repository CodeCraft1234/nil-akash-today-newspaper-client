import NewsSide from './NewsSide';

const NewsSideList = () => {
    return (
        <div className="container mx-auto px-4 py-8">
        <h2 className="text-center text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NewsSide
            image="https://i.ibb.co/hcYs4Hq/mahi.jpg"
            title="ঘুম না আসা পর্যন্ত সকল দিও: মাহিয়া মাহি"
            description="মাহিয়া মাহি"
            time="১ বছর আগে"
          />
          {/* Add more NewsSide components as needed */}
        </div>
      </div>
    );
};

export default NewsSideList;