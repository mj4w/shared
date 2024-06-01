import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Sensoil from './assets/SENSOIL_PROTOTYPE.png';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectData = [
    {
      imageUrl: Sensoil,
      title: 'SENSOIL',
      description: "Portable Soil's Macronutrient Levels Analyzing Device with pH, Electrical Conductivity, and Moisture Meters for Efficient Farming and Fertilizer Recommendation",
      codeUrl: '#',
      previewUrl: '#',
      languages: ['C++', 'Arduino Mega', 'DWIN'] 
    },
    {
      imageUrl: '/project2.jpg',
      codeUrl: '#',
      previewUrl: '#',
      languages: ['Java', 'Kotlin', 'XML'] 
    },
    {
      imageUrl: '/project1.jpg',
      codeUrl: '#',
      previewUrl: '#',
      languages: ['C++', 'OpenGL'] 
    },
    // Add more project objects as needed
  ];

  const scrollRef = useRef(null);
  const frameWidth = 300;

  const handleScrollLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= frameWidth;
    }
  };

  const handleScrollRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, projectData.length - 1)
    );
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += frameWidth;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-2">All Projects</h1>
      <div className="flex justify-center">
        <div className="relative overflow-hidden w-full max-w-screen-lg">
          <div className="absolute left-0 top-0 flex items-center h-full">
            <button
              onClick={handleScrollLeft}
              className={`${
                currentIndex === 0 ? 'invisible' : 'visible'
              } bg-gray-200 px-2 py-1 rounded-md`}
            >
              {'<'}
            </button>
          </div>
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Render the current project card */}
            <ProjectCard
              imageUrl={projectData[currentIndex].imageUrl}
              title={projectData[currentIndex].title}
              description={projectData[currentIndex].description} 
              codeUrl={projectData[currentIndex].codeUrl}
              previewUrl={projectData[currentIndex].previewUrl}
              languages={projectData[currentIndex].languages} // Pass languages prop
            />
          </div>
          <div className="absolute right-0 top-0 flex items-center h-full">
            <button
              onClick={handleScrollRight}
              className={`${
                currentIndex === projectData.length - 1 ? 'invisible' : 'visible'
              } bg-gray-200 px-2 py-1 rounded-md`}
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
