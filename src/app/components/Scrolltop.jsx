"use client"// components/ScrollToTopButton.js
import { useState, useEffect } from 'react';
import { FaLongArrowAltUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 px-3 py-3 bg-orange-500 text-white text-lg z-50 rounded-full shadow-lg hover:bg-blue-600"
      >
       <FaLongArrowAltUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
