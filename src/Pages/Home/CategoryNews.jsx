import NewsSide from "../../Components/NewsCard/NewsSide/NewsSide";


const CategoryNews = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
  <div className=" rounded-lg ">
    <NewsSide></NewsSide>
    <NewsSide></NewsSide>
    <NewsSide></NewsSide>
    <NewsSide></NewsSide>
    <NewsSide></NewsSide>
    </div>
  <div className=" rounded-lg ">
  <NewsSide></NewsSide>
    <NewsSide></NewsSide>
    <NewsSide></NewsSide>
    <NewsSide></NewsSide>
    <NewsSide></NewsSide>
  </div>
  <div className=" rounded-lg ">
  <NewsSide></NewsSide>
    <NewsSide></NewsSide>
    <NewsSide></NewsSide>
    <NewsSide></NewsSide>
    <NewsSide></NewsSide>
  </div>
</div>
        </div>
    );
};

export default CategoryNews;