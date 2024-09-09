
import { useState } from "react";
import { CiInstagram, CiLinkedin, CiPhone, CiTwitter } from "react-icons/ci";
import webDeveloper from "../images/Calling_Flatline.svg";
import '../style/contacts.css'
import { NavLink } from "../components/Enlace";

export const SectionContent = ({img, title, text, icon, children}) => {
    const [active, setActive] = useState(false);
    const handleMouseOver = () => {
        setActive(true);
    };
    const handleMouseOut = () => {
        setActive(false);
    };
    return (
        <div className="container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className={active ? "activeContent" : ""} id='content'>
                <div className='into'>
                    {img && (
                        <div className='pintureContainer'>
                            <img className="pinture" src={img} />
                        </div>
                    )}
                    <div className="titleContainer">
                        <h1 className='title'>{title}</h1>
                        
                        {icon}
                        
                    </div>
                </div>
                <p>{text}</p>
                {children}
            </div>
        </div>
    );
}
  
  export const Item = ({icon,children})=>{
    const [active,setActive] = useState(false);
    const handleMouseOver = ()=>{
      setActive(true);
    }
    const handleMouseOut = ()=>{
      setActive(false);
    }
    return(
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className= {active? 'active':''}>
        <div className="item">
          {icon}{children}
        </div>
      </div>
    )
  }

export function Contacts (){
  return (
    <SectionContent
      img={webDeveloper}
      title="Contactos"
      icon={<CiPhone  className="icon"/>}
    >

      <NavLink fontsize={'75px'} color={'red'} > 
        <Item>
          <a  target="_blank" href="https://www.linkedin.com/in/esnaideror/"><CiLinkedin className="icon"/></a>
        </Item>

        <Item>
          <a  target="_blank" href="https://www.instagram.com/esnaider.or/"><CiInstagram className="icon"/></a>
        </Item>

        <Item>
          <a  target="_blank" href="https://twitter.com/SnaiderOrtega10"><CiTwitter className="icon"/></a>
        </Item>
      </NavLink>
    </SectionContent>
  );
};
