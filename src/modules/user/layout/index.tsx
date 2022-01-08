import "./indes.scss";
import NavBar from "../components/NavBar";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="main-content">
      <NavBar/>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </section>
  );
}
