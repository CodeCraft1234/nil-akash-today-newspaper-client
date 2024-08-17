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
    <footer className="bg-white px-16 text-black p-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
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
          <p className="text-blue-500 font-bold">+8801956695981</p>
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


      </div>

      <div className="container mx-auto flex flex-wrap justify-between items-center mt-10">
        <p className="text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
          Copyright © 2024{" "}
          <a href="https://nil-akash-newspaper.netlify.app/">
            <span className="text-green-600 font-bold">Digital Network</span>
          </a>{" "}
          . All Rights Reserved.
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;

