import Image from 'next/image';

export default function Header() {
  return (
    <header className=" ml-10px flex justify-between items-center p-4 bg-linear-gradient">
      <div>
        <Image src="/logo.svg"  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" alt="Your Logo" width={200} height={100} />
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li><a href="#" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Home</a></li>
          <li><a href="#" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Sobre</a></li>
          <li><a href="#" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Serviços</a></li>
          <li><a href="#" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Contato</a></li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">Menu</button>
      </div>
    </header>
  );
}
