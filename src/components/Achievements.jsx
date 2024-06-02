import React, { useState } from 'react';
import { FiArrowDown } from "react-icons/fi";
import achieve1 from './assets/achieve1.png';
import achive2 from './assets/achieve2.png';

function Achievements() {
    const [currentAchievement, setcurrentAchievement] = useState(0);


    const achievements = [
        {
        image: achieve1,
        description: 'Hackerrank Certificate has successfully cleared the assessment for the skill Python (Basic)', 
        },
        {
        image: achive2,
        description: "Hackerrank Certificate has successfully cleared the assessment for the skill SQL (Basic)"
        }

    ];

    const nextAchievement = () => {
        setcurrentAchievement((prevIndex) => (prevIndex + 1) % achievements.length);
    };

  return (
    <div className='flex flex-col justify-center items-center h-screen overflow-y-auto' style={{ backgroundImage: `url('./assets/bg_lang.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    <h1 className="text-3xl font-bold mb-6">Achievements</h1>
    <div className="max-w-lg border border-gray-300 p-6 rounded-lg shadow-lg">
      <img src={achievements[currentAchievement].image} alt="Award" className="w-full h-auto mb-4" />
      <p className="text-lg leading-relaxed">
        {achievements[currentAchievement].description}
      </p>
    </div>
    <button onClick={nextAchievement} className="mt-4 text-3xl text-black font-bold py-2 px-4 rounded">
      <FiArrowDown />

    </button>

    </div>
  )
}

export default Achievements