"use client";
// https://plus.unsplash.com/premium_photo-1666878155781-f86514e5808b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate inputs
    const newErrors = { ...errors };

    if (name === 'firstName' || name === 'lastName') {
      if (/\d/.test(value)) {
        newErrors[name] = 'Name should not contain numbers';
      } else {
        delete newErrors[name];
      }
    }

    if (name === 'email') {
      if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors[name] = 'Invalid email address';
      } else {
        delete newErrors[name];
      }
    }

    if (name === 'phone') {
      if (value && /[a-zA-Z]/.test(value)) {
        newErrors[name] = 'Phone number should not contain letters';
      } else {
        delete newErrors[name];
      }
    }

    // Check for empty required fields
    if (value.trim() === '' && (name === 'firstName' || name === 'lastName' || name === 'email')) {
      newErrors[name] = `${name.replace(/([A-Z])/g, ' $1').trim()} is required`;
    } else {
      if (name === 'firstName' || name === 'lastName' || name === 'email') {
        delete newErrors[name];
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for any remaining errors
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      // Perform any submission logic here
    } else {
      console.log('Form has errors:', errors);
    }
  };

  return (
    <div className="flex mt-24 xl:mt-0 flex-col xl:flex-row gap-6 md:gap-8 justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full xl:w-1/2">
        <img
          src="https://plus.unsplash.com/premium_photo-1666878155781-f86514e5808b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Dog"
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
      <div className="w-full xl:w-1/2 mt-8 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">We’d love to hear from you</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-gray-700 font-medium">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-gray-700 font-medium">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
              rows="4"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md shadow hover:bg-gray-800 transition duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
