import webDeveloper from "../images/Data Arranging_Flatline.svg";
import { CiStar} from "react-icons/ci";
import { useState} from "react";
import { Skills } from "../components/Skills";
export const Hbcontenedor = () =>{
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
                <img className="pinture"  src={webDeveloper}/>
            
                <div className="titleContainer">
                    <div className="title">
                        <h1 className={active ? "activeTitle" : ""}>Habilidades</h1>    
                        <CiStar id="icon" className={ active ? "activeIcon" : "inactiveIcon"}/>
                    </div>    
                </div>
            </div>
            
            <Skills/>
        </section>
    )
}