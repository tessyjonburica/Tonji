import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#1d1c18] text-white font-Montserrat font-semibold relative">
      {/* Small screen hamburger button and large screen navbar */}
      <div className="flex justify-center items-center py-4 px-4">
        {/* Small screen hamburger button */}
        <button 
          className="text-2xl focus:outline-none z-50 text-white bg-black p-2 rounded-lg md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoCloseOutline /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Large screen navbar */}
      <nav className="hidden md:flex justify-center space-x-4">
        <a href="#" className="hover:underline text-white">DexTools</a>
        <a href="#" className="hover:underline text-white">Telegram</a>
        <a href="#" className="hover:underline text-white">Twitter</a>
        <a href="#" className="hover:underline text-white">Merch</a>
        <a href="#" className="hover:underline text-white">Tamagotchi</a>
      </nav>

      {/* Small screen full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#1d1c18] bg-opacity-90 flex flex-col justify-center items-center text-xl space-y-6 z-40">
          <a href="#" onClick={closeMenu} className="hover:underline text-white">DexTools</a>
          <a href="#" onClick={closeMenu} className="hover:underline text-white">Telegram</a>
          <span onClick={closeMenu} className="hover:underline text-white">Twitter</span>
          <a href="#" onClick={closeMenu} className="hover:underline text-white">Merch</a>
          <a href="#" onClick={closeMenu} className="hover:underline text-white">Tamagotchi</a>
        </div>
      )}
    </header>
  );
};

export default Header;
