// mi primer componente//
import { Link } from "react-router-dom";
const Footer = (props) => {
    return (
        <>
        <footer className="footer">
            <div className="footer-column">
                <img src="./img/Logo BN.png" style={{ width: '120px' }} alt="Logo del Footer" />
            </div>
            <div className="footer-column"></div>
            <div className="footer-column">
                <h3>Accesos</h3>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Nosotros">Nosotros</Link></li>
                    <li><Link to="/Servicios">Servicios</Link></li>
                    </ul>
            </div>
            <div className="footer-column">
                <h3>Otros Enlaces</h3>
                <ul>
                    <li><Link to="/Galeria">Galeria</Link></li>
                    <li><Link to="/Novedades">Novedades</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                </ul>
            </div>
            <div className="footer-bar">
                Todos los derechos reservados SAM-SAN &copy; 2023
            </div>
        </footer>
        </>
    );
}

export default Footer; 