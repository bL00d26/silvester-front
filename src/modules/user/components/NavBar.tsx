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
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Reptiles en Venta</a>
            </li>
            <li>
              <a href="#">Centro de Aprendizaje</a>
            </li>
            <li>
              <a href="#">Colección</a>
            </li>
            <li>
              <a href="#">Condiciones de Envío</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
