// mi primer componente//
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav className="menu">
       <div>
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive ? "active" : undefined}> Home</NavLink></li>
                <li><NavLink to="/Nosotros">Nosotros</NavLink></li>
                <li><NavLink to="/Servicios">Servicios</NavLink></li>
                <li><NavLink to="/Galeria">Galeria</NavLink></li>
                <li><NavLink to="/Novedades">Novedades</NavLink></li>
                <li><NavLink to="/Contacto">Contacto</NavLink></li>
            </ul>
        </div>
        </nav>
    );
}

export default Nav; 