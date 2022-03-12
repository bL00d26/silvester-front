import { Outlet } from "react-router-dom";
import { ModuleType } from "../../shared/types";
import Layout from "./layout";
import ContactUs from "./pages/ContactUs";
import LearningCenter from "./pages/LearningCenter";
import MainView from "./pages/MainView";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import TermsAndFAQ from "./pages/TermsAndFAQ";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";

const User = () => {
  return (
    <Layout>
      <Outlet></Outlet>
    </Layout>
  );
};

const UserModule: ModuleType = {
  moduleProps: {
    path: "/",
    element: <User />,
  },
  name: "User",
  pages: [
    {
      routeProps: {
        path: "/",
        element: <MainView />,
      },
      name: "MainView",
    },
    {
      routeProps: {
        path: "/contacto",
        element: <ContactUs />,
      },
      name: "ContactUs",
    },
    {
      routeProps: {
        path: "/carrito-de-compras",
        element: <ShoppingCart />,
      },
      name: "ContactUs",
    },
    {
      routeProps: {
        path: "/detalles-del-pedido",
        element: <Checkout />,
      },
      name: "ContactUs",
    },
    {
      routeProps: {
        path: "/reptiles-en-venta",
        element: <Shop />,
      },
      name: "Reptiles en venta",
    },
    {
      routeProps: {
        path: "/centro-de-aprendizaje",
        element: <LearningCenter />,
      },
      name: "Centro de Aprendizaje",
    },
    {
      routeProps: {
        path: "/condiciones-de-envio",
        element: <TermsAndFAQ />,
      },
      name: "Condiciones de envio",
    },
    {
      routeProps: {
        path: "/product/:id",
        element: <Product />,
      },
      name: "Reptil en venta",
    },
  ],
};

export default UserModule;
