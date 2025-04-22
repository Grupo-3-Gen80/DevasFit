

function Footer() {
  return (
    <footer className="bg-[#F8F1EC] text-gray-800 mt-16 py-12 px-6 text-center flex flex-col items-center gap-6">
      <div>
        <p className="text-base md:text-lg font-medium">
          © {new Date().getFullYear()} <strong>Devas Fit</strong>. Todos os direitos reservados.
        </p>
        <p className="mt-1 text-base">Desenvolvido com ❤ para cuidar de você.</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <img
          src="./src/assets/qrcode.jpg"
          alt="QR Code Devas Fit"
          className="w-36 h-36 md:w-44 md:h-44 rounded-xl border-4 border-[#9395D3] shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <p className="text-sm md:text-base italic text-gray-700">
          Aponte sua câmera para conhecer o Devas Fit
        </p>
      </div>
    </footer>
  );
}

export default Footer;