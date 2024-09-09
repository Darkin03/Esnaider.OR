import { SectionContent,Item } from "./ComponentUtils";
import { CiLaptop} from "react-icons/ci";
import Portflolio from '../images/Proyects/Portflolio.jpeg'
import WikiWatch from '../images/Proyects/Wikiwatch.jpeg'
import '../style/proyects.css'

export function Proyects (){

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
                    <h3 className="title">WikiWatch</h3>
                    <p className="description">Wikipedia con la información de tus 
                    series y películas favoritas!</p>
                </div>
                </a>
        </section>
            
        </SectionContent>
        
 
        
    )
}


