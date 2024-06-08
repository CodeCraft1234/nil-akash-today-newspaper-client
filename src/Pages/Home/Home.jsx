import NewsCardFinal from "../../Components/NewsCard/NewsCardFinal";
import NewsSideList from "../../Components/NewsCard/NewsSide/NewsSideList";
import Headline from "./Headline";

const Home = () => {
  return (
    <div className="bg-white mt-20">
      <Headline></Headline>
      <NewsCardFinal></NewsCardFinal>
      <NewsSideList></NewsSideList>
    </div>
  );
};

export default Home;
