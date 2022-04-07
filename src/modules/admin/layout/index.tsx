import Aside from "../components/Aside";
import Content from "../components/Content";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import './admin.css';
import './icons.css';
import "./indes.scss";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="admin-content">
      <div className="wrapper">
        <NavBar />
        <Aside />

          {children}

        <aside className="control-sidebar control-sidebar-dark">
        </aside>
     
       <Footer />
      </div>

    </section>
  );
}