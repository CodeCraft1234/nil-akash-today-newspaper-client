/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
import Swal from "sweetalert2";
import 'tailwindcss/tailwind.css';

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
      const bengaliDate = getBengaliDate(date);
      const newsInfo = { title, description, photo, category, division, district, date: bengaliDate };

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
    <div className="min-h-screen text-black flex items-center justify-center p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-bold text-black mb-6">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-lg font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
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
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
                  required
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                >
                  <option value="" disabled>Select a division</option>
                  {Object.keys(divisionsAndDistricts).map((div) => (
                    <option key={div} value={div}>
                      {div}
                    </option>
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
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white"
                    required
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  >
                    <option value="" disabled>Select a district</option>
                    {divisionsAndDistricts[division].map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
