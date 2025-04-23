import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#701a75] shadow-lg py-4 px-6 flex justify-between items-center">
      <h1 className="text-[#f25278] font-bold text-xl">Devas Fit</h1>
      <ul className="flex gap-6 text-white font-semibold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/treinos">Treinos</Link></li>
        <li><Link to="/categorias">Categorias</Link></li>
        <li><Link to="/usuarios">Usuários</Link></li>
        <li><Link to="/resumo-treinos"> Resumo de Treinos</Link></li>
      </ul>
    </nav>
  );
}

