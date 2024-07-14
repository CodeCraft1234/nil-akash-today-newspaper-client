/* eslint-disable no-unused-vars */
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
  const [category, setCategory] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [image, setImage] = useState(null);
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

  const handleSubmit = async (e) => {
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
      const dates = new Date();
      const bengaliDate = getBengaliDate(date);
      const newsInfo = { title, description, photo,dates, category, division, district, date: bengaliDate };

      // Post the news data
      await AxiosPublic.post("/news", newsInfo);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "News has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      // Reset the form
      setTitle("");
      setDescription("");
      setCategory("");
      setDivision("");
      setDistrict("");
      setImage(null);
    } catch (error) {
      console.error("Error posting news", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to save news",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <Helmet>
        <title>NilAkashToday | AddNews</title>
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
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

          <div>
            <label htmlFor="category" className="block text-lg font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>Select a category</option>
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

          {category === "সারাদেশ" && (
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
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Add News
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
