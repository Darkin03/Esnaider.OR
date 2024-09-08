import { createContext, useContext, useEffect,  useState } from "react";
import "../style/header.css";
import { CiPhone, CiLaptop, CiMedal, CiUser} from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import webDeveloper from "../images/Web Developer_Flatline.svg";
import { LinkApp, NavLink, NavWeb } from "./Enlace";
import {
  CiLinkedin,
  CiServer,
} from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const UserAside = createContext(null)
const UserAsideFunction = createContext(null)

export function Header() {

  const [shotAside,setShotAside] = useState(false)
  const [showAside,setShowAside] = useState(false)
  const handleClick= () =>{
    setShowAside(!showAside)
  }

  useEffect(()=>{
    const sizeWindow = ()=>{
      const width = window.innerWidth
      setShotAside(width < 806)
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
        { (showAside) &&
          <UserAside.Provider value={UserAsideFunction}>
            <UserAsideFunction.Provider value={handleClick}>
              <Aside/>
            </UserAsideFunction.Provider>  
          </UserAside.Provider>
      }
      
      </section>
    )
  }

  return (
    <section>
    <header className="header">
      <NavLink>
      
        <LinkApp link="/Esnaider.OR/">
          <CiUser/> SobreMi
        </LinkApp>

        <LinkApp link="/habilidades">
          <CiMedal/> Habilidades
        </LinkApp>

        <LinkApp link="/proyectos">
          <CiLaptop/> Proyectos
        </LinkApp>

        <LinkApp link="/contactos"  >
                <CiPhone  /> Contactos
              </LinkApp>
      </NavLink>
    </header>
    </section>
  );
}


function Aside(){
  const [activeAside] = useState(useContext(UserAside))
  const handleClick = useContext(UserAsideFunction)
  const c = useContext(UserAside)
  return(
    <aside id="headerAside" className= {activeAside? 'activeAside': 'inactiveAside'}>
    <section className="content">
        <header className="header">
            <button className="button" onClick={handleClick}>
                <FaBars className="icon" />
            </button>
            <h3 className="logo">Esnaider.<span>OR</span></h3>
        </header>
        <ul className="list">
            <li className="item" onClick={handleClick} >
              <LinkApp link="/Esnaider.OR/" >
                <CiUser/> Sobre mi
              </LinkApp>
            </li>

            <li className="item" onClick={handleClick}>
              <LinkApp link="/habilidades">
                <CiMedal/> Habilidades
              </LinkApp>

            </li>

            <li className="item" onClick={handleClick}>
              <LinkApp link="/proyectos" >
                <CiLaptop/> Proyectos
              </LinkApp>
            </li>

            <li className="item" onClick={handleClick}>
              <LinkApp link="/contactos" >
                <CiPhone  /> Contactos
              </LinkApp>
            </li>
            
            
        </ul>

        <div className="pintureContainer">
          <img className="pinture" src={webDeveloper} />
          <p className="rol">Frontend - Developer</p>
        </div>

        <footer className="footer">
          <div className="content">
          <NavLink fontsize={'40px'}>

            <NavWeb link="https://www.linkedin.com/in/esnaideror/">
              <CiLinkedin />
            </NavWeb>

            <NavWeb link="https://github.com/Darkin03">
             <FaGithub />
            </NavWeb>
  
            <NavWeb link="https://github.com/Darkin03/Esnaider.OR">
             <CiServer />
            </NavWeb>
  
          </NavLink>
          </div>
        </footer>
        
    </section>
   
</aside>

  )
}