//importando los componentes de navegacion
import { AboutMe } from "./components/AboutMe";
import { SkillsSection } from "./sections/SkillsSection";
import { Prcontenedor } from "./sections/PrContenedor";
import { Contactos } from "./sections/Contactos";
import { Header} from "./components/Header";
import {  Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";



function App() {
  return (
    <>
      
      <Header/>

      <section >
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/habilidades" element={<SkillsSection />} />
          <Route path="/proyectos" element={<Prcontenedor />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
       
      </section>

      <Footer/>
     
    </>
  );
}

export default App;