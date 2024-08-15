import Binnodon from "../../Components/Binodon";
import { Helmet } from "react-helmet-async";

import CategoryNews from "./CategoryNews";
import Headline from "./Headline";
import SubHome from "./SubHome";

// import Banijjo from "./Banijjo";


import Rajniti from "../../Components/Rajniti";
import Khela from "../../Components/Khela";

import Saradesh from "./Saradesh";

import Sikkha from "../../Components/Sikkha";
import TwoCard from "./TwoCard";
import PhotoGallery from "./PhotoGallery";
import Banijjo from "./Banijjo";




const Home = () => {
  return (
    <div className="bg-white sm:mx-2 lg:mx-12 mt-20">
      <Helmet>
        <title>NilAkashToday | Home</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>

      <Headline></Headline>
      <SubHome></SubHome>
      <TwoCard></TwoCard>
      <Sikkha></Sikkha>
      <Binnodon></Binnodon>
      {/* <Banijjo></Banijjo> 
       <Rajniti></Rajniti> */}
      <Khela></Khela>
      <Saradesh></Saradesh>
      <PhotoGallery></PhotoGallery>
    </div>
  );
};

export default Home;