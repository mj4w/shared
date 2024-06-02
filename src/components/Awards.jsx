import React, { useState } from 'react';
import { FiArrowDown } from "react-icons/fi";
import award1 from './assets/award1.jpg';
import award2 from './assets/award2.jpg';
import award3 from './assets/award3.jpg';
import award4 from './assets/award4.jpg';
import award5 from './assets/award5.jpg';

function Awards() {
  const [currentAwardIndex, setCurrentAwardIndex] = useState(0);


  const awards = [
    {
      image: award1,
      description: 'BEST IN INNOVATION entitled "SENSOIL: Portable Soils Macronutrient Levels Analyzing Device with pH, Electrical Conductivity, and Moisture Meters for Efficient Farming and Fertilizer Recommendation" ', 
    },
    {
      image: award2,
      description: "Academic Execellence during second semester of SY 2022-2023 to the first semester of 2023-2024, thus upholding the academic merit and paving the inclusion to the prestigious President's List of the College"
    },
    {
        image: award3,
        description: 'DISTINGUISHED RESEARCH AWARD entitled "SENSOIL: Portable Soils Macronutrient Levels Analyzing Device with pH, Electrical Conductivity, and Moisture Meters for Efficient Farming and Fertilizer Recommendation" ', 
    },
    {
        image: award4,
        description: "Programming Head, Leadership, commitment, and tireless efforts to the ICpEP.SE-MC have significantly contributed to the success and growth of the organization."
    },
    {
        image:award5,
        description: "THE BEST IN PROGRAMMING AWARDEE, CPE Night at Red Arc Balagtas, Bulacan."
    }

  ];

  const nextAward = () => {
    setCurrentAwardIndex((prevIndex) => (prevIndex + 1) % awards.length);
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-y-auto' style={{ backgroundImage: `url('./assets/bg_lang.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
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
