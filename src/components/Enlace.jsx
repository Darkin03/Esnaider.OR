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
    return(
        <Link className="link" to={link}>
            <div className ="content">
                   {children }
            </div>
        </Link>
    )
}

export function NavWeb({link,children}){
    return(
        <a className="link"  target="_blank"  href={link}>
            <div className="content">
                {children}
            </div>
        </a>
    )
}


export function NavLink({fontsize,children}) {
    return(
        <div style={{fontSize: fontsize}}>
            <nav className="nav">
                {children}
            </nav>
        </div>
    )
}

