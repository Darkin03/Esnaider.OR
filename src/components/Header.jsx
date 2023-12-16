import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.css";
import { CiPhone, CiLaptop, CiMedal, CiUser } from "react-icons/ci";

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

  return (
    <header className="header">
      <nav className="nav">
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
      </nav>
    </header>
  );
}
