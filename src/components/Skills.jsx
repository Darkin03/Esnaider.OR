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
                <FaHtml5 className={skills.html ? "activeIcon" : "icon"} /> Html
            </div>
            <div className="skill" onMouseOver={() => mouseOver("css")} onMouseOut={() => mouseOut("css")}>
                <FaCss3Alt className={skills.css ? "activeIcon" : "icon"} /> Css
            </div>
            <div className="skill" onMouseOver={() => mouseOver("javaScript")} onMouseOut={() => mouseOut("javaScript")}>
                <SiJavascript className={skills.javaScript ? "activeIcon" : "icon"} /> JavaScript
            </div>
            <div className="skill" onMouseOver={() => mouseOver("typeScript")} onMouseOut={() => mouseOut("typeScript")}>
                <SiTypescript className={skills.typeScript ? "activeIcon" : "icon"} /> TypeScript
            </div>
            <div className="skill" onMouseOver={() => mouseOver("react")} onMouseOut={() => mouseOut("react")}>
                <FaReact className={skills.react ? "activeIcon" : "icon"} /> React
            </div>
            <div className="skill" onMouseOver={() => mouseOver("nextJs")} onMouseOut={() => mouseOut("nextJs")}>
                <SiNextdotjs className={skills.nextJs? "activeIcon" : "icon"} /> Next
            </div>
            <div className="skill" onMouseOver={() => mouseOver("bootstrap")} onMouseOut={() => mouseOut("bootstrap")}>
                <FaBootstrap className={skills.bootstrap ? "activeIcon" : "icon"} /> Boostrap
            </div>
            <div className="skill" onMouseOver={() => mouseOver("nodeJs")} onMouseOut={() => mouseOut("nodeJs")}>
                <FaNodeJs className={skills.nodeJs ? "activeIcon" : "icon"} /> NodeJs
            </div>
            <div className="skill" onMouseOver={() => mouseOver("php")} onMouseOut={() => mouseOut("php")}>
                <FaPhp className={skills.php ? "activeIcon" : "icon"} /> Php
            </div>
            <div className="skill" onMouseOver={() => mouseOver("sql")} onMouseOut={() => mouseOut("sql")}>
                <SiMysql className={skills.sql ? "activeIcon" : "icon"} /> Sql
            </div>
            <div className="skill" onMouseOver={() => mouseOver("git")} onMouseOut={() => mouseOut("git")}>
                <FaGit className={skills.git ? "activeIcon" : "icon"} /> Git
            </div>
        </section>
    );
}

