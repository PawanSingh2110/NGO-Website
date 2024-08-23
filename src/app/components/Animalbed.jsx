"use client";
import React, { useState, useEffect } from "react";

const Card = ({ title, description, image, date, comments }) => {
  return (
    <div className="bg-white shadow-xl border rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 mb-4">{date} • {comments}</p>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-300">
          Read More
        </a>
      </div>
    </div>
  );
};

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const posts = [
    {
      title: "Introducing a New Pet to Your Existing Companion",
      date: "JULY 24, 2024",
      comments: "NO COMMENTS",
      description: "Introducing a new pet to a jealous furry friend may take time and patience, but with the right approach, it can lead to a harmonious household.",
      img: "https://via.placeholder.com/400x300?text=Introducing+a+New+Pet",
    },
    {
      title: "Taming the Tub: A Soapy Guide to Bathing Fussy Pets",
      date: "JULY 10, 2024",
      comments: "1 COMMENT",
      description: "If you're the proud parent of a furry (or scaly, or feathery) friend who sees bath time as an extreme sport, fear not! We've got your back.",
      img: "https://via.placeholder.com/400x300?text=Taming+the+Tub",
    },
    {
      title: "Taming the Tricksters: A Guide to Administering Medication to Finicky Furballs",
      date: "JULY 3, 2024",
      comments: "NO COMMENTS",
      description: "Administering medication to our beloved pets can be a real challenge, especially when dealing with stubborn dogs and cats.",
      img: "https://via.placeholder.com/400x300?text=Taming+the+Tricksters",
    },
    {
      title: "Understanding Your Pet’s Behavior",
      date: "JUNE 20, 2024",
      comments: "2 COMMENTS",
      description: "Learn how to read your pet's body language and behavior to strengthen your bond and improve communication.",
      img: "https://via.placeholder.com/400x300?text=Understanding+Your+Pet",
    },
    {
      title: "Healthy Diets for Your Pets",
      date: "MAY 18, 2024",
      comments: "NO COMMENTS",
      description: "Discover the best dietary practices to keep your pets healthy and active.",
      img: "https://via.placeholder.com/400x300?text=Healthy+Diets",
    },
    {
      title: "Exercise Routines for Pets",
      date: "APRIL 15, 2024",
      comments: "5 COMMENTS",
      description: "Ensure your pet stays fit and happy with our comprehensive exercise guide.",
      img: "https://via.placeholder.com/400x300?text=Exercise+Routines",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? posts.length - slidesToShow : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === posts.length - slidesToShow ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const interval = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  return (
    <div className="py-16">
      <h1 className="text-center text-4xl font-medium mb-8">Blog Posts</h1>
      <div className="container mx-auto px-3 py-8 relative">
        <button
          className="absolute top-1/2 left-0 transform z-30 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 overflow-hidden">
          {posts.slice(currentIndex, currentIndex + slidesToShow).map((post, index) => (
            <Card
              key={index}
              title={post.title}
              description={post.description}
              image={post.img}
              date={post.date}
              comments={post.comments}
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
          See All Blog Posts
        </button>
      </div>
    </div>
  );
};

export default BlogSlider;
