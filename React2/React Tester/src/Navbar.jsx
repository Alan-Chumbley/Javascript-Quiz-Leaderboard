import { Children } from "react"
import {Link} from "react-router-dom"
export default function Navbar(){
    
    return <nav className="nav">
        <Link to="/" className="site-title">
        <img
              alt=""
              src="./src/assets/alan-emoji-removebg-preview.png"
              width="45"
              height="55"
              className="d-inline-block align-top"
            />{' '}
        
            
            Alan Chumbley</Link>
        <ul>
        <CustomLink to="/about"> About</CustomLink>
        <CustomLink to="/projects"> Projects</CustomLink>
            
        
        </ul>
    </nav>
}

function CustomLink ({to, children,...props}){
    const path =window.location.pathname
    return(
        <li className={path === to ? "active" : ""}> 
            <Link to={to} {...props}> 
            {children}
            </Link>
        </li>
    )
}