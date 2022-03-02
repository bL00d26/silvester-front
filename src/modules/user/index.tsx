import { Outlet } from "react-router-dom";
import { ModuleType } from "../../shared/types";
import Layout from "./layout";
import ContactUs from "./pages/ContactUs";
import MainView from "./pages/MainView";
import Product from "./pages/Product";
import Shop from "./pages/Shop";

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
        path: "/reptiles-en-venta",
        element: <Shop />,
      },
      name: "Reptiles en venta",
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
