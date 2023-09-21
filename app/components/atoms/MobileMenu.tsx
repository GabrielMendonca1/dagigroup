"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const MobileMenu = () => {
  const [menuState, setMenuState] = useState({ menuOpen: false });

  const toggleMenu = () => {
    setMenuState({ menuOpen: !menuState.menuOpen });
  };

  return (
    <div className="block md:hidden relative z-30 pb-4">
      <div className={`group rounded-lg px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 ${menuState.menuOpen ? 'w-[80%] h-[50%] lg:w-[70%] lg:h-[45%] xl:w-[60%] xl:h-[40%] fixed top-0 right-0 bg-white dark:bg-black border dark:border-gray-700 shadow-md' : 'max-w-full max-h-full'}`}>
        <button onClick={toggleMenu} aria-expanded={menuState.menuOpen} className="absolute top-4 right-4">
          {menuState.menuOpen ? <Image src="/close.svg" alt="Fechar" width={20} height={20} /> : <Image src="/open.svg" alt="Abrir" width={20} height={20} />}
        </button>
        {menuState.menuOpen && (
          <ul className="flex flex-col items-center justify-center h-full gap-6 p-4 overflow-y-auto">
            <li><a href="#home" className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-2 py-1 rounded hover:bg-white hover:text-black">Home</a></li>
            <li><a href="#sobre" className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-2 py-1 rounded hover:bg-white hover:text-black">Sobre</a></li>
            <li><a href="#servicos" className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-2 py-1 rounded hover:bg-white hover:text-black">Serviços</a></li>
            <li><a href="#contato" className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-2 py-1 rounded hover:bg-white hover:text-black">Contato</a></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;

