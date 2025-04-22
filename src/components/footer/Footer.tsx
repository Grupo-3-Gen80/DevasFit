
function Footer() {
  return (
    <footer className="bg-[#501466] text-gray-300 mt-16 py-12 px-6 text-center flex flex-col items-center gap-6">
      <div>
        <p className="text-base md:text-lg font-medium text-white">
          © {new Date().getFullYear()} <strong>Devas Fit</strong>.<br/> Todos os direitos reservados.
        </p>
        <p className="mt-1 text-base">Desenvolvido com ❤ para cuidar de você.</p>
      </div>

      <div className="flex flex-col items-center gap-2">
      <a
    href="https://ln.ki/devas" 
    target="_blank" // abrir em nova aba
    rel="noopener noreferrer" // segurança para links externos
      >
          <img
          src="./src/assets/qrcode.jpg"
          alt="QR Code Devas Fit"
          className="w-36 h-36 md:w-44 md:h-44 rounded-xl border-4 border-[#9395D3] shadow-lg hover:scale-105 transition-transform duration-300"
        />
        </a>
        
        <p className="text-sm md:text-base italic text-gray-300">
          Clique ou aponte sua câmera para conhecer o Devas Fit
        </p>
      </div>
    </footer>
  );
}

export default Footer;

