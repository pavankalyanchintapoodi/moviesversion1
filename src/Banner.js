import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Banner.css";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "RAA RAJA",
      description: "A village chief's son secretly continues his father's mission to end smuggling, while pretending to be weak and maintaining the illusion that his father is still alive.",
      image: "./Raa-Raja-Poster.jpg", // Replace with actual image URLs
    },
    {
      id: 2,
      title: "MAATHRU",
      description: "Some mysterious kidnaps are happening in a town but where ever the kidnap happen the kindaper leaves a code language hint. Due to unusual dreams Vijay (Hero) gets panicked and suffers psycho logically.",
      image: "./HD-Mathru-poster.jpg",
    },
    {
      id: 3,
      title: "RAA RAJA",
      description: "A village chief's son secretly continues his father's mission to end smuggling, while pretending to be weak and maintaining the illusion that his father is still alive.",
      image: "./Raa-Raja-Poster.jpg",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="banner-swiper"
    >
      {slides.map((slide) => (
       <SwiperSlide key={slide.id}>
       <div
         className="banner-slide"
         style={{ backgroundImage: `url(${slide.image})` }}
       >
         <div className="banner-content">
           <h1>{slide.title}</h1>
           <p>{slide.description}</p>
           <div className="banner-buttons">
             <button>Watch Trailer</button>
             <button>Learn More</button>
           </div>
         </div>
       </div>
     </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
