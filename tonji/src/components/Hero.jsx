import React from 'react';
import '../index.css'
import DogImage from '../assets/dog.png'; // Ensure you have this image in the correct path

const Hero = () => {
  return (
    <main className="hero-container md:min-h-[982px] ">
      <h1 className="font-mooLahLah font-normal hero-title text-center">Tonji</h1>
      <div className="hero-image-container">
        <a href="#history">
          <button className="bg-transparent border border-white text-white rounded-lg px-6 py-2 hover:bg-white hover:text-black transition hero-button">Enter</button>
        </a>
        <img
          src={DogImage}
          alt="Dog"
          className="hero-image"
        />
      </div>
    </main>
  );
};

export default Hero;
