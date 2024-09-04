import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";
import { CiPhone, CiLaptop, CiMedal, CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import webDeveloper from "../images/Web Developer_Flatline.svg";
import { LinkApp } from "./Enlace";


export function Header() {

  const [activeAside,setActiveAside] = useState(false)

  const handleClick = useCallback(()=>{
    setActiveAside(!activeAside)
  },[activeAside])

  return (
    <section>
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h3>Esnaider.<span>OR</span></h3>
        </div>

        <LinkApp link="/Esnaider.OR/">
          <CiUser/> SobreMi
        </LinkApp>

        <LinkApp link="/habilidades">
          <CiMedal/> Habilidades
        </LinkApp>

        <LinkApp link="/proyectos">
          <CiLaptop/> Proyectos
        </LinkApp>

        <LinkApp Link="/contactos">
          <CiPhone/> Contactos
        </LinkApp>

        <button className="button" onClick={handleClick}>
          <FaBars className="icon" />
        </button>
      </nav>
    </header>

    <aside id="headerAside" className= {activeAside? 'activeAside': 'inactiveAside'}>
           
           

            <section className="content">
                <header className="header">
                    <button className="button" onClick={handleClick}>
                        <FaBars className="icon" />
                    </button>
                    <h3 className="logo">Esnaider.<span>OR</span></h3>
                </header>
                <ul className="list">
                    <li className="item" >
                      <Link to="/Esnaider.OR/" className="link" onClick={handleClick}>
                        <CiUser className="icon" /> Sobre mi
                      </Link>
                    </li>

                    <li className="item">
                      <Link to="/habilidades" className="link" onClick={handleClick}>
                        <CiMedal className="icon" /> Habilidades
                      </Link>
                    </li>

                    <li className="item">
                      <Link to="/proyectos" className="link" onClick={handleClick}>
                        <CiLaptop className="icon" /> Proyectos
                      </Link>
                    </li>

                    <li className="item">
                      <Link to="/contactos" className="link" onClick={handleClick}>
                        <CiPhone className="icon" /> Contactos
                      </Link>
                    </li>
                    
                    
                </ul>

                <div className="pintureContainer">
                  <img className="pinture" src={webDeveloper} />
                </div>
                
            </section>
           
        </aside>

    </section>
  );
}
