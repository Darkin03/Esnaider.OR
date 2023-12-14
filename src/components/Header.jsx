import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";
import {
    CiPhone,
    CiLaptop,
    CiMedal,
    CiUser,
  } from "react-icons/ci";
  
export function Header (){

    const [over, setOver] = useState(false);

    const handleOver = () => {
        setOver(true);
    }

    const handleOverOut = () => {
        setOver(false)
    }
    return(
        <header className="header">
            <nav className="nav">
                <Link to="/" className="link" onMouseOver={handleOver} onMouseOut={handleOverOut}  >
                    <CiUser className={over ? "iconActive" : "iconInactive" }  /> SobreMi
                </Link>

                <Link to="/habilidades" className="link">
                    <CiMedal /> Habilidades
                </Link>

                <Link to="/proyectos" className="link">
                    <CiLaptop /> Proyectos
                </Link>

                <Link to="/contactos" className="link">
                    <CiPhone /> Contactos
                </Link>
        </nav>
        </header>
    )
}