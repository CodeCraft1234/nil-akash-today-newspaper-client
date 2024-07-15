import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://akash-newspaper-server.vercel.app/news');
        const uniqueCategories = [...new Set(response.data.map(article => article.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching the categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <footer className="bg-white text-black p-10">
      <div className="container mx-auto flex flex-col items-center mb-10">
        <div className="flex items-center justify-center w-full">
          <hr className="border-t-1 border-gray-600 flex-grow" />
          <Link to={"/"}>
            <img
              className="h-12 w-auto mx-4"
              src="https://i.ibb.co/sHLrjHq/Logo-Nilakash-Today-1.png"
              alt="Logo"
            />
          </Link>
          <hr className="border-t-1 border-gray-600 flex-grow" />
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
          <h5 className="font-bold text-xl mb-2">ADDRESS</h5>
          <p>গাজীপুর</p>
          <p>ঢাকা</p>
          <p>বাংলাদেশ</p>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
          <h5 className="font-bold text-xl mb-2">CATEGORIES</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category}`}
                className="hover:text-blue-600 transition duration-300"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
          <h5 className="font-bold text-xl mb-2">HELPLINE</h5>
          <p>
            For any kind of information <br /> call this number:
          </p>
          <p className="text-green-500 font-bold">01407-010352</p>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
          <h5 className="font-bold text-xl mb-2">OPENING HOURS</h5>
          <p>Monday - Friday: 8am - 4pm</p>
          <p>Saturday: 9am - 5pm</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="hover:text-blue-600 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-600 transition duration-300">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* <div className="w-full md:w-1/4 text-center md:text-left">
          <h5 className="font-bold text-xl mb-2">NEWSLETTER</h5>
          <p>Subscribe to the weekly newsletter for all the latest updates</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Your Email..."
              className="p-2 w-full text-black border border-gray-300 rounded-l-md"
            />
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-r-md hover:bg-green-600 transition duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div> */}
      </div>

      <div className="container mx-auto flex flex-wrap justify-between items-center mt-10">
        <p className="text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
          Copyright © 2023{" "}
          <a href="https://nil-akash-newspaper.netlify.app/">
            <span className="text-green-600 font-bold">NilAkashToday</span>
          </a>{" "}
          . All Rights Reserved.
        </p>
        <div className="flex justify-center md:justify-end space-x-4 w-full md:w-auto">
          <img
            src="https://i.ibb.co/BB35LPk/footer-img1.png"
            alt="COD"
            className="w-84"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

