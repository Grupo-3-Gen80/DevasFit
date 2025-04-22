function Navbar() {
    return (
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center h-25">
  
  
          <span className="text-[#701a75] font-bold text-4xl font-serif">
            Devas Fit
          </span>
  
          <ul className="hidden md:flex space-x-10 text-gray-800 font-medium text-2xl">
            <li><a href="#inicio" className="hover:text-[#a6316c] transition">Início</a></li>
            <li><a href="#contato" className="hover:text-[#a6316c] transition">Contato</a></li>
          </ul>
          {/* rosa: #a6316c
roxo: #501466 */}
        </nav>
      </header>
    );
  }
  
  export default Navbar;