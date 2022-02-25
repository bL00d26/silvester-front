import "./indes.scss";
import NavBar from "../components/NavBar";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="main-content">
      <NavBar />
      <main>
        {children}
      </main>
      <footer className="container">
        <Row>
          <Col>
            <Link to="/">Inicio</Link>
          </Col>
          <Col>
            <Link to="/">Reptiles en venta</Link>
          </Col>
          <Col>
            <Link to="/">Centro de Aprendizaje</Link>
          </Col>
          <Col>
            <Link to="/">Colección</Link>
          </Col>
          <Col>
            <Link to="/">Condiciones de envío</Link>
          </Col>
          <Col>
            <Link to="/">Contacto</Link>
          </Col>
        </Row>
      </footer>
    </section>
  );
}
// 