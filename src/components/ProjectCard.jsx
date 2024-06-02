import React from 'react';

const ProjectCard = ({ imageUrl, codeUrl, previewUrl, title, description, languages }) => {
  const handlePreviewClick = (e) => {
    if (!previewUrl || previewUrl === '#') {
      e.preventDefault();
      alert('Preview is not available');
    }
  };

  return (
    <div className="flex-shrink-0 mx-4">
      <div className="border border-black rounded-md p-4">
        <img
          src={imageUrl}
          alt="Project"
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
        <div className="flex justify-center items-center mb-2">
          {languages.map((language, index) => (
            <span key={index} className="mr-2">
              {getLanguageIcon(language)}
            </span>
          ))}
        </div>
        <p className="text-gray-700 mb-4 max-w-xs text-center">{description}</p>
        <div className="flex justify-between items-center">
          <a
            href={codeUrl} 
            target='_blank'
            className="uppercase font-semibold border border-black hover:bg-blue-500 hover:text-white hover:border-blue-500 transition duration-500 ease-in-out px-4 py-2 rounded-md mr-2"
          >
            Code
          </a>
          <a
            href={previewUrl}
            onClick={handlePreviewClick}
            target = "_blank"
            className={`px-4 py-2 rounded-md ${!previewUrl || previewUrl === '#' ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-green-500 text-white'}`}
          >
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

const getLanguageIcon = (language) => {
  const languageIcons = {
    JavaScript: 'JS',
    Python: 'Py',
    HTML: 'HTML',
    Java: 'Java',
    Kotlin: 'Kt',
    XML: 'XML',
    'C++': 'C++',
    OpenGL: 'GL',
  };

  if (languageIcons[language]) {
    return (
      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">
        {languageIcons[language]}
      </span>
    );
  } else {
    return (
      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md">
        {language}
      </span>
    );
  }
};

export default ProjectCard;
