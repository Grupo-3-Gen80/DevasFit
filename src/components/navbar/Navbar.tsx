function Navbar() {
    return (
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
  
  
          <span className="text-[#9395D3] font-bold text-3xl font-serif">
            Devas Fit
          </span>
  
          <ul className="hidden md:flex space-x-10 text-gray-800 font-medium text-lg">
            <li><a href="#inicio" className="hover:text-[#C58BAA] transition">Início</a></li>
            <li><a href="#contato" className="hover:text-[#C58BAA] transition">Contato</a></li>
          </ul>
          
        </nav>
      </header>
    );
  }
  
  export default Navbar;