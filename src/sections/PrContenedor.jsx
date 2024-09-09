import React, {useState} from 'react';

import { CiLaptop} from "react-icons/ci";
import '../style/proyects.css'
import Portflolio from '../images/Proyects/Portflolio.jpeg'
import WikiWatch from '../images/Proyects/Wikiwatch.jpeg'


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

export function Prcontenedor (){

    return (
        
        <SectionContent
            title="Proyectos"
            icon={<CiLaptop className="icon" />}
        >
           <section className="proyects">
            <a href='https://github.com/Darkin03/Esnaider.OR' className="proyect">
                <div className="pintureContainer">
                    <img className="pinture" src={Portflolio}  />
                </div>
  
                <div className="content">
                    <h3 className="title">Portafolio</h3>
                    <p className="description">Encuentra y conoce todo sobre mi!</p>
                </div>
            </a>

            <a href='https://code-world-co.github.io/WikiWatch/' className="proyect">
                <div className="pintureContainer">
                    <img className="pinture" src={WikiWatch} />
                </div>

                <div className="content">
                    <h3 className="title">Portflolio</h3>
                    <p className="description">Wikipedia con la información de tus 
                    series y películas favoritas!</p>
                </div>
                </a>
        </section>
            
        </SectionContent>
        
 
        
    )
}


