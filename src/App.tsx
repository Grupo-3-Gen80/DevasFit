import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import FormUsuario from "./components/usuario/FormUsuario";
import Usuarios from "./pages/usuarios/Usuario";
import FormCategoria from "./components/categoria/FormCategoria";
import Categorias from "./pages/categorias/Categorias";
import FormularioTreino from "./pages/treinos/FormularioTreino";
import Treinos from "./pages/treinos/Treinos";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Usuários */}
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/formulario" element={<FormUsuario />} />
          <Route path="/usuarios/formulario/:id" element={<FormUsuario />} />

          {/* Categorias */}
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categorias/formulario" element={<FormCategoria />} />
          <Route path="/categorias/formulario/:id" element={<FormCategoria />} />

          {/* Treinos */}
          <Route path="/treinos" element={<Treinos />} />
          <Route path="/treinos/formulario" element={<FormularioTreino />} />
          <Route path="/treinos/formulario/:id" element={<FormularioTreino />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;