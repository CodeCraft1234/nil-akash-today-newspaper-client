import Binnodon from "../../Components/Binodon";
import { Helmet } from "react-helmet-async";
import AgreecultureSection from "./AgreecultureSection";
import CategoryNews from "./CategoryNews";
import Headline from "./Headline";
import SubHome from "./SubHome";

import Banijjo from "./Banijjo";
import TwoCard from "./TwoCard";

import Rajniti from "../../Components/Rajniti";
import Khela from "../../Components/Khela";


const Home = () => {
  return (
    <div className="bg-white mt-20">
      <Helmet>
        <title>NilAkashToday | Home</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <Headline></Headline>
      
      <SubHome></SubHome>
      <TwoCard></TwoCard>
      <AgreecultureSection></AgreecultureSection>
      <Binnodon></Binnodon>

      <Banijjo></Banijjo>

      <Rajniti></Rajniti>
      <Khela></Khela>

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