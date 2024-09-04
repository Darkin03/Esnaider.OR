import { useEffect,  useState } from "react";
import "../style/header.css";
import { CiPhone, CiLaptop, CiMedal, CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import webDeveloper from "../images/Web Developer_Flatline.svg";
import { LinkApp } from "./Enlace";

export function Header() {


  const [shotAside,setShotAside] = useState(false)
  const [showAside,setShowAside] = useState(false)
  const handleClick= () =>{
    setShowAside(!showAside)
  }

  useEffect(()=>{
    const sizeWindow = ()=>{
      const width = window.innerWidth
      setShotAside(width < 720)
    } 
    window.addEventListener('resize',sizeWindow)
    return ()=> window.removeEventListener('resize',sizeWindow)
  },[])

  if(shotAside){
    return(
      <section>
      <header className="header">
        <nav className="nav">
        <h3>Esnaider.<span>OR</span></h3>
        <button className="button" onClick={handleClick}>
          <FaBars className="icon" />
        </button>
        </nav>
      </header>
      { (showAside) && <Aside/> }
      
      </section>
    )
  }

  return (
    <section>
    <header className="header">
      <nav className="nav">
      
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
      </nav>
    </header>
    </section>
  );
}


function Aside(){
  return(
          <></>
  )
}