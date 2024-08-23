"use client";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

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
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <div className="slide1 h-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/your/image1.jpg)' }}>
              <h2 className="text-yellow-500 px-3 mx-auto mt-10 text-xl mb-3 lg:text-4xl font-bold z-10">WE ARE ANIMAL WEFLARE NGO</h2>
              <h3 className="text-white text-sm lg:text-xl xl:w-[70%] text-center px-7">"We aim to rehabilitate Mumbai’s vulnerable stray cat population and build an enthusiastic cat-loving society that looks out for their interests."</h3>
<Link href="/Donate">

              <button className="border-[3px] px-4 py-2 border-orange-500 bg-transparent font-bold text-orange-500 mt-5 rounded-md hover:bg-orange-500 hover:text-white">DONATE NOW</button>
</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide2 h-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/your/image2.jpg)' }}>
              <h3 className="text-yellow-500 px-3 mx-auto mt-10 text-xl mb-3 lg:text-4xl font-bold z-10">HELP US HELP THEM</h3>
              <p className="text-white text-sm lg:text-xl xl:w-[70%] text-center px-7">"We help stray cats through sterilizations, vaccinations, and emergency care. We help sick and injured cats recover as best as possible so they can return to their home territories."</p>
<Link href="/Donate">

              <button className="border-[3px] px-4 py-2 border-orange-500 bg-transparent font-bold text-orange-500 mt-5 rounded-md hover:bg-orange-500 hover:text-white">DONATE NOW</button>
</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3 h-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/your/image3.jpg)' }}>
              <h3 className="text-yellow-500 px-3 mx-auto mt-10 text-xl mb-3 lg:text-4xl font-bold z-10">THE PROBLEM</h3>
              <p className="text-white text-sm lg:text-xl xl:w-[70%] text-center px-7">"Stray cats face a high incidence of communicable diseases, malnutrition, and injuries from being hit by vehicles or attacked by dogs and other cats."</p>
              <Link href="/Donate">
              
              <button className="border-[3px] px-4 py-2 border-orange-500 bg-transparent font-bold text-orange-500 mt-5 rounded-md hover:bg-orange-500 hover:text-white">DONATE NOW</button>
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
