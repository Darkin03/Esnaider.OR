import { useState } from "react"
import { CiLaptop} from "react-icons/ci";
import '../style/proyects.css'
import { ProyectsList } from "../components/ProyectsList";

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
                    id="icon" className={active? 'activeIcon':'icon'}
                />
            </div>

            <ProyectsList/>
           

        </section>
        
 
        
    )
}