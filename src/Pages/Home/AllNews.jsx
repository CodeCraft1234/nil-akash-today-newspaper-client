import NewsSide from "../../Components/NewsCard/NewsSide/NewsSide";


const AllNews = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-black ml-5'>  All News</h1>
            <div className="grid grid-cols-1 gap-4 mx-4 lg:grid-cols-3 lg:gap-5">
                 <div className=" rounded-lg ">
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
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
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                    <NewsSide></NewsSide>
                 </div>
                <div className=" rounded-lg ">
                    <img src="https://i.ibb.co/z8vr3sm/1000010077.jpg" alt="" />
                    <img src="https://i.ibb.co/z8vr3sm/1000010077.jpg" alt="" />
                    {/* <img src="https://i.ibb.co/z8vr3sm/1000010077.jpg" alt="" />
                    <img src="https://i.ibb.co/z8vr3sm/1000010077.jpg" alt="" />
                    <img src="https://i.ibb.co/z8vr3sm/1000010077.jpg" alt="" />
                    <img src="https://i.ibb.co/z8vr3sm/1000010077.jpg" alt="" /> */}
                </div>
          </div>
        </div>
    );
};

export default AllNews;