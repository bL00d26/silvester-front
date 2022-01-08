import { Outlet } from "react-router-dom";
import { ModuleType } from "../../shared/types";
import Layout from "./layout";
import ContactUs from "./pages/ContactUs";
import MainView from "./pages/MainView";

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
        path: "/contact",
        element: <ContactUs />,
      },
      name: "ContactUs",
    },
  ],
};

export default UserModule;
