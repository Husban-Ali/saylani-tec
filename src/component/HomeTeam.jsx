import React from 'react';
import Slider from 'react-slick';
import teammember1 from '../assets/teammember1.jpeg';
import teammember4 from '../assets/teammember3.jpeg';
import teammember3 from '../assets/teammember4.webp';
import R from '../assets/R.jpeg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Update the teamMembers array with images and descriptions
const teamMembers = [
  { id: 1, name: 'Aliyan Sheikh', position: 'Lead Developer', description: 'Expert in full-stack development', image: R },
  { id: 2, name: 'Zeshan Ijaz', position: 'Backend Developer', description: 'Specialized in Node.js and databases', image: teammember1 },
  { id: 3, name: 'Wajid Ahmed', position: 'UI/UX Designer', description: 'Creating user-friendly designs', image: teammember4 },
  { id: 4, name: 'Abdullah Ahmed', position: 'Project Manager', description: 'Overseeing project execution and delivery', image: teammember3 },
];

const TeamSection = () => {
  // Slider settings
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="bg-gray-100 py-14 mt-14">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-8">Meet Our Team</h2>
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <div key={member.id} className="flex justify-center" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1500" data-aos-once="true">
              <div className="bg-black shadow-xl border cursor-pointer mx-5 flex items-center rounded-lg p-5"> {/* Added flex layout */}
                <figure className="mr-5"> {/* Right margin for spacing */}
                <img
  src={member.image}
  alt={member.name}
  className="object-cover h-24 w-24 rounded-[50%]" // Custom border-radius of 50%
/>

                </figure>
                <div className="cards-body"> {/* Removed padding for better spacing */}
                  <h3 className="cards-title text-2xl font-semibold text-white">{member.name}</h3>
                  <h4 className="text-lg text-gray-300 mb-2">{member.position}</h4>
                  <p className="text-gray-200">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
