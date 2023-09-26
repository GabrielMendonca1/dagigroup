const NavLinks = () => {
  return(
    <nav className="hidden md:flex gap-8">
      <a href="#home" className="px-4 py-4 rounded-md hover:border-gray-500 hover:bg-gray-400">Home</a>
      <a href="#sobre" className="px-4 py-4 rounded-md hover:border-gray-500 hover:bg-gray-400">Sobre</a>
      <a href="#servicos" className="px-4 py-4 rounded-md hover:border-gray-500 hover:bg-gray-400">Serviços</a>
      <a href="#contato" className="px-4 py-4 rounded-md hover:border-gray-500 hover:bg-gray-400">Contato</a>
    </nav>
  );
};

export default NavLinks;
