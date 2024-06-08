/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UseAxiosPublic from "../../Axios/UseAxiosPublic";
// import UseAxiosSecure from "../../Axios/UseAxiosSecure";
import Swal from "sweetalert2";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const image_hosting_key = "6fbc3358bbb1a92b78e2dee0f5ca1b94";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const AxiosPublic = UseAxiosPublic();
  // const AxiosSecure = UseAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);

    // Upload image
    const images = { image: image };
    const res = await AxiosPublic.post(image_hosting_api, images, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const photo = res.data.data.display_url;
    console.log(photo);

    const date = new Date();
    const newsInfo = { title, description, photo, category, date };
    console.log(newsInfo);

    AxiosPublic.post("/news", newsInfo).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "news has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });

    // Post news to the server
    AxiosPublic.post("/news", newsInfo).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "news has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });

    // Reset the form
    setTitle("");
    setDescription("");

    setImage(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="text-white min-h-screen bg-gradient-to-r from-[#1e1b4b] via-indigo-800 to-[#1e1b4b] flex items-center justify-center p-10 overflow-x-hidden">
      <div className="bg-[#031321] p-8 rounded-lg shadow-xl w-96 mt-16">
        <h2 className="text-2xl font-bold mb-4">Add your News</h2>
        <form onSubmit={handleSubmit} action="#" method="post">
          <label htmlFor="title" className="block font-bold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full text-black p-2 mb-4 border rounded"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description" className="block font-bold mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="w-full text-black p-2 mb-4 border rounded"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor="image" className="block font-bold mb-1">
            Image Upload:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2 mb-4 border rounded"
            accept="image/*"
            required
          />
          <label htmlFor="category" className="block font-bold mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full text-black p-2 mb-4 border rounded"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
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

          <button
            type="submit"
            className="b bg-green-900 text-white p-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNews;
