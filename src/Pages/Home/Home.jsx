

import { Helmet } from "react-helmet-async";
import MostViewedNews from "../../Components/MostViewedNews/MostViewedNews";
import NewsCardFinal from "../../Components/NewsCard/NewsCardFinal";
import AgreecultureSection from "./AgreecultureSection";
import AllNews from "./AllNews";

import Banner from "./Banner";
import CategoryNews from "./CategoryNews";
import CategoryNewsTwo from "./CategoryNewsTwo";
import DeshNews from "./DeshNews";
import Entertainment from "./Entertainment";
import ExcusiveNewa from "./ExcusiveNewa";

import Headline from "./Headline";
import InternationalNews from "./InternationalNews";
import Saradesh from "./Saradesh";
import SubHome from "./SubHome";

const Home = () => {
  return (
    <div className="bg-white mt-20">
      <Helmet>
        <title>NilAkashToday | Home</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <Headline></Headline>
      <SubHome></SubHome>
      <AgreecultureSection></AgreecultureSection>
      <CategoryNews></CategoryNews>
      {/* <CategoryNewsTwo></CategoryNewsTwo> */}
      {/* <ExcusiveNewa></ExcusiveNewa> */}
      {/* <DeshNews></DeshNews> */}
      {/* <InternationalNews></InternationalNews> */}
      {/* <AllNews></AllNews> */}
      {/* <Entertainment></Entertainment> */}
      {/* <Saradesh></Saradesh> */}
    </div>
  );
};

export default Home;