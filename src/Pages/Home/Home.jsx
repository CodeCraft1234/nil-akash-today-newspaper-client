import NewsCardFinal from "../../Components/NewsCard/NewsCardFinal";
import AgreecultureSection from "./AgreecultureSection";

import Banner from "./Banner";
import CategoryNews from "./CategoryNews";
import DeshNews from "./DeshNews";
import ExcusiveNewa from "./ExcusiveNewa";

import Headline from "./Headline";
import SubHome from "./SubHome";

const Home = () => {
  return (
    <div className="bg-white mt-20">
      <Headline></Headline>
      <SubHome></SubHome>
      <AgreecultureSection></AgreecultureSection>
      <CategoryNews></CategoryNews>
      <ExcusiveNewa></ExcusiveNewa>
      <DeshNews></DeshNews>
    </div>
  );
};

export default Home;
