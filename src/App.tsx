import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Usuarios from "./pages/usuarios/Usuario";
import Categorias from "./pages/categorias/Categorias";
import Treinos from "./pages/treinos/Treinos";


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
       
          
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      );
    }
    
    export default App;
    




