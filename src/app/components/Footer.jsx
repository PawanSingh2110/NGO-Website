import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../../../public/image/ngo2.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-gray-200 py-10 z-10">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Logo and Info */}
          <div className="md:col-span-2">
            <Link href="/">
              <Image
                src={Logo}
              
                alt="logo"
                className="mb-6 w-32 lg:w-36 mx-auto"
              />
            </Link>
            <p className="text-sm mb-4">
              Animals Matter To Me (AMTM), Mumbai is a not-for-profit, legally
              registered charitable organization in India.
            </p>
            <p className="font-semibold text-sm mb-2">
              Registration number F-41718
            </p>
            <p className="text-sm mb-4">
              Donations are exempt from Income Tax under Section 80-G of Indian
              IT Act 1961 No.AADTA0943KE2014 up to A.Y. 2026-27 Cert No
              F/41718/Mumbai
            </p>
            <p className="text-sm">
              AMTM is FCRA registered and can accept international donations.
            </p>
          </div>

          {/* Work Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Work</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Sterilization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Medical Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Rescues
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Animal Ambulance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Animals in care
                </a>
              </li>
            </ul>
          </div>

          {/* Get Involved Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Adoptions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  CSR Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Facilities Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Facilities</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Animal Hospital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Animal Sanctuary
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Community Outreach
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Feeding Programs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col lg:flex-row justify-between items-center">
          {/* Search Bar */}
          <div className="flex items-center mb-4 lg:mb-0">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none"
            />
            <button className="bg-yellow-500 text-gray-800 px-4 py-2 rounded-r-md hover:bg-yellow-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.42-1.42l4.32 4.32a1 1 0 01-1.42 1.42l-4.32-4.32zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="text-sm flex flex-wrap justify-center space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Refunds
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              About
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>Copyright © 2024 Animals Matter To Me. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
