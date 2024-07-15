import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import axios from 'axios';
import Swal from 'sweetalert2';

const AllNews = () => {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [category, setCategory] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [dropdownIndex, setDropdownIndex] = useState(null); // State to track open dropdown index

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://akash-newspaper-server.vercel.app/news');
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
    setTitle(newsItem.title);
    setDescription(newsItem.description);
    setPhoto(newsItem.photo);
    setCategory(newsItem.category);
    setDivision(newsItem.division);
    setDistrict(newsItem.district);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://akash-newspaper-server.vercel.app/news/${id}`);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'News Deleted Successfully',
          showConfirmButton: false,
          timer: 1500
        });
        // Update news state after deletion
        setNews(news.filter(item => item._id !== id));
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Delete News',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error('Error deleting news:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Delete News',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const handleSaveEdit = async () => {
    try {
      const updatedNews = {
        title,
        description,
        photo,
        category,
        division,
        district
      };
      const response = await axios.put(`https://akash-newspaper-server.vercel.app/news/${editingNews._id}`, updatedNews);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'News Updated Successfully',
          showConfirmButton: false,
          timer: 1500
        });
        // Update news state after editing
        setNews(news.map(item => (item._id === editingNews._id ? response.data : item)));
        setIsEditing(false);
        setEditingNews(null);
        clearForm();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Update News',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error('Error updating news:', error);
      Swal.fire({
        icon: 'error',
        title: 'Failed to Update News',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPhoto("");
    setCategory("");
    setDivision("");
    setDistrict("");
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditingNews(null);
    clearForm();
  };

  const handleToggleDropdown = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null); // Close the dropdown if it's already open
    } else {
      setDropdownIndex(index); // Open the dropdown for the specific news item
    }
  };

  return (
    <div>
      <Helmet>
        <title>NilAkashToday | AllNews</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <h1 className="text-3xl font-bold text-black ml-5 mt-1"> সব খবর</h1>
      <div className="overflow-x-auto mx-4 mt-4">
        <table className="min-w-full bg-white border-gray-200 rounded shadow-md overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
            
            <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase"></th>
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Title</th>
              {/* <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase"></th> */}
              <th className="py-2 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600 uppercase">Actions</th>
              
            </tr>
          </thead>
          <tbody>
         
            {news.map((item, index) => (
                
              <tr key={item._id} className="hover:bg-gray-50">
                <img src={item.photo} alt={item.title} className="w-20 h-20 object-cover rounded-md mb-2" />
              
                <td className="py-3 px-4 border-b border-gray-200 text-gray-800 hover:text-blue-600">{item.title} 
                </td>
                
                <td className="py-3 px-4 border-b border-gray-200 mb-3">
                  <div className="relative">
                    <button className="focus:outline-none" onClick={() => handleToggleDropdown(index)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {dropdownIndex === index && (
                      <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                        <div className="py-1">
                          <button
                            onClick={() => handleEdit(item)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: 'Are you sure?',
                                text: 'You will not be able to recover this news!',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: 'Yes, delete it!',
                                cancelButtonText: 'Cancel'
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  handleDelete(item._id);
                                }
                              });
                            }}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      
                    )}
                   
                  </div>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 text-black bg-opacity-75">
          <div className="bg-white rounded-lg overflow-hidden shadow-md max-w-3xl w-full mx-4">
            <div className="flex justify-between items-center bg-gray-100 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800">Edit News</h2>
              <button className="text-gray-500 hover:text-gray-800" onClick={cancelEdit}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <label htmlFor="editTitle" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="editTitle"
                name="editTitle"
                className="mt-1 block w-full px-3 py-2 border bg-white  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="editDescription" className="block mt-3 text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="editDescription"
                name="editDescription"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />    
              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                >
                  Save Changes
                </button>
                <button
                  onClick={cancelEdit}
                  className="ml-2 px-4 py-2 border border-gray-300 rounded-md shadow-md hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllNews;
