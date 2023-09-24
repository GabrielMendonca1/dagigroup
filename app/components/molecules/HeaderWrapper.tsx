"use client"
import { useState, useEffect } from 'react';
import Logo from '../atoms/Logo';
import NavLinks from '../atoms/NavLinks';
import MobileMenu from '../atoms/MobileMenu';
//header wrapper
export default function HeaderWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClass = isScrolled ? 'bg-white' : 'bg-transparent';

  return (
    <header className={`fixed top-0 z-50 flex items-center justify-between w-full p-6 transition-all ${headerClass}`}>
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="hidden md:flex">
        <NavLinks />
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
