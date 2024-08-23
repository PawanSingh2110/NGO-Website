import React from 'react';
import Data from "../data.js";

const Dotationbed = () => {
  return (
    <div className='bg-gray-100 py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 gap-8  lg:grid-cols-2'>
          {Data.map((dotation, index) => (
            <div key={index} className='bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
              <div className='relative'>
                <img src={dotation.img} alt={dotation.title} className='w-full h-[550px] object-cover' />
                <div className='absolute top-0 left-0 p-6  '>
                  <div className='text-3xl font-bold'>{dotation.title}</div>
                </div>
              </div>
              <div className='p-6'>
                <p className='text-gray-800 text-lg mb-4'>{dotation.content}</p>
                <button className='bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors duration-300'>
                  {dotation.butt}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dotationbed;
