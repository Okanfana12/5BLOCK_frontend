import React from "react";

export const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-md">
      <div className="text-center px-4">
        <h1 className="text-4xl font-extrabold drop-shadow-lg">
          🏡 Real Estate Marketplace
        </h1>
        <p className="text-lg mt-3 opacity-90">
          Achetez, vendez et échangez des biens immobiliers tokenisés en toute sécurité ! 🏠
        </p>
      </div>

      {/* Effet de vague */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          fillOpacity="1"
          d="M0,256L40,229.3C80,203,160,149,240,144C320,139,400,181,480,197.3C560,213,640,203,720,192C800,181,880,171,960,186.7C1040,203,1120,245,1200,240C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
