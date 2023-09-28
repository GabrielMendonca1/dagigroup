const NavLinks = () => {
  return(
    <nav className="hidden md:flex gap-8">
      <a href="#home" className="px-3 py-3 rounded-md hover:border-gray-300 hover:bg-gray-200">Home</a>
      <a href="#sobre" className="px-3 py-3 rounded-md hover:border-gray-300 hover:bg-gray-200">Sobre</a>
      <a href="#servicos" className="px-3 py-3 rounded-md hover:border-gray-300 hover:bg-gray-200">Serviços</a>
      <a href="#contato" className="px-3 py-3 rounded-md hover:border-gray-300 hover:bg-gray-200">Contato</a>
    </nav>
  );
};

export default NavLinks;
