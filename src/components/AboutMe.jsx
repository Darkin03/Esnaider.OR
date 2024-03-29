import data_file from "../images/Personal data _Flatline.svg";
import webDeveloper from "../images/Web Developer_Flatline.svg";
import "../style/aboutMe.css";
import { jobs } from "../data/jobs";
import {
  CiHeadphones,
  CiPen,
  CiPenpot,
  CiTimer,
  CiPizza,
  CiGlass,
  CiHeart,
  CiUser,
  CiLinkedin,
  CiServer,
} from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { MdWorkOutline } from "react-icons/md";

const Into = () => {
  return (
    <section className="intoAbout">



      <div className="into">
        <div className="pintureContainer">
          <img className="pinture" src={webDeveloper} />
        </div>
        <div className="text">
          <p className="hello">Hola! soy <span>Esnaider</span></p>
          <p className="rol">Frontend - Developer</p>
          <p className="welcome">
            " Espero encuentres lo que necesitas "
            <CiHeart className="heart"/>
          </p>
        </div>
      </div>

      <div className="navLink">
          
          <a className="link" target="_blank"  href="https://www.linkedin.com/in/esnaideror/">
          <CiLinkedin />
          </a>
          
          <a className="link" target="_blank" href="https://github.com/Darkin03">
          <CiServer />
          </a>

          <a className="link" target="_blank" href="https://github.com/Darkin03/Esnaider.OR">
          <FaGithub />
          </a>
         
      </div>


      <div className="wapeContainer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L8.9,106.7C17.8,149,36,235,53,229.3C71.1,224,89,128,107,96C124.4,64,142,96,160,117.3C177.8,139,196,149,213,165.3C231.1,181,249,203,267,224C284.4,245,302,267,320,250.7C337.8,235,356,181,373,149.3C391.1,117,409,107,427,117.3C444.4,128,462,160,480,197.3C497.8,235,516,277,533,277.3C551.1,277,569,235,587,234.7C604.4,235,622,277,640,266.7C657.8,256,676,192,693,144C711.1,96,729,64,747,80C764.4,96,782,160,800,186.7C817.8,213,836,203,853,170.7C871.1,139,889,85,907,64C924.4,43,942,53,960,85.3C977.8,117,996,171,1013,213.3C1031.1,256,1049,288,1067,261.3C1084.4,235,1102,149,1120,133.3C1137.8,117,1156,171,1173,192C1191.1,213,1209,203,1227,186.7C1244.4,171,1262,149,1280,170.7C1297.8,192,1316,256,1333,245.3C1351.1,235,1369,149,1387,122.7C1404.4,96,1422,128,1431,144L1440,160L1440,0L1431.1,0C1422.2,0,1404,0,1387,0C1368.9,0,1351,0,1333,0C1315.6,0,1298,0,1280,0C1262.2,0,1244,0,1227,0C1208.9,0,1191,0,1173,0C1155.6,0,1138,0,1120,0C1102.2,0,1084,0,1067,0C1048.9,0,1031,0,1013,0C995.6,0,978,0,960,0C942.2,0,924,0,907,0C888.9,0,871,0,853,0C835.6,0,818,0,800,0C782.2,0,764,0,747,0C728.9,0,711,0,693,0C675.6,0,658,0,640,0C622.2,0,604,0,587,0C568.9,0,551,0,533,0C515.6,0,498,0,480,0C462.2,0,444,0,427,0C408.9,0,391,0,373,0C355.6,0,338,0,320,0C302.2,0,284,0,267,0C248.9,0,231,0,213,0C195.6,0,178,0,160,0C142.2,0,124,0,107,0C88.9,0,71,0,53,0C35.6,0,18,0,9,0L0,0Z"
            ></path>
        </svg>
      </div>

    </section>
  );
}

const Description = () => {
  const [active, setActive] = useState(false);
  const mouseOver = () => {
    setActive(true);
  };
  const mouseOut = () => {
    setActive(false);
  };
  return (
    <div  className="container" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <div className="titleContainer">
        <h1 className={active ? "activeTitle" : "title"}>Sobre Mi</h1>
        <CiUser id="icon" className={ active ? "activeIcon" : "inactiveIcon"}/>
      </div>

      <p>
        Mi nombre es Esnaider Ortega, 
        y me apasiona ser autodidacta para perfeccionar constantemente mis habilidades como desarrollador.
         Busco destacarme en el dinámico mundo del desarrollo web,
          siempre en busca de oportunidades para aplicar mis conocimientos y trabajar de la mejor manera.
          <br></br>
        Actualmente estoy en el ultimo año de la carrera de Ingenieria de Sistemas 
        en la Universidad del sinu (Monteria - Colombia).
      </p>
    </div>
  );
};

const  JobsList = (props) => {

  const [jobActive, setJobActive] = useState(false); 
  const mouseOver = () => {
      setJobActive(true);
  };
  const mouseOut = () => {
      setJobActive(false);
  };

  return (
      <li  onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <div className="job"> 
              <h3 className="titleCompany">
                  {props.company}
                  <MdWorkOutline className= { jobActive? 'iconActive':'icon' }  />
               </h3>
              <div className="titleDates">
                <p>{props.iniDate}</p>
                <p>{props.endDate}</p>
              </div>
              <h4>{props.rol}</h4>
              <p>{props.description}</p>
            </div>         
          </li>
  )
}

const Jobs = () => {
  const [active, setActive] = useState(false);
  const mouseOver = () => {
    setActive(true);
  };
  const mouseOut = () => {
    setActive(false);
  };
  return (
    <div  className="container" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <div className="titleContainer">
        <h1 className={active ? "activeTitle" : "title"}>Experiencia</h1>
        <CiTimer id="icon" className={ active ? "activeIcon" : "inactiveIcon"}/>
      </div>

      <p>Actualmente estas son mis experiencias laborales:</p>
        <ul className="jobs">
          {jobs.map((job) => (
            <JobsList 
              key={job.id}
              company={job.company}
              iniDate={job.iniDate}
              endDate={job.endDate}
              rol={job.rol}
              description={job.description}
              />
          ))}

        </ul>

      
    </div>
  );
};

const HobbiesList = () => {
  const [iconActive, setIconActive] = useState({
    headphones: false,
    penpot: false,
    pen: false,
    glass: false,
  });

  const handleItemOver = (icon) => {
    setIconActive((prev) => ({ ...prev, [icon]: true }));
  };

  const handleItemOut = (icon) => {
    setIconActive((prev) => ({ ...prev, [icon]: false }));
  };

  return (
    <ul className="hobbies">
      <li>
        <div
            className="item"
             onMouseOver={() => handleItemOver("headphones")}
             onMouseOut={() => handleItemOut("headphones")}
        >
          <CiHeadphones className= { iconActive.headphones? 'iconActive':'icon'} /> Escuchar Musica
        </div>    
      </li>

      <li>
        <div
            className="item"
             onMouseOver={() => handleItemOver("penpot")}
             onMouseOut={() => handleItemOut("penpot")}
        >
          <CiPenpot  className= { iconActive.penpot? 'iconActive':'icon'} /> Leer
        </div>    
      </li>

      <li>
        <div
            className="item"
             onMouseOver={() => handleItemOver("pen")}
             onMouseOut={() => handleItemOut("pen")}
        >
          <CiPen  className= { iconActive.pen? 'iconActive':'icon'} /> Dibujar
        </div>    
      </li>

      <li>
        <div
            className="item"
             onMouseOver={() => handleItemOver("glass")}
             onMouseOut={() => handleItemOut("glass")}
        >
          <CiGlass  className= { iconActive.glass? 'iconActive':'icon'} /> Una buena taza de cafe
        </div>    
      </li>
  
    </ul>
  );
};

const Hobbies = () => {
  const [active, setActive] = useState(false);
  const mouseOver = () => {
    setActive(true);
  };
  const mouseOut = () => {
    setActive(false);
  };
  return (
    <div  className="container" onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <div className="titleContainer">
        <h1 className={active ? "activeTitle" : "title"}>Pasatiempos</h1>
        <CiPizza id="icon" className={ active ? "activeIcon" : "inactiveIcon"}/>
      </div>

      <HobbiesList />
</div>
);
};


export function AboutMe() {
  return (
    <section>
    <Into/>
      <div className="aboutMe">
        <div className="pintureContainer">
          <img className="pinture" src={data_file} />
        </div>
        <div className="infoContainer">
          <Description />
          <Hobbies />
          <Jobs />
        </div>
      </div>
      
       </section>
  );
}
