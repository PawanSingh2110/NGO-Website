"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../../public/image/ngo2.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/" || pathname ==="/what-we-do" || pathname === "/Getinvolved") {
      const handleScroll = () => {
        if (window.scrollY > 80) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
    className={`flex justify-between items-center px-4 py-1 fixed w-full top-0 z-50 transition-colors duration-300 ${
      pathname === "/" || pathname === "/what-we-do"|| pathname === "/Getinvolved" 
        ? isScrolled
          ? "bg-green-500 text-black"
          : "bg-transparent text-white"
        : "bg-orange-500/25 text-black"
    }`}
    >
      <div className="text-xl font-bold">
        <Link href="/">
          <Image src={Logo} alt="logo" width={100} height={50} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden xl:flex">
        <ul className="flex gap-6 font-medium items-center">
          <li className="px-3 py-1 hover:bg-yellow-400 rounded-md hover:text-gray-800 transition duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="px-3 py-1 hover:bg-yellow-400 rounded-md hover:text-gray-800 tracking-tighter transition duration-300">
            <Link href="/what-we-do">What we do</Link>
          </li>
          <li className="px-3 py-1 hover:bg-yellow-400 rounded-md hover:text-gray-800 transition duration-300">
            <Link href="/Getinvolved">Get involved</Link>
          </li>
          <li className="px-3 py-1 hover:bg-yellow-400 rounded-md hover:text-gray-800 transition duration-300">
            <Link href="/About-us">About us</Link>
          </li>
         
          <li className="px-3 py-1 hover:bg-yellow-400 rounded-md hover:text-gray-800 transition duration-300">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button className="xl:hidden flex items-center" onClick={toggleMenu}>
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-0 right-0 w-3/4 h-full bg-gray-800 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex flex-col items-start mt-8 space-y-4 px-4">
          <li className="text-lg px-4 py-2 hover:bg-yellow-400 rounded-md transition duration-300 w-full text-left">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg px-4 py-2 hover:bg-yellow-400 rounded-md transition duration-300 w-full text-left">
            <Link href="/what-we-do">What we do</Link>
          </li>
          <li className="text-lg px-4 py-2 hover:bg-yellow-400 rounded-md transition duration-300 w-full text-left">
            <Link href="/Getinvolved">Get involved</Link>
          </li>
          <li className="text-lg px-4 py-2 hover:bg-yellow-400 rounded-md transition duration-300 w-full text-left">
            <Link href="/About-us">About us</Link>
          </li>
        
          <li className="text-lg px-4 py-2 hover:bg-yellow-400 rounded-md transition duration-300 w-full text-left">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="flex justify-center mt-auto mb-4 px-4">
          <Link href="/Donate">
            <button className="font-medium px-5 py-2 rounded-md text-lg hover:bg-yellow-500 transition duration-300 w-full text-left">
              Donate
            </button>
          </Link>
        </div>
      </div>

      {/* Donate Button */}
      <div className="hidden xl:block">
        <Link href="/Donate">
          <button className="font-medium border-2 border-black bg-green-500 px-5 py-2 rounded-md text-lg hover:bg-yellow-500 transition duration-300">
            Donate
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
