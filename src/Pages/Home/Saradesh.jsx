import { useEffect, useState } from "react";
import UseNews from "../../AxiosFetch/UseNews";
import NewsSide from "../../Components/NewsCard/NewsSide/NewsSide";
import Carousel from "./Carousel";
import TwoCard from "./TwoCard";
import { Link } from "react-router-dom";

const Saradesh = () => {
  const [newss, setNews] = useState([]);
  const [news] = UseNews();
  const [division, setDivision] = useState('');
  const [district, setDistrict] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const divisions = {
    Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"],
    Chattogram: ["Bandarban", "Brahmanbaria", "Chandpur", "Chattogram", "Cumilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati"],
    Khulna: ["Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
    Rajshahi: ["Bogura", "Joypurhat", "Naogaon", "Natore", "Chapainawabganj", "Pabna", "Rajshahi", "Sirajganj"],
    Barishal: ["Barishal", "Barguna", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur"],
    Sylhet: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
    Rangpur: ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"],
    Mymensingh: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"],
  };

  useEffect(() => {
    const filtered = news
      .filter(article => article.category === 'সারাদেশ')
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sorting by date

    setNews(filtered);
  }, [news]);

  useEffect(() => {
    let filtered = newss;

    if (division) {
      filtered = filtered.filter(article => article.division === division);
    }

    if (district) {
      filtered = filtered.filter(article => article.district === district);
    }

    setFilteredNews(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  }, [division, district, newss]);

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
    setDistrict(''); // Reset district when division changes
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const divisionOptions = Object.keys(divisions);
  const districtOptions = division ? divisions[division] : [];

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className=" p-4">
      <div className="bg-red-600  text-white p-2 mb-3 rounded">সারাদেশ</div>
      <div className="filter-container justify-end mb-4 flex items-center">
        <div className="mr-4">
          <label className="mr-2">Select Division:</label>
          <select value={division} onChange={handleDivisionChange} className="p-2 border bg-blue-300 text-black border-gray-300 rounded">
            <option value="">All Divisions</option>
            {divisionOptions.map((div, index) => (
              <option key={index} value={div}>{div}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2">Select District:</label>
          <select value={district} onChange={handleDistrictChange} className="p-2 border bg-blue-300 text-black border-gray-300 rounded" disabled={!division}>
            <option value="">All Districts</option>
            {districtOptions.map((dist, index) => (
              <option key={index} value={dist}>{dist}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.length > 0 ? (
          currentItems.map((article, index) => (
            <Link key={index} to={`/newsDetails/${article._id}`} className="block h-full">
            <div  className="news-article mb-4">
              <div className="w-full ">
                <img className='rounded' src={article?.photo} alt="" />
                <h1 className="text-2xl font-bold mb-1">{article.title}</h1>
                {/* <p className="text-justify mb-4 bg-white" dangerouslySetInnerHTML={{ __html: truncateDescription(article.description, 50) }}></p> */}
              </div>
            </div>
            </Link>
           
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Saradesh;
