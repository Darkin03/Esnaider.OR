import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";
import { CiPhone, CiLaptop, CiMedal, CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import webDeveloper from "../images/Web Developer_Flatline.svg";


export function Header() {
  const [iconState, setIconState] = useState({
    user: false,
    medal: false,
    laptop: false,
    phone: false,
  });

  const handleIconOver = (icon) => {
    setIconState((prev) => ({ ...prev, [icon]: true }));
  };

  const handleIconOut = (icon) => {
    setIconState((prev) => ({ ...prev, [icon]: false }));
  };

  const [activeAside, setActiveAside] = useState(false);

  const handleClick = useCallback(() => {
    setActiveAside(!activeAside);
  }, [activeAside]);
  

  return (
    <section>
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h3>Esnaider.<span>OR</span></h3>
        </div>

        <Link
          to="/"
          className="link"
          onMouseOver={() => handleIconOver("user")}
          onMouseOut={() => handleIconOut("user")}
        >
          <CiUser className={iconState.user ? "iconActive" : "iconInactive"} /> SobreMi
        </Link>

        <Link
          to="/habilidades"
          className="link"
          onMouseOver={() => handleIconOver("medal")}
          onMouseOut={() => handleIconOut("medal")}
        >
          <CiMedal className={iconState.medal ? "iconActive" : "iconInactive"} /> Habilidades
        </Link>

        <Link
          to="/proyectos"
          className="link"
          onMouseOver={() => handleIconOver("laptop")}
          onMouseOut={() => handleIconOut("laptop")}
        >
          <CiLaptop className={iconState.laptop ? "iconActive" : "iconInactive"} /> Proyectos
        </Link>

        <Link
          to="/contactos"
          className="link"
          onMouseOver={() => handleIconOver("phone")}
          onMouseOut={() => handleIconOut("phone")}
        >
          <CiPhone className={iconState.phone ? "iconActive" : "iconInactive"} /> Contactos
        </Link>

        <button className="button" onClick={handleClick}>
          <FaBars className="icon" />
        </button>
      </nav>
    </header>

    <aside id="headerAside" className= {activeAside? 'activeAside': 'inactiveAside'}>
           
           

            <section className="content">
                <header className="header">
                    <button className="button" onClick={handleClick}>
                        <FaBars className="icon" />
                    </button>
                    <h3 className="logo">Esnaider.<span>OR</span></h3>
                </header>
                <ul className="list">
                    <li className="item" >
                      <Link to="/" className="link" onClick={handleClick}>
                        <CiUser className="icon" /> Sobre mi
                      </Link>
                    </li>

                    <li className="item">
                      <Link to="/habilidades" className="link" onClick={handleClick}>
                        <CiMedal className="icon" /> Habilidades
                      </Link>
                    </li>

                    <li className="item">
                      <Link to="/proyectos" className="link" onClick={handleClick}>
                        <CiLaptop className="icon" /> Proyectos
                      </Link>
                    </li>

                    <li className="item">
                      <Link to="/contactos" className="link" onClick={handleClick}>
                        <CiPhone className="icon" /> Contactos
                      </Link>
                    </li>
                    
                    
                </ul>

                <div className="pintureContainer">
                  <img className="pinture" src={webDeveloper} />
                </div>
                
            </section>
           
        </aside>

    </section>
  );
}
