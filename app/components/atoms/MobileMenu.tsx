"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface MenuState {
  menuOpen: boolean;
}

const MobileMenu = () => {
  const [menuState, setMenuState] = useState<MenuState>({ menuOpen: false });

  const toggleMenu = () => {
    setMenuState({ menuOpen: !menuState.menuOpen });
  };

  return (
    <div className="md:hidden pb-4 relative z-30">
      <div className={`group rounded-lg px-5 py-4 ${menuState.menuOpen ? 'w-[80%] h-[50%] max-w-[400px] max-h-[300px] fixed top-0 right-0 bg-white dark:bg-black border dark:border-gray-700 shadow-md' : 'max-w-full max-h-full'}`}>
        <button onClick={toggleMenu} aria-expanded={menuState.menuOpen} className="absolute top-4 right-4">
          {menuState.menuOpen ? <Image src="/close.svg" alt="Fechar" width={40} height={40} className="w-[40px] h-[auto]" /> : <Image src="/open.svg" alt="Abrir" width={20} height={20} className="w-[20px] h-auto"/>}
        </button>
        {menuState.menuOpen && (
          <ul className="flex flex-col items-center justify-center h-full gap-6 p-4 overflow-y-auto">
            <li><a href="#home" className="text-lg px-2 py-1 rounded hover:bg-white hover:text-black">Home</a></li>
            <li><a href="#sobre" className="text-lg px-2 py-1 rounded hover:bg-white hover:text-black">Sobre</a></li>
            <li><a href="#servicos" className="text-lg px-2 py-1 rounded hover:bg-white hover:text-black">Serviços</a></li>
            <li><a href="#contato" className="text-lg px-2 py-1 rounded hover:bg-white hover:text-black">Contato</a></li>
          </ul>
        )} 
      </div>
    </div>
  );
};

export default MobileMenu;
