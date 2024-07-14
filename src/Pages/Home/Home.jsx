import Binnodon from "../../Components/Binodon";
import { Helmet } from "react-helmet-async";
import AgreecultureSection from "./AgreecultureSection";
import CategoryNews from "./CategoryNews";
import Headline from "./Headline";
import SubHome from "./SubHome";
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
      <AgreecultureSection></AgreecultureSection>
      <Binnodon></Binnodon>
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