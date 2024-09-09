
import { AboutMe } from "./components/AboutMe";
import { Contacts } from "./components/Contacts";
import { Header} from "./components/Header";
import {  Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer"; 
import { Up } from "./components/Up";
import { Skills } from "./components/Skills";
import { Proyects } from "./components/Proyects";
import "./style/style.css";

function App() {
  return (
    <section className="app">
      <Header/>
      <section >
        <Routes>
          <Route path="/Esnaider.OR/"element={<AboutMe />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/proyectos" element={<Proyects />} />
          <Route path="/contactos" element={<Contacts />} />
        </Routes>
      </section>
      <Footer/>
      <Up/>
    </section>
  );
}

export default App;