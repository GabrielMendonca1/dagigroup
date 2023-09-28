"use client"
import React, { useState } from 'react';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-50">
      {/* Menu Button */}
      <button onClick={toggleMenu} aria-expanded={menuOpen} className="fixed top-2 right-4 z-40 ">
        {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
      </button>

      {/* Side Menu */}
      {menuOpen && (
        <div className=" pt-4 pr-4 fixed top-0 right-0 h-full w-64 bg-white dark:bg-black border-l dark:border-gray-700 shadow-lg overflow-y-auto transition-transform transform translate-x-0 z-30">
          <ul className="flex flex-col items-center justify-center h-full gap-12 p-4">
          <li><a href="#home" className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-2 py-1 rounded hover:bg-white hover:text-black">Home</a></li>
            <li><a href="#sobre" className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-2 py-1 rounded hover:bg-white hover:text-black">Sobre</a></li>
            <li><a href="#servicos" className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-2 py-1 rounded hover:bg-white hover:text-black">Serviços</a></li>
            <li><a href="#contato" className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-2 py-1 rounded hover:bg-white hover:text-black">Contato</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
