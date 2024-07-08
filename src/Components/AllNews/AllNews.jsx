import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseNews from "../../AxiosFetch/UseNews";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

const AllNews = () => {
  const [news, refetch] = UseNews();
  const [activeTab, setActiveTab] = useState(""); // State to keep track of the active tab
  const [currentPage, setCurrentPage] = useState(1); // State to keep track of the current page
  const [itemsPerPage] = useState(30); // Number of items to display per page
  const [searchQuery, setSearchQuery] = useState(""); // State to keep track of the search query
  const [selectedDate, setSelectedDate] = useState(null); // State to keep track of the selected date

  // Function to handle tab click and set active tab
  const handleTabClick = (category) => {
    setActiveTab(category);
    setCurrentPage(1); // Reset current page when tab changes
  };

  // Function to handle adding a product to cart
  const AxiosPublic = UseAxiosPublic();

  // Filter products based on the active tab, search query, and selected date
  const filteredProducts = news.filter((product) => {
    const productDate = new Date(product.dates); // Parse the ISO 8601 date string
    return (
      (activeTab ? product.category === activeTab : true) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedDate ? productDate.toDateString() === selectedDate.toDateString() : true)
    );
  });

  // Calculate indexes for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Function to paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Blog!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete blog",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosPublic.delete(`/products/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your blog has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="py-3 px-4">
      <h2 className="text-3xl font-bold mb-6 text-start ml-5 text-black">All News</h2>
      {/* Tabs for sorting */}
      <div className="mb-4 ml-5 flex justify-center lg:justify-between items-center flex-wrap gap-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 lg:w-full">
          <div className="lg:col-span-2 mr-5">
            <select
              className="py-2 px-4  border bg-gray-300 border-black text-black font-bold w-full"
              value={activeTab}
              onChange={(e) => handleTabClick(e.target.value)}
            >
              <option value="">Category</option>
              <option value="জাতীয়">জাতীয়</option>
              <option value="আন্তর্জাতিক">আন্তর্জাতিক</option>
              <option value="রাজনীতি">রাজনীতি</option>
              <option value="অর্থনীতি">অর্থনীতি</option>
              <option value="সারাদেশ">সারাদেশ</option>
              <option value="বিনোদন">বিনোদন</option>
              <option value="খেলা">খেলা</option>
              <option value="শিক্ষা">শিক্ষা</option>
              <option value="উপার বাংলা">উপার বাংলা</option>
              <option value="স্বাস্থ্য">স্বাস্থ্য</option>
            </select>
          </div>
          <div className="lg:col-span-10 flex flex-wrap items-center gap-4">
      <div className="relative w-full lg:w-auto mb-4 lg:mb-0">
        <input
          type="text"
          placeholder="Search by news title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 pl-4 pr-10  border bg-gray-300 border-black text-black font-bold"
        />
        <span className="absolute inset-y-0 right-4 flex items-center">
          <FaSearch className="text-black" />
        </span>
      </div>
      <div className="relative">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd-MM-yyyy"
        placeholderText="Select a date"
        className="w-full lg:w-auto py-2 px-4  border bg-gray-300 border-black text-black font-bold"
      />
       <span className="absolute inset-y-0 right-4 flex items-center">
          <AiOutlineCalendar className="text-black" />
        </span>
      </div>
     
    </div>
        </div>
      </div>
      {/* /////////////// */}
      <div className="p-2 sm:p-4">
        <div className="overflow-x-auto border-2 border-black">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-300 text-blue-500">
              <tr>
                <th className="px-5 text-start"> <input
                 type="checkbox"
                 className="form-checkbox h-5 w-5 bg-white text-blue-600 border-gray-300 rounded"
                      />   Title</th>
                
                <th className="p-3 text-center">Auther</th>
                <th className="p-3 text-center">Categories</th>
              </tr>
            </thead>
            <tbody className="">
              {currentItems.map((news, index) => (
                <tr
                  key={news._id}
                  className={`${
                    index % 2 === 0
                      ? " text-gray-500  border-opacity-20"
                      : "bg-blue-100 text-gray-500  border-opacity-20"
                  }`}
                >
                  <td className="p-3 flex justify-start items-center border-gray-300 bg-white text-start px-5">
                   <input
                 type="checkbox"
                 className="form-checkbox h-5 w-5 bg-white text-blue-600 border-gray-300 rounded"
                      />
                      <h1 className="ml-4"> {news.title}</h1>
                        </td>


                  

                
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Product grid */}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav>
          <ul className="pagination">
            {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, i) => (
              <li key={i} className="page-item">
                <button onClick={() => paginate(i + 1)} className="page-link text-3xl btn">
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AllNews;
