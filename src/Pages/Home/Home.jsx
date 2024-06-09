import MostViewedNews from "../../Components/MostViewedNews/MostViewedNews";
import NewsCardFinal from "../../Components/NewsCard/NewsCardFinal";
import TextImageCardList from "../../Components/TextImageCard/TextImageCardList";
import LatestNews from "../../assets/LatestNews/LatestNews";
import PageDetails from "../PageDetails/PageDetails";

import Banner from "./Banner";

import Headline from "./Headline";
import SubHome from "./SubHome";

const Home = () => {
  return (
    <div className="bg-white mt-20">
      <Headline></Headline>

      <SubHome></SubHome>
      <TextImageCardList></TextImageCardList>
      <LatestNews></LatestNews>
      <MostViewedNews></MostViewedNews>
      <PageDetails></PageDetails>
      {/* <Banner></Banner>
      <NewsCardFinal></NewsCardFinal> */}

    </div>
  );
};

export default Home;
