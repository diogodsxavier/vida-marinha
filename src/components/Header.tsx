function Header() {
  return (
    <header className="p-6 bg-primaryBlue text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-vibrantYellow">Vida Marinha</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-secondaryBlue hover:underline">
                Sobre
              </a>
            </li>
            <li>
              <a href="#services" className="text-secondaryBlue hover:underline">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contact" className="text-secondaryBlue hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;