import { NavLink } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { AuthContext } from "./Security/AuthProvider";
import { useContext} from "react";

const TheAdmin = () => {
  const { user } = useContext(AuthContext);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/news');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching news:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="top-0 ">
      {user && (
        <div className="flex justify-start gap-5 py-2 pl-10 lg:pl-10 bg-black text-white  pt-1 md:pt-1 lg:pt-1 z-50 w-full  fixed">
          <NavLink
            className="flex items-center gap-1"
            to={"/dashboard/admin/addNews"}
          >
            <MdDashboard className="text-xs sm:text-sm md:text-base lg:text-lg" />{" "}
            Dashboard
          </NavLink>
          <NavLink
            className="flex items-center gap-1"
            to={"/dashboard/admin/addNews"}
          >
            <span>
              <IoIosAddCircle className="text-xs sm:text-sm md:text-base lg:text-lg" />
            </span>
            Add News
          </NavLink>
          {/* {products.map(product => (
            <NavLink
              key={product._id}
              className="flex items-center gap-1"
              to={`/dashboard/admin/updateProducts/${product._id}`}
            >
              <span>
                <IoIosAddCircle className="text-xs sm:text-sm md:text-base lg:text-lg" />
              </span>
              Update News for {product.name}
            </NavLink>
          ))} */}
          <div></div>
        </div>
      )}
    </div>
  );
};

export default TheAdmin;
