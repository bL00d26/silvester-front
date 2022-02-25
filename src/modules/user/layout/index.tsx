import "./indes.scss";
import NavBar from "../components/NavBar";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
      <Footer />
    </section>
  );
}
// 