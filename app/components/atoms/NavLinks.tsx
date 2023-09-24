const NavLinks = () => {
  return(
    <nav className="hidden md:flex gap-8">
      <a href="#home" className="px-4 py-4 rounded-md hover:border-gray-300 hover:bg-gray-100">Home</a>
      <a href="#sobre" className="px-4 py-4 rounded-md hover:border-gray-300 hover:bg-gray-100">Sobre</a>
      <a href="#servicos" className="px-4 py-4 rounded-md hover:border-gray-300 hover:bg-gray-100">Serviços</a>
      <a href="#contato" className="px-4 py-4 rounded-md hover:border-gray-300 hover:bg-gray-100">Contato</a>
    </nav>
  );
};

export default NavLinks;
