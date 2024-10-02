import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../Styles/HomeServices.css';

const workItems = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and user-friendly websites.',
    imageUrl: 'https://xbsoftware.com/wp-content/uploads/2023/03/website-development-process-full-guide-1-fb.jpg',
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Creating applications with React Native',
    imageUrl: 'https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Crafting intuitive user interfaces.',
    imageUrl: 'https://segwitz.com/wp-content/uploads/2023/09/5757453-scaled-1.jpg',
  },
  {
    id: 4,
    title: 'E-commerce Solutions',
    description: 'Building e-commerce platforms.',
    imageUrl: 'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/ecommerce.png',
  },
];

const WhatWeWorkOn = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 py-20">
  <h2
    className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    data-aos="fade-up"
  >
    What We Work On
  </h2>
  <div className="container mx-auto px-6">
    <div className="flex flex-wrap -m-4 ">
      {workItems.map((item) => (
        <div
          key={item.id}
          className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="cardes relative bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col justify-between transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl h-[480px] w-[300px]">
            <img className="w-full h-48 object-cover" src={item.imageUrl} alt={item.title} />
            
            {/* Wrap title and description in a div with the class "content" */}
            <div className="content p-6 flex-grow relative z-10">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-white mt-3">{item.description}</p>
            </div>

            {/* Glow Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-20 rounded-xl transition-opacity duration-300 z-0"
              style={{ pointerEvents: 'none' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
    {/* Button Below the Cards */}
    <div className="text-center mt-12">
      <Link to={'/about'}>
        <button
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Explore More
        </button>
      </Link>
    </div>
  </div>
</div>

  );
};

export default WhatWeWorkOn;
