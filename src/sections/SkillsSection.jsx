import webDeveloper from "../images/Data Arranging_Flatline.svg";
import { CiStar} from "react-icons/ci";
import { SectionContent,Item } from "../components/utils";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaGit } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiMysql } from "react-icons/si";
import { IconContext } from "react-icons";
import "../style/skills.css";


/*
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
    */

export function SkillsSection(){
    return(
        <SectionContent
        
            img={webDeveloper}
            title="Habilidades"
            icon={<CiStar className="icon" />}

        >
            <section className="skillsContainer">
            <IconContext.Provider value={{ className: "icon" }}>
                <Item icon={<FaHtml5 />}>
                    Dibujar 
                </Item>
                <Item icon={<FaCss3Alt />}>
                    Dibujar 
                </Item>
                <Item icon={<FaReact />}>
                    Dibujar 
                </Item>
                <Item icon={<FaBootstrap />}>
                    Dibujar 
                </Item>
                <Item icon={<FaNodeJs />}>
                    Dibujar 
                </Item>
                <Item icon={<FaPhp />}>
                    Dibujar 
                </Item>
                <Item icon={<FaGit />}>
                    Dibujar 
                </Item>
                <Item icon={<SiJavascript />}>
                    Dibujar 
                </Item>
                <Item icon={<SiTypescript />}>
                    Dibujar 
                </Item>
                <Item icon={<SiNextdotjs />}>
                    Dibujar 
                </Item>
                <Item icon={<SiMysql />}>
                    Dibujar 
                </Item>
            </IconContext.Provider>
        </section>
        </SectionContent>
    )
}