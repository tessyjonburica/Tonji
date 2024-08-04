import React from 'react';
import DogImage from '../assets/dog.png'; // Ensure you have this image in the correct path
import TonjiImage from '../assets/tonji.png'; // Ensure you have this image in the correct path

const Hero = () => {
  return (
    <main
      className="flex flex-col items-center justify-center h-screen text-white border-2 border-blue-600"
      style={{ backgroundColor: '#1d1c18' }}
    >
     
      <img src={TonjiImage} alt="Tonji" className="" />
      <img src={DogImage} alt="Dog" className="w-64 mb-4 transform scale-x-[-1]" />
      <button className="px-6 py-2 bg-white text-black rounded">Enter</button>
    </main>
  );
};

export default Hero;
