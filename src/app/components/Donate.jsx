"use client";
import React, { useState, useEffect } from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-xl border rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:scale-105 transition duration-300">
          <a href="#">Read More & Donate</a>
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const cards = [
    {
      title: "Shaurya",
      description:
        "Shaurya, a 5-year-old male dog rescued from Malad East, desperately needs Rs. 25,000 for treatment of a severe back injury that has led to a maggot infection. The poor pup is in excruciating pain and requires immediate medical attention to save his life. Please help this innocent animal in urgent distress regain his health and freedom from suffering.",
      image: "https://images.unsplash.com/photo-1701651092825-8e0e3ea5e7cf?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Shera",
      description:
        "Shera, a one-year-old male cat rescued from Malad West, desperately needs Rs. 25,000 for medical treatment after being attacked by dogs, leaving him paralysed. The poor cat requires immediate surgery and rehabilitation to have any chance of walking again. Your donation can provide Shera with the care he needs to recover and find a loving home. Please help this innocent victim of a tragic accident regain his health and mobility..",
      image: "https://images.unsplash.com/photo-1751215519023-48f8df0f6e45?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Brownie",
      description:
        "Brownie, a one-year-old male cat rescued from Kharodi, Malad West, is in urgent need of Rs. 20,000 for medical treatment of a severe leg wound sustained in an accident.  The poor cat requires immediate care to recover and avoid further suffering. Your donation can make a lifesaving difference for Brownie..",
      image: "https://images.unsplash.com/photo-1723531055820-f03072bda9dd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bruno",
      description:
        "Bruno, a 3-year-old male dog rescued from Malad East, urgently needs Rs. 30,000 for surgery after suffering from a severe leg fracture in an accident. His leg requires immediate medical attention to prevent permanent disability.",
      image: "https://images.unsplash.com/photo-1602879535314-3ae6fba01c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Tommy",
      description:
        "Tommy, a 2-year-old male dog rescued from Kandivali, urgently needs Rs. 15,000 for treatment after a car accident that caused multiple fractures. Your help can give Tommy a chance to walk again.",
      image: "https://images.unsplash.com/photo-1733210872526-863e2f16cf39?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - slidesToShow : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === cards.length - slidesToShow ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >=768){
        setSlidesToShow(2);
      }else {
        setSlidesToShow(1)
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  return (
    <div className="py-16">
      <h1 className="text-center text-4xl font-medium">Animals In Treatment</h1>
      <div className="container mx-auto px-3 py-8 relative">
        <button
          className="absolute top-1/2 left-0 transform z-30 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 overflow-hidden">
          {cards.slice(currentIndex, currentIndex + slidesToShow).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
      <div className="w-full flex justify-center items-center mt-7">
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600">
          See All The Animals In Care
        </button>
      </div>
    </div>
  );
};

export default App;
