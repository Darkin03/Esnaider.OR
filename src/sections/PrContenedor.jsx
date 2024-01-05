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