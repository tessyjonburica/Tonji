import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-center space-x-4 py-4 text-white font-bold border-2 border-red-600"  style={{ backgroundColor: '#1d1c18' }}>
      <a href="#">DexTools</a>
      <a href="#">Telegram</a>
      <span>X</span>
      <a href="#">Merch</a>
      <a href="#">Tamagotchi</a>
    </header>
  );
};

export default Header;
