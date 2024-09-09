import webDeveloper from "../images/Data Arranging_Flatline.svg";
import { CiStar} from "react-icons/ci";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaGit } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiMysql } from "react-icons/si";
import { IconContext } from "react-icons";
import "../style/skills.css";
import { Item, SectionContent } from "../components/utils";



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
                    Hmtl 
                </Item>
                <Item icon={<FaCss3Alt />}>
                    Css 
                </Item>

                <Item icon={<SiJavascript />}>
                    Javascript 
                </Item>
                <Item icon={<SiTypescript />}>
                    Typescript 
                </Item>

                <Item icon={<FaReact />}>
                    React 
                </Item>

                <Item icon={<SiNextdotjs />}>
                     Next 
                </Item>

                <Item icon={<FaNodeJs />}>
                    Dibujar 
                </Item>

                <Item icon={<FaBootstrap />}>
                    Bootstrap 
                </Item>
               
                <Item icon={<FaPhp />}>
                Php 
                </Item>
                <Item icon={<FaGit />}>
                Git  
                </Item>
               
                
                <Item icon={<SiMysql />}>
                Mysql 
                </Item>
            </IconContext.Provider>
        </section>
        </SectionContent>

        
    )
}