

import React, { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import Swal from "sweetalert2";
import 'tailwindcss/tailwind.css';
import { Helmet } from "react-helmet-async";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [image, setImage] = useState(null);
  const [reporterName, setReporterName] = useState("");


  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const AxiosPublic = UseAxiosPublic();

  const divisionsAndDistricts = {
    Dhaka: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"],
    Chattogram: ["Bandarban", "Brahmanbaria", "Chandpur", "Chattogram", "Cumilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati"],
    Rajshahi: ["Bogura", "Jaipurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Rajshahi", "Sirajganj"],
    Khulna: ["Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"],
    Barishal: ["Barguna", "Barishal", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur"],
    Sylhet: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
    Rangpur: ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"],
    Mymensingh: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"]
  };

  const convertToBengaliNumber = (num) => {
    const bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num.toString().split("").map(n => bengaliNumbers[n] || n).join("");
  };

  const getBengaliDate = (date) => {
    const day = convertToBengaliNumber(date.getDate());
    const month = convertToBengaliNumber(date.getMonth() + 1); // Months are zero-based
    const year = convertToBengaliNumber(date.getFullYear());
    const hours = convertToBengaliNumber(date.getHours());
    const minutes = convertToBengaliNumber(date.getMinutes());
    const seconds = convertToBengaliNumber(date.getSeconds());

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };


  const handleSubmit = async (e, status) => {

    e.preventDefault();

    try {
      // Upload image
      const formData = new FormData();
      formData.append('image', image);

      const res = await AxiosPublic.post(image_hosting_api, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const photo = res.data.data.display_url;

      const date = new Date();
      const bengaliDate = getBengaliDate(date);

      const newsInfo = { 
        title, 
        description, 
        photo, 
        date, 
        category: selectedCategories.join(", "), 
        division, 
        district, 
        dates: bengaliDate,
        reporter: reporterName 
      };

      // Post the news data based on status
      const endpoint = status === "publish" ? "/news" : "/draft";
      await AxiosPublic.post(endpoint, newsInfo);


      Swal.fire({
        position: "top-end",
        icon: "success",

        title: `News has been ${status === "publish" ? "published" : "saved as draft"}`,

        showConfirmButton: false,
        timer: 1500,
      });

      // Reset the form
      setTitle("");
      setDescription("");

      setSelectedCategories([]);
      setDivision("");
      setDistrict("");
      setImage(null);
      setReporterName("");

    } catch (error) {
      console.error("Error posting news", error);
      Swal.fire({
        position: "top-end",
        icon: "error",

        title: `Failed to ${status === "publish" ? "publish news" : "save draft"}`,

        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };


  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prevCategories) =>
      checked ? [...prevCategories, value] : prevCategories.filter((category) => category !== value)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full">

      <Helmet>
        <title>NilAkashToday | AddNews</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full ">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Add New Post</h2>
        <form className="space-y-6">
          <div className="grid justify-between items-start gap-10 lg:grid-cols-3">
            <div className="col-span-2 border border-black p-5">
              <div>
                <label htmlFor="title" className="block text-lg font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 block w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className='py-3 pb-5 rounded-lg bg-white'>
                <label className="block text-base font-medium ml-2 text-gray-700">Description</label>
                <CKEditor
                  editor={ClassicEditor}
                  data={description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDescription(data);
                  }}
                  className="mt-1 p-4 py-10 h-[400px] bg-white"
                  config={{
                    toolbar: [
                      'heading', '|',
                      'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|',
                      'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|',
                      'undo', 'redo'
                    ],
                    height: 400
                  }}
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-lg font-medium text-gray-700">
                  Image Upload
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                  accept="image/*"
                  required
                />
              </div>
            </div>

            <div className="col-span-1 border mb-5  border-black p-5">
            <div>
            <label htmlFor="reporterName" className="block text-lg font-medium text-gray-700">
              Reporter Name
            </label>
            <input
              type="text"
              id="reporterName"
              name="reporterName"
              placeholder="type name..."
              className="mt-1 block w-full bg-white  px-4 py-2 border border-black rounded-md shadow-sm"
              required
              value={reporterName}
              onChange={(e) => setReporterName(e.target.value)}
            />
          </div>
              <div className="space-y-2 border-t border-gray-700 mt-5">
                <p className="text-lg font-medium text-gray-700">Category</p>
                {[
                  "জাতীয়",
                  "আন্তর্জাতিক",
                  "রাজনীতি",
                  "অর্থনীতি",
                  "সারাদেশ",
                  "বিনোদন",
                  "খেলা",
                  "শিক্ষা",
                  "উপার বাংলা",
                  "স্বাস্থ্য"
                ].map((category) => (
                  <div key={category} className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      id={category}
                      name={category}
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={handleCategoryChange}
                      className="h-5 w-5"
                    />
                    <label htmlFor={category} className="text-lg font-medium text-gray-700">
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              {(selectedCategories.includes("সারাদেশ") && (
                <>
                  <div>
                    <label htmlFor="division" className="block text-lg font-medium text-gray-700">
                      Division
                    </label>
                    <select
                      id="division"
                      name="division"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                      required
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                    >
                      <option value="" disabled>Select a division</option>
                      {Object.keys(divisionsAndDistricts).map((div) => (
                        <option key={div} value={div}>{div}</option>
                      ))}
                    </select>
                  </div>

                  {division && (
                    <div>
                      <label htmlFor="district" className="block text-lg font-medium text-gray-700">
                        District
                      </label>
                      <select
                        id="district"
                        name="district"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        <option value="" disabled>Select a district</option>
                        {divisionsAndDistricts[division].map((dist) => (
                          <option key={dist} value={dist}>{dist}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={(e) => handleSubmit(e, "publish")}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Publish
            </button>
            <button
              type="button"
              onClick={(e) => handleSubmit(e, "draft")}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
            >
              Save as Draft

            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
