// import React from 'react';
// import DogImage from '../assets/dog.png'; // Ensure you have this image in the correct path


// const Hero = () => {
//   return (
//     <main
//       className="flex flex-col items-center justify-center text-white border-2 border-blue-600"
//       style={{ backgroundColor: '#1d1c18' }}
//     >
//       <h1 className="font-mooLahLah font-normal" style={{lineHeight: '476.2px', fontSize: '390.33px', letterSpacing: '7%'}}>Tonji</h1>
//       <img src={DogImage} alt="Dog" className="mb-4 transform scale-x-[-1]" style={{height: '559px', width: '537.36px', top: '496px', left:'487px'}}/>
//       <button className="px-6 py-2 bg-white text-black rounded" >Enter</button>
//     </main>
//   );
// };

// export default Hero;


// import React from 'react';
// import DogImage from '../assets/dog.png'; // Ensure you have this image in the correct path

// const Hero = () => {
//   return (
//     <main
//       className="flex flex-col items-center justify-center text-white border-2 border-blue-600 lg:flex-row lg:justify-start lg:space-x-6"
//       style={{ backgroundColor: '#1d1c18' }}
//     >
//       <h1
//         className="font-mooLahLah font-normal text-center"
//         style={{ 
//           lineHeight: '1.1em', 
//           fontSize: '100px', // Adjusted for small screens
//           letterSpacing: '7%' 
//         }}
//       >
//         Tonji
//       </h1>
//       <div className="relative flex flex-col items-center lg:flex-row lg:items-end">
//         <button
//           className="mt-6 lg:absolute lg:bottom-[190px] lg:right-[-140px]"
//           style={{
//             padding: '10px 50px',
//             backgroundColor: 'transparent',
//             border: '2px solid #fff',
//             color: '#fff',
//             borderRadius: '5px',
//           }}
//         >
//           Enter
//         </button>
//         <img
//           src={DogImage}
//           alt="Dog"
//           className="transform scale-x-[-1] mt-6 lg:mt-0"
//           style={{ 
//             height: '300px', // Adjusted for small screens
//             width: 'auto' // Keeps the aspect ratio
//           }}
//         />
//       </div>
//     </main>
//   );
// };

// export default Hero;


import React from 'react';
import '../index.css'
import DogImage from '../assets/dog.png'; // Ensure you have this image in the correct path

const Hero = () => {
  return (
    <main className="hero-container border-2 border-blue-500">
      <h1 className="font-mooLahLah font-normal hero-title text-center">Tonji</h1>
      <div className="hero-image-container">
        <img
          src={DogImage}
          alt="Dog"
          className="hero-image"
        />
        <button className="bg-transparent border border-white text-white rounded-lg px-6 py-2 hover:bg-white hover:text-black transition hero-button">Enter</button>
      </div>
    </main>
  );
};

export default Hero;
