import React, { useState } from 'react';
import { FiArrowDown } from "react-icons/fi";

function Awards() {
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);


  const awards = [
    {
      image: "/sample_image1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consect", 
    },
    {
      image: "/sample_image2.jpg",
      description: "Award 2 description"
    },

  ];

  const nextAward = () => {
    setCurrentAwardIndex((prevIndex) => (prevIndex + 1) % awards.length);
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-y-auto'>
      <h1 className="text-3xl font-bold mb-6">Awards</h1>
      <div className="max-w-lg border border-gray-300 p-6 rounded-lg shadow-lg">
        <img src={awards[currentAwardIndex].image} alt="Award" className="w-full h-auto mb-4" />
        <p className="text-lg leading-relaxed">
          {awards[currentAwardIndex].description}
        </p>
      </div>
      <button onClick={nextAward} className="mt-4 text-3xl text-black font-bold py-2 px-4 rounded">
        <FiArrowDown />

      </button>

    </div>
  );
}

export default Awards;
