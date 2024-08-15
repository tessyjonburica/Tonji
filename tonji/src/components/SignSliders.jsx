import React from 'react';
import { motion } from 'framer-motion';

// Import images
import TriangleArt from '../assets/iframe/Triangle ART.png';
import Group28 from '../assets/iframe/Group 28.png';
import Group31 from '../assets/iframe/Group 31.png';
import Group30 from '../assets/iframe/Group 30.png';
import Group29 from '../assets/iframe/Group 29.png';

const imagePaths = [
  TriangleArt,
  Group28,
  Group31,
  Group28,
  Group30,
  TriangleArt,
  Group29,
  Group28,
  // Add more PNG imports here if needed...
];

const SignSliders = () => {
  const imageWidth = 100; // Width of each image
  const spacing = 20; // Space between images
  const totalWidth = (imageWidth + spacing) * imagePaths.length;

  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
      <motion.div
        style={{ display: 'flex' }}
        animate={{ x: [-totalWidth, 0] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 15, // Adjust duration to control the speed
        }}
      >
        {imagePaths.map((src, index) => (
          <div key={index} style={{ marginRight: spacing }}>
            <img src={src} alt={`PNG ${index + 1}`} style={{ width: imageWidth, height: 'auto' }} />
          </div>
        ))}
        {imagePaths.map((src, index) => (
          <div key={index + imagePaths.length} style={{ marginRight: spacing }}>
            <img src={src} alt={`PNG ${index + 1}`} style={{ width: imageWidth, height: 'auto' }} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SignSliders;
