import React from 'react';

const AnimalWelfarePage = () => {
  const teamMembers = [
    { name: 'Ganesh Nayak', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxwZW9wbGV8ZW58MHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Dheeraja Nayak', image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxwZW9wbGV8ZW58MHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Dr Ankita Pathak', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHBlb3BsZXxlbnwwfHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Suman Nazareth', image: 'https://images.unsplash.com/photo-1597311316167-d8fb7c01f14e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHxwZW9wbGV8ZW58MHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Rhea Malhtani', image: 'https://images.unsplash.com/photo-1560831341-8021d3fc36db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlb3BsZXxlbnwwfHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Dr Subhash Chimaji Mhaske', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI0fHxwZW9wbGV8ZW58MHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Kamalkar Bist', image: 'https://images.unsplash.com/photo-1551446591-142875a901a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIzfHxwZW9wbGV8ZW58MHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Omung Kumar', image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxwZW9wbGV8ZW58MHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Vanita Omung Kumar', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHBlb3BsZXxlbnwwfHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Mufaddal Cementwala', image: 'https://images.unsplash.com/photo-1597311316167-d8fb7c01f14e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI1fHxwZW9wbGV8ZW58MHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Sushma Jayachandran', image: 'https://images.unsplash.com/photo-1560831341-8021d3fc36db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlb3BsZXxlbnwwfHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
    { name: 'Shri Vinay Kantak', image: 'https://images.unsplash.com/photo-1551446591-142875a901a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIzfHxwZW9wbGV8ZW58MHx8fHwxNjI5NjQ3MTg4&ixlib=rb-1.2.1&q=80&w=400' },
  ];

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 mt-16 xl:mt-20">
      {/* Who We Are Section */}
      <section className="flex flex-col lg:flex-row items-center my-8">
        <div className="lg:w-1/2 text-center md:text-left">
          <h2 className="text-xl font-semibold text-orange-500">WHO WE ARE</h2>
          <h1 className="text-2xl sm:text-3xl font-bold mt-2 text-gray-800">We are a nonprofit animal welfare organisation working to create a safe and healthy world for every animal, and for the people who love them.</h1>
          <p className="mt-4 text-gray-700">
            AMTM is here for every animal in need, and has been since 2010. We believe that every animal deserves the best. That’s why we are dedicated to the rescue and rehabilitation of stray and abandoned animals — we believe we can transform their quality of life through kindness and compassion.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src="https://images.unsplash.com/photo-1548858806-e064cf9872c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZyUyMGNhcmV8ZW58MHx8MHx8fDA%3D" alt="Who We Are" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full bg-yellow-300 text-center py-6 px-3  lg:py-8 my-6 lg:my-8 rounded-lg">
        <h2 className="text-xl sm:text-2xl  font-bold text-gray-800">Our vision is a kind and loving world for every animal.</h2>
        <p className="mt-4 text-gray-700 tracking-wide font-medium">
          Tens of thousands of animals later, we’re still working hard to ensure every dog / cat / elephant / horse / tortoise / rabbit is treated with love, care, and respect.
        </p>
      </section>

      {/* Team Section */}
      <section className="w-full text-center my-6 md:my-8">
        <h2 className="text-xl font-semibold text-gray-800">OUR TEAM</h2>
        <h3 className="text-2xl font-bold mt-2 text-orange-500">Meet our animal-crazy team</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-6 md:mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-full shadow-md"
              />
              <h4 className="mt-4 text-base sm:text-lg font-medium text-gray-800">{member.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Donors Section */}
      <section className="w-full text-center py-6 md:py-8 mt-6 md:mt-8">
        <h2 className="text-xl font-semibold text-gray-800">DONORS</h2>
        <p className="mt-4 text-lg md:text-xl font-medium xl:w-[70%] mx-auto">
          We are deeply grateful for the generous support from organisations, foundations, corporations, and individuals.
        </p>
        <p className="mt-4 text-sm md:text-base">
          If you would like us to partner with us to help us ensure fair and humane treatment of all animals, please write in to getinvolved@amtmindia.org
        </p>
      </section>
    </div>
  );
};

export default AnimalWelfarePage;
