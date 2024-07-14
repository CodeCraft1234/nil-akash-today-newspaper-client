
import { Link } from "react-router-dom";

const NewsCardFinal = ({photo,title,id}) => {

  return (
    <div className=" px-4 py-8">
       <Link  to={`/newsDetails/${id}`}>
           <li  className="flex hover:bg-gray-100 items-center justify-start gap-2 space-x-2">
                   <img className="h-14 w-16" src={photo} alt="" />
                   <a className="hover:text-blue-800 hover:font-extralight">{title}</a>
               </li>
         </Link>
    </div>
  );
};

export default NewsCardFinal;
