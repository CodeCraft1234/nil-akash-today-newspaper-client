import { Link } from "react-router-dom";
import NewsCard from "../../Components/NewsCard/NewsCard";
import Carousel from "./Carousel";
import TwoCard from "./TwoCard";


const Banner = () => {
    return (
        <div>
             <div>
                 <Carousel />
                 <TwoCard></TwoCard>
            </div>
        </div>
    );
};

export default Banner;