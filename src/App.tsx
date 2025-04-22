
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Usuarios from "./pages/usuarios/Usuario";
import Categorias from "./pages/categorias/Categorias";
import Treinos from "./pages/treinos/Treinos";
import FormularioTreino from "./pages/treinos/FormularioTreino";
import FormCategoria from "./components/categoria/FormCategoria";
import FormUsuario from "./components/usuario/FormUsuario";
import Home from "./pages/home/Home";


function App(){
    return (
        <BrowserRouter>
          <Navbar />
          <main className="min-h-screen bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/treinos" element={<Treinos />} />
              <Route path="/treinos/formulario" element={<FormularioTreino />} />
              <Route path="/treinos/formulario/:id" element={<FormularioTreino />} />
              <Route path="/categorias/formulario/:id" element={<FormCategoria />} />
<Route path="/usuarios/formulario/:id" element={<FormUsuario />} />

            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      );
    }
    
    export default App;
    