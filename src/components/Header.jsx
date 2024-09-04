import { createContext, useContext, useEffect, useState } from "react";
import "../style/header.css";
import { CiPhone, CiLaptop, CiMedal, CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import webDeveloper from "../images/Web Developer_Flatline.svg";
import { LinkApp } from "./Enlace";

const UserAsideContext = createContext(null);
const UserAsideToggleContext = createContext(null);

export function Header() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleClick = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  useEffect(() => {
    const updateWindowSize = () => {
      const width = window.innerWidth;
      setIsAsideVisible(width < 760);
    };

    window.addEventListener('resize', updateWindowSize);
    updateWindowSize(); // Initialize on mount

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  if (isAsideVisible) {
    return (
      <section>
        <header className="header">
          <nav className="nav">
            <h3>Esnaider.<span>OR</span></h3>
            <button className="button" onClick={handleClick}>
              <FaBars className="icon" />
            </button>
          </nav>
        </header>
        {isAsideOpen && (
          <UserAsideContext.Provider value={isAsideOpen}>
            <UserAsideToggleContext.Provider value={handleClick}>
              <Aside />
            </UserAsideToggleContext.Provider>
          </UserAsideContext.Provider>
        )}
      </section>
    );
  }

  return (
    <section>
      <header className="header">
        <nav className="nav">
          <LinkApp link="/Esnaider.OR/">
            <CiUser /> SobreMi
          </LinkApp>

          <LinkApp link="/habilidades">
            <CiMedal /> Habilidades
          </LinkApp>

          <LinkApp link="/proyectos">
            <CiLaptop /> Proyectos
          </LinkApp>

          <LinkApp link="/contactos">
            <CiPhone /> Contactos
          </LinkApp>
        </nav>
      </header>
    </section>
  );
}

function Aside() {
  const isAsideOpen = useContext(UserAsideContext);
  const handleClick = useContext(UserAsideToggleContext);

  return (
    <aside id="headerAside" className={isAsideOpen ? 'activeAside' : 'inactiveAside'}>
      <section className="content">
        <header className="header">
          <button className="button" onClick={handleClick}>
            <FaBars className="icon" />
          </button>
          <h3 className="logo">Esnaider.<span>OR</span></h3>
        </header>
        <ul className="list">
          <li className="item" onClick={handleClick}>
            <LinkApp link="/Esnaider.OR/">
              <CiUser /> Sobre mi
            </LinkApp>
          </li>

          <li className="item"  onClick={handleClick}>
            <LinkApp link="/habilidades" >
              <CiMedal /> Habilidades
            </LinkApp>
          </li>

          <li className="item" onClick={handleClick}>
            <LinkApp link="/proyectos">
              <CiLaptop /> Proyectos
            </LinkApp>
          </li>

          <li className="item" onClick={handleClick}>
            <LinkApp link="/contactos" >
              <CiPhone /> Contactos
            </LinkApp>
          </li>
        </ul>

        <div className="pictureContainer">
          <img className="picture" src={webDeveloper} alt="Web Developer" />
        </div>
      </section>
    </aside>
  );
}