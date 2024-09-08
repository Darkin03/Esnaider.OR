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
            <div className ="content">
                   {children }
            </div>
        </Link>
    )
}

export function NavLink({fontsize,children}) {
    return(
        <nav className="nav" style={{fontSize: fontsize}}>
            {children}
        </nav>
    )
}

