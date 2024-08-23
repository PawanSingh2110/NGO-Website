import React from 'react';

const CardsSection = () => {
  const cards = [
    {
      title: "Donate",
      description: "No amount is too small. It goes a long way to help animals at the rehab centre",
      img: "https://plus.unsplash.com/premium_photo-1664371206019-a82ba8d7c2e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D", // Replace with your actual image URL
      bgColor: "bg-green-500",
    },
    {
      title: "Volunteer",
      description: "A few hours a week with the animals means the world to them, not to mention, the memories that will stay with you for a lifetime.",
      img: "https://images.unsplash.com/photo-1518887499460-71d222eed89d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your actual image URL
      bgColor: "bg-yellow-500",
    },
    {
      title: "Adopt",
      description: "Don’t buy or breed animals while there are many animals deprived of a good home. Come visit us & you might just meet your soulmate.",
      img: "https://images.unsplash.com/photo-1518882174711-1de40238921b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHN8ZW58MHx8MHx8fDA%3D", // Replace with your actual image URL
      bgColor: "bg-green-700",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center gap-6">
        {cards.map((card, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-96 object-cover"
            />
            <div
              className={`absolute inset-0 ${card.bgColor} bg-opacity-10 flex flex-col justify-center items-center p-6`}
            >
              <div className="text-center text-white">
                <h3 className="text-2xl  font-bold">{card.title}</h3>
                <p className="mt-4">{card.description}</p>
                <button
                  className="mt-6 py-2 px-4 bg-green-600 hover:bg-yellow-400 text-black font-semibold rounded"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
