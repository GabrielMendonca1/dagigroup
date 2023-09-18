import Image from 'next/image';
import MobileMenu from '../atoms/MobileMenu';

export default function Header() {
  return (
    <header className="bg-white dark:bg-black sticky top-0 z-20 flex justify-between items-center p-4">
      <div>
        <Image src="/logo.svg"  className="relative" alt="Your Logo" width={50} height={50} />
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li><a href="#home" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Home</a></li>
          <li><a href="#sobre" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Sobre</a></li>
          <li><a href="#" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Serviços</a></li>
          <li><a href="#" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Contato</a></li>
        </ul>
      </nav>
      
      <MobileMenu />
    
    </header>
  );
}
