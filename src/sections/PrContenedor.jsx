
import { CiLaptop} from "react-icons/ci";
import '../style/proyects.css'
import Portflolio from '../images/Proyects/Portflolio.jpeg'
import WikiWatch from '../images/Proyects/Wikiwatch.jpeg'

import { SectionContent } from "../components/utils";


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


