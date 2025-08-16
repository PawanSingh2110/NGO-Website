"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

export default function App() {
  return (
    <>
      <div className="relative h-[100vh] xl:h-screen">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <div className="slide1 h-full relative flex flex-col items-center justify-center overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              >
                <source
                  src="https://videos.pexels.com/video-files/854864/854864-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 -z-10"></div>

              {/* Overlay content */}
              <h2 className="text-yellow-500 px-3 mx-auto mt-10 text-xl mb-3 lg:text-4xl font-bold z-10">
                WE ARE ANIMAL WELFARE NGO
              </h2>
              <h3 className="text-white text-sm lg:text-xl xl:w-[70%] text-center px-7 z-10">
                "We aim to rehabilitate Mumbai’s vulnerable stray cat population
                and build an enthusiastic cat-loving society that looks out for
                their interests."
              </h3>
              <Link href="#">
                <button className="border-[3px] px-4 py-2 border-orange-500 bg-transparent font-bold text-orange-500 mt-5 rounded-md hover:bg-orange-500 hover:text-white z-10">
                  DONATE NOW
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide2 h-full relative flex flex-col items-center justify-center overflow-hidden">
              {/* Background Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              >
                <source
                  src="https://videos.pexels.com/video-files/854132/854132-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 -z-10"></div>

              {/* Content */}
              <h3 className="text-yellow-500 px-3 mx-auto mt-10 text-xl mb-3 lg:text-4xl font-bold z-10">
                HELP US HELP THEM
              </h3>
              <p className="text-white text-sm lg:text-xl xl:w-[70%] text-center px-7 z-10">
                "We help stray cats through sterilizations, vaccinations, and
                emergency care. We help sick and injured cats recover as best as
                possible so they can return to their home territories."
              </p>
              <Link href="#">
                <button className="border-[3px] px-4 py-2 border-orange-500 bg-transparent font-bold text-orange-500 mt-5 rounded-md hover:bg-orange-500 hover:text-white z-10">
                  DONATE NOW
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3 h-full relative flex flex-col items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  >
    <source src="https://videos.pexels.com/video-files/855282/855282-hd_1280_720_25fps.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 -z-10"></div>

  {/* Content */}
  <h3 className="text-yellow-500 px-3 mx-auto mt-10 text-xl mb-3 lg:text-4xl font-bold z-10">
    THE PROBLEM
  </h3>
  <p className="text-white text-sm lg:text-xl xl:w-[70%] text-center px-7 z-10">
    "Stray cats face a high incidence of communicable diseases,
    malnutrition, and injuries from being hit by vehicles or
    attacked by dogs and other cats."
  </p>
  <Link href="#">
    <button className="border-[3px] px-4 py-2 border-orange-500 bg-transparent font-bold text-orange-500 mt-5 rounded-md hover:bg-orange-500 hover:text-white z-10">
      DONATE NOW
    </button>
  </Link>
</div>

          </SwiperSlide>
        </Swiper>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
          <div className="swiper-button-prev  p-2 rounded-full shadow-lg cursor-pointer "></div>
          <div className="swiper-button-next  p-2 rounded-full shadow-lg cursor-pointer "></div>
        </div>
      </div>
    </>
  );
}
