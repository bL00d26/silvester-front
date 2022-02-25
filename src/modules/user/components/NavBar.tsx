import { Link } from "react-router-dom";
import "./../styles/navBar.scss";

export default function NavBar() {
  return (
    <header>
      <div className="logo">
        <div className="cam"></div>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/reptiles-en-venta">Reptiles en Venta</Link>
            </li>
            <li>
              <Link to="/centro-de-aprendizaje">Centro de Aprendizaje</Link>
            </li>
            <li>
              <Link to="/coleccion">Colección</Link>
            </li>
            <li>
              <Link to="/condiciones-de-envio">Condiciones de Envío</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
