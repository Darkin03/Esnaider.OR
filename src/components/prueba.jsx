//array con objetos de los proyectos que he realizaco hasta el momento
export const proyects = [
  {   
      'id':1,
      'pinture':'../images/Portflolio.jpeg',
      'name':'Portafolio',
      'description':'Portafolio donde esta toda la informacion de mi',
      'link':'https://github.com/Darkin03/Esnaider.OR'
  },

  {   'id':2,
      'pinture':'../images/Wikiwatch.jpeg',
      'name':'MusicTic',
      'description':'Aplicacion De musica',
      'link':'https://code-world-co.github.io/WikiWatch/'
  }
];

import { useState } from "react"
import { proyects } from "../data/proyectos"
import { ProyectoCarta } from "../components/ProyectoCarta";
import { CiLaptop} from "react-icons/ci";
import '../style/proyects.css'

export const Prcontenedor = () =>{

    const [active,setActive] = useState(false)
    const onMouseOver  = () =>{
        setActive(true)
    }
    const onMouseOut  = () => {
        setActive(false)
    }

    return (
        
        <section className="container proyectsSection" onMouseOver={onMouseOver}    onMouseOut={onMouseOut}>
            <div className="titleContainer">
                <h1  className={active? 'activeTitle':'title'}>Proyectos</h1>
                <CiLaptop 
                    className={active? 'activeIcon':'icon'}
                />
            </div>

            <div className="proyects">
                {
                proyects.map((proyect)=>(
                    <ProyectoCarta
                        key={proyect.id}
                        pinture={proyect.pinture}
                        name={proyect.name}
                        description={proyect.description}
                        link={proyect.link}
                     ></ProyectoCarta>
                             ))
                }
            </div>
           

        </section>
        
 
        
    )
}


export const ProyectoCarta = (props) =>{
  return(
      <a href={props.link} className="proyect">
          <div className="pintureContainer">
              <img className="pinture" src= {props.pinture}></img>
          </div>
          
          <div className="content">
              <h3 className="title">{props.name}</h3>
              <p className="description">{props.description}</p>
          </div>
          
      </a>

  )
}