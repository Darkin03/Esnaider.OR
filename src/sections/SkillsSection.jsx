import webDeveloper from "../images/Data Arranging_Flatline.svg";
import { CiStar} from "react-icons/ci";
import { useState} from "react";
import { Skills } from "../components/Skills";
export const SkillsSection = () =>{
    const [active, setActive] = useState(false);
    const mouseOver = () => {
      setActive(true);
    };
    const mouseOut = () => {
      setActive(false);
    };

    return(
        
        <section className ="skills" onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <div className="into">

                <div className="pintureContainer">
                    <img className="pinture"  src={webDeveloper}/>
                </div>
            
                <div className="container">
                
                    <div className="titleContainer">
                        <h1 className={active ? "activeTitle" : "title"}>Habilidades</h1>    
                        <CiStar id="icon" className={ active ? "activeIcon" : "inactiveIcon"}/>
                    </div>    
                
                </div>
            </div>
            
            <Skills/>
        </section>
    )
}