//importando los componentes de navegacion
import { InfoSobreMi } from "./sections/InfoP";
import { Hbcontenedor } from "./sections/HbContendor";
import { Prcontenedor } from "./sections/PrContenedor";
import { Contactos } from "./sections/Contactos";

//importando los iconos a utilizar
import {
  CiHeart,
  CiPhone,
  CiLaptop,
  CiMedal,
  CiUser,
  CiLinkedin,
  CiServer,
} from "react-icons/ci";
//importando los imagenes a utilizar
import webDeveloper from "./images/Web Developer_Flatline.svg";

//importando materiales de react
import { Link, Route, Routes } from "react-router-dom";

function App2() {
  return (
    <>
      <header>
        <div className="inicioFrase">
          <p className="fraseSaludo">" Hola, me llamo Esnaider "</p>
          <CiHeart className="corazon" id="corazon1" />
          <p className="saludoExtension">Frontend-Developer</p>
        </div>

        <hr className="separacion"></hr>

        <nav className="navegador">
          <Link to="/" className="navegador-enlace">
            <CiUser /> SobreMi
          </Link>

          <Link to="/habilidades" className="navegador-enlace">
            <CiMedal /> Habilidades
          </Link>

          <Link to="/proyectos" className="navegador-enlace">
            <CiLaptop /> Proyectos
          </Link>

          <Link to="/contactos" className="navegador-enlace">
            <CiPhone /> Contactos
          </Link>
        </nav>

        <section>
          <div className="inicioImagen">
            <img className="inicioImagen-foto" src={webDeveloper} />
            <p className="inicioImagen-saludo">
              " Bienvenido<br></br>
              Espero encuentres lo que necesitas "<br></br>
              <CiHeart className="corazon" id="corazon2" />
            </p>
          </div>

          <div className="atajos">
            <Link className="atajos-link">
              <CiLinkedin />{" "}
            </Link>
            <Link className="atajos-link">
              <CiServer />
            </Link>
          </div>
          <div className="contenedorWape">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L8.9,106.7C17.8,149,36,235,53,229.3C71.1,224,89,128,107,96C124.4,64,142,96,160,117.3C177.8,139,196,149,213,165.3C231.1,181,249,203,267,224C284.4,245,302,267,320,250.7C337.8,235,356,181,373,149.3C391.1,117,409,107,427,117.3C444.4,128,462,160,480,197.3C497.8,235,516,277,533,277.3C551.1,277,569,235,587,234.7C604.4,235,622,277,640,266.7C657.8,256,676,192,693,144C711.1,96,729,64,747,80C764.4,96,782,160,800,186.7C817.8,213,836,203,853,170.7C871.1,139,889,85,907,64C924.4,43,942,53,960,85.3C977.8,117,996,171,1013,213.3C1031.1,256,1049,288,1067,261.3C1084.4,235,1102,149,1120,133.3C1137.8,117,1156,171,1173,192C1191.1,213,1209,203,1227,186.7C1244.4,171,1262,149,1280,170.7C1297.8,192,1316,256,1333,245.3C1351.1,235,1369,149,1387,122.7C1404.4,96,1422,128,1431,144L1440,160L1440,0L1431.1,0C1422.2,0,1404,0,1387,0C1368.9,0,1351,0,1333,0C1315.6,0,1298,0,1280,0C1262.2,0,1244,0,1227,0C1208.9,0,1191,0,1173,0C1155.6,0,1138,0,1120,0C1102.2,0,1084,0,1067,0C1048.9,0,1031,0,1013,0C995.6,0,978,0,960,0C942.2,0,924,0,907,0C888.9,0,871,0,853,0C835.6,0,818,0,800,0C782.2,0,764,0,747,0C728.9,0,711,0,693,0C675.6,0,658,0,640,0C622.2,0,604,0,587,0C568.9,0,551,0,533,0C515.6,0,498,0,480,0C462.2,0,444,0,427,0C408.9,0,391,0,373,0C355.6,0,338,0,320,0C302.2,0,284,0,267,0C248.9,0,231,0,213,0C195.6,0,178,0,160,0C142.2,0,124,0,107,0C88.9,0,71,0,53,0C35.6,0,18,0,9,0L0,0Z"
              ></path>
            </svg>
          </div>
        </section>
      </header>

      <section className="cuerpoContenedor">
        <Routes>
          <Route path="/" element={<InfoSobreMi />} />
          <Route path="/habilidades" element={<Hbcontenedor />} />
          <Route path="/proyectos" element={<Prcontenedor />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
        <div>
          <hr className="separacion" id="seperacion2"></hr>
          <div className="logo">
            <h1>
              Esnaider.<span>OR</span>
            </h1>
          </div>

          <div className="gitPortafolio">
            <p>Si te gusta mi portafolio puedes usar el codigo de este </p>
            <a href="https://github.com/snaider10/Portafolio.git">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App2;
