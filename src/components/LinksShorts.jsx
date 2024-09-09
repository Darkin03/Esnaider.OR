
import { Link } from "react-router-dom"


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

export function NavLink({fontsize,color,children}) {
    return(
        <div style={{fontSize: fontsize, color: color}}>
            <nav className="nav">
                {children}
            </nav>
        </div>
    )
}

