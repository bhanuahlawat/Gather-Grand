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
