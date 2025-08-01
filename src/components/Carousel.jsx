// // src/components/Carousel.jsx
// import { useEffect, useState } from "react";

// const images = [
//   "/images/slide1.png",
//   "/images/slide2.png",
//   "/images/slide3.png",
//   "/images/slide4.png",
//   "/images/slide5.png",
// ];

// export default function Carousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 5000); // 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full max-w-5xl mx-auto h-[400px] rounded-3xl overflow-hidden shadow-2xl mt-20">
//       {images.map((src, index) => (
//         <img
//           key={index}
//           src={src}
//           alt={`Slide ${index + 1}`}
//           className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out rounded-3xl transform ${
//             index === current
//               ? "opacity-100 scale-100 z-10"
//               : "opacity-0 scale-95 z-0"
//           }`}
//         />
//       ))}

//       {/* Gradient overlay for text feel */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20" />

//       {/* Slide indicators */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-4 h-4 rounded-full border border-white transition-all duration-300 ${
//               current === i ? "bg-white scale-125 shadow-md" : "bg-white/40"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }


// src/components/ImageCarousel.jsx
import React from "react";
import Slider from "react-slick";

const images = [
  "/images/slide1.png",
  "/images/slide2.png",
  "/images/slide3.png",
  "/images/slide4.png",
  "/images/slide5.png",
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "1px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto mt-6 px-4">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
