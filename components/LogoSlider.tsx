"use client";

// components/LogoSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const logos = [
  "/image/logo1.jpeg",
  "/image/logo2.PNG",
  "/image/logo3.png",
  "/image/logo4.png",
  "/image/logo5.png",
  "/image/logo6.png",
  "/image/logo7.png",
  "/image/logo8.PNG",
  "/image/logo9.png",
  "/image/logo10.png",
  "/image/logo11.png",
];

const LogoSlider = () => {
  return (
<div className="w-full pb-28">
  <h2 className="text-4xl font-bold text-center mb-8">
    Supported Brokers
  </h2>
  <span className="block text-base text-gray-500 text-center mb-12">
    Connect with your preferred broker seamlessly
  </span>

  <Swiper
    slidesPerView={8}
    spaceBetween={0}
    breakpoints={{
      0: { slidesPerView: 2 },
      400: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 6 },
      1280: { slidesPerView: 8 },
    }}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    loop={true}
    modules={[Autoplay]}
    className="!px-0"
  >
    {logos.map((logo, index) => (
      <SwiperSlide
        key={index}
        className="!p-0 !m-0 flex items-center justify-center"
      >
        <div className="flex items-center justify-center w-full">
          <img
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="w-16 h-16 object-cover rounded-full cursor-pointer"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  );
};

export default LogoSlider;
