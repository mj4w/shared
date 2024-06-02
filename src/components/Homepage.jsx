import '../App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faHtml5, faCss3Alt, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Homepage() {
  const [showText, setShowText] = useState(false);

  const handleLearnMoreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowText(!showText);
  };

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen`} style={{ backgroundImage: showText ? `url('./assets/bg_lang.png')` : 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='flex justify-center mb-4'>
        <FontAwesomeIcon icon={faHtml5} className={`mx-2 ${showText ? 'fade-out' : 'fade-in'}`} size="2x" />
        <FontAwesomeIcon icon={faPython} className={`mx-2 ${showText ? 'fade-out' : 'fade-in'}`} size="2x" />
        <FontAwesomeIcon icon={faDatabase} className={`mx-2 ${showText ? 'fade-out' : 'fade-in'}`} size="2x" />
        <FontAwesomeIcon icon={faLinux} className={`mx-2 ${showText ? 'fade-out' : 'fade-in'}`} size="2x" />
        <FontAwesomeIcon icon={faJs} className={`mx-2 ${showText ? 'fade-out' : 'fade-in'}`} size="2x" />
        <FontAwesomeIcon icon={faCss3Alt} className={`mx-2 ${showText ? 'fade-out' : 'fade-in'}`} size="2x" />
      </div>
      <a className="inline-flex" href="#" onClick={handleLearnMoreClick}>
        <span className={`h-12 flex items-center justify-center uppercase font-semibold px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out`}>
          {showText ? 'Hide Details' : 'Click Me'}
        </span>
      </a>
      <div className={`mt-4 text-center additional-info ${showText ? 'show' : ''}`}>


        <h2 className="text-3xl font-bold mb-2">Aribal, Marcel James V.</h2>
        <p>Based in Bulakan, Bulacan, Philippines, 2 years in Backend Development. I enjoy simplifying complicated systems and providing flawless experiences.
          I have a passion for creating effective and dependable solutions. Together, let's generate innovation and make ideas a reality.
        </p>
        <div className="mt-4">
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <p>Email: <a href='mailto:marcelaribal963@gmail.com'></a>marcelaribal963@gmail.com</p>
          <p>Phone Number: 09157756236</p>
        </div>
        <div className="mt-4">
          <h2 className="text-3xl font-bold mb-2 gradient-text"><Link to='/projects'>SEE PROJECTS</Link> • <Link to='/awards'>AWARDS</Link> • <Link to='/achievements'>ACHIEVEMENTS</Link></h2>
        </div>
        <div className='flex justify-center text-4xl items-center m-auto p-3 gap-5'>
          <a href="https://www.linkedin.com/in/marceljames4w/" target="_blank"><CiLinkedin /></a>
          <a href="https://github.com/mj4w" target="_blank"><FaGithub /></a>
          <a href="https://www.facebook.com/proudtobea4thwatcher.07" target="_blank"><CiFacebook /></a>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
