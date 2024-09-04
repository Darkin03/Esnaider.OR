import { useState } from "react"
import { Link } from "react-router-dom"

export const Enlace = (props) => {
    return(
        <a href= {props.link} className = "navegador-enlace" >
                <i className={props.icono}></i>
                {props.nombre}
        </a>
    )    
}

export function LinkApp({link,children}){

    const [active,setActive] = useState(false)
    const handleIconOver = () => {
        setActive(true);
      };
    
      const handleIconOut = () => {
        setActive(false);
      };

    return(
        <Link className="link" to={link} onMouseOver={() => handleIconOver()} onMouseOut={() => handleIconOut()}>
            <div className={active ? "iconActive" : "iconInactive"}>
                {children}
            </div>
        </Link>
    )
}

/*

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
  



     <Link
          to="/Esnaider.OR/"
          className="link"
          onMouseOver={() => handleIconOver("user")}
          onMouseOut={() => handleIconOut("user")}
        >
          <CiUser className={iconState.user ? "iconActive" : "iconInactive"} /> SobreMi
        </Link>





*/