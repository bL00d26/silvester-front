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
            <li className="dropdown">
              <button className="desplegable dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link to="/reptiles-en-venta">Reptiles en Venta</Link>
              </button>
              <div className="desplegable-menu dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/geckos-leopardo">Geckos leopardo</Link>
                <Link className="dropdown-item" to="/geckos-con-cresta">Geckos con cresta</Link>
                <Link className="dropdown-item" to="/dragones-barbudos">Dragones barbudos</Link>
                <Link className="dropdown-item" to="/lagartos-especiales">Lagartos especiales</Link>
              </div>
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
