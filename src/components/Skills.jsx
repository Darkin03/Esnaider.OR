import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaGit } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiMysql } from "react-icons/si";
import "../style/skills.css"
import { useState } from "react";

export function Skills() {
    const [skills, setSkills] = useState({
        html: false,
        css: false,
        javaScript: false,
        typeScript:false,
        react: false,
        nextJs: false,
        bootstrap: false,
        nodeJs: false,
        php:false,
        sql: false,
        git: false,
    });

    const mouseOver = (skill) => {
        setSkills((prev) => ({ ...prev, [skill]: true }));
    };

    const mouseOut = (skill) => {
        setSkills((prev) => ({ ...prev, [skill]: false }));
    };

    return (
        <section className="skillsContainer">
            <div className="skill" onMouseOver={() => mouseOver("html")} onMouseOut={() => mouseOut("html")}>
                <FaHtml5  id="icon" className={skills.html ? "activeIcon" : "icon"} /> Html
            </div>
            <div className="skill" onMouseOver={() => mouseOver("css")} onMouseOut={() => mouseOut("css")}>
                <FaCss3Alt id="icon" className={skills.css ? "activeIcon" : "icon"} /> Css
            </div>
            <div className="skill" onMouseOver={() => mouseOver("javaScript")} onMouseOut={() => mouseOut("javaScript")}>
                <SiJavascript id="icon" className={skills.javaScript ? "activeIcon" : "icon"} /> JavaScript
            </div>
            <div className="skill" onMouseOver={() => mouseOver("typeScript")} onMouseOut={() => mouseOut("typeScript")}>
                <SiTypescript id="icon" className={skills.typeScript ? "activeIcon" : "icon"} /> TypeScript
            </div>
            <div className="skill" onMouseOver={() => mouseOver("react")} onMouseOut={() => mouseOut("react")}>
                <FaReact id="icon" className={skills.react ? "activeIcon" : "icon"} /> React
            </div>
            <div className="skill" onMouseOver={() => mouseOver("nextJs")} onMouseOut={() => mouseOut("nextJs")}>
                <SiNextdotjs id="icon" className={skills.nextJs? "activeIcon" : "icon"} /> Next
            </div>
            <div className="skill" onMouseOver={() => mouseOver("bootstrap")} onMouseOut={() => mouseOut("bootstrap")}>
                <FaBootstrap id="icon" className={skills.bootstrap ? "activeIcon" : "icon"} /> Boostrap
            </div>
            <div className="skill" onMouseOver={() => mouseOver("nodeJs")} onMouseOut={() => mouseOut("nodeJs")}>
                <FaNodeJs id="icon" className={skills.nodeJs ? "activeIcon" : "icon"} /> NodeJs
            </div>
            <div className="skill" onMouseOver={() => mouseOver("php")} onMouseOut={() => mouseOut("php")}>
                <FaPhp id="icon" className={skills.php ? "activeIcon" : "icon"} /> Php
            </div>
            <div className="skill" onMouseOver={() => mouseOver("sql")} onMouseOut={() => mouseOut("sql")}>
                <SiMysql id="icon" className={skills.sql ? "activeIcon" : "icon"} /> Sql
            </div>
            <div className="skill" onMouseOver={() => mouseOver("git")} onMouseOut={() => mouseOut("git")}>
                <FaGit id="icon" className={skills.git ? "activeIcon" : "icon"} /> Git
            </div>
        </section>
    );
}

