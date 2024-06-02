import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Sensoil from './assets/SENSOIL_PROTOTYPE.png';
import ICPEP from './assets/ICPEP.png';
import Calqlated from './assets/CalQlated.png';
import Wiffbar from './assets/Wiffbar.png';
import Pansnap from './assets/Pansnap.png';
import RapidCodeQuest from './assets/RapidCodeQuest.png';
import MeetOnline from './assets/MeetOnline.png';
import Birthday from './assets/birthday.png';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectData = [
    {
      imageUrl: Sensoil,
      title: 'SENSOIL',
      description: "Portable Soil's Macronutrient Levels Analyzing Device with pH, Electrical Conductivity, and Moisture Meters for Efficient Farming and Fertilizer Recommendation",
      codeUrl: 'https://github.com/mj4w/SENSOIL',
      previewUrl: '',
      languages: ['C++', 'Arduino Mega', 'DWIN'] 
    },
    {
      imageUrl: ICPEP,
      codeUrl: 'https://github.com/mj4w/ICPEPWebsite2024',
      title: 'ICPEP.SE BULSU-MC',
      description: 'Official website for the ICPEP Organization at Bulacan State University, developed by the Programming Team. Accessible exclusively to BulSU students from the Meneses Campus.',
      previewUrl: 'https://icpep.online/',
      languages: ['Django', 'Ajax', 'Jquery'] 
    },
    {
      imageUrl: Calqlated,
      codeUrl: 'https://github.com/mj4w/CalQlationQuizApp',
      title: 'CalQlated',
      description: 'This website showcases a Quiz Application for Bulacan State University, a Capstone Project for 4th-year Computer Science students. I built the backend, and my friend for the frontend.',
      previewUrl: 'https://calqlated.pythonanywhere.com/',
      languages: ['Django','Ajax', 'Javascript'] 
    },
    {
      imageUrl: Wiffbar,
      codeUrl: 'https://github.com/mj4w/WIFFBAR_PH',
      title: 'WiffbarPH',
      description: 'VapeShop in the Philippines, established in 2022, lets you browse and add products to your cart easily. You can also view your selected products through your profile.',
      previewUrl: '#',
      languages: ['Django','Ajax','Jquery']
    },
    {
      imageUrl: Pansnap,
      codeUrl: 'https://github.com/mj4w/pansnap2.0',
      title: 'Pansnap',
      description: "Capstone Project in my 3rd year of college, for my friend's business. It includes photography, videography, and more. You can book services and receive notifications, with a beautiful admin panel as well.",
      previewUrl: '#',
      languages: ['HTML','CSS','Django']
    },
    {
      imageUrl: RapidCodeQuest,
      codeUrl: 'https://github.com/mj4w/RapidCodeQuest',
      title: 'RapidCodeQuest',
      description:'Quiz Web App designed to challenge and enhance your programming skills. It features a scheduler, practice mode, and leaderboards to track and compare your performance with other users.',
      previewUrl: '#',
      languages: ['HTML','CSS','Django']
    },
    {
      imageUrl: MeetOnline,
      codeUrl: 'https://github.com/mj4w/SM_DjangoWebsite',
      title: 'MeetOnline',
      description: 'Social Media Web App that facilitates posting, sharing, and commenting, with real-time messaging capabilities. Includes video calling functionality and profile viewing features.',
      previewUrl: '#',
      languages: ['HTML','CSS','Django']
    },{
      imageUrl: Birthday,
      codeUrl: 'https://github.com/mj4w/HBD2U',
      title: 'HBD2U',
      description: 'A straightforward React application where users input their birthdate to receive personalized greetings along with randomly generated special quotes tailored to their special day.',
      previewUrl: 'https://happybd2u.netlify.app/',
      languages: ['React','Javascript']
    }
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
    <div className="flex flex-col justify-center items-center h-screen" style={{ backgroundImage: `url('./assets/bg_lang.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <h1 className="text-2xl font-bold mb-2">8 Projects in Total 🥳</h1>
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
            <ProjectCard
              imageUrl={projectData[currentIndex].imageUrl}
              title={projectData[currentIndex].title}
              description={projectData[currentIndex].description} 
              codeUrl={projectData[currentIndex].codeUrl}
              previewUrl={projectData[currentIndex].previewUrl}
              languages={projectData[currentIndex].languages} 
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
