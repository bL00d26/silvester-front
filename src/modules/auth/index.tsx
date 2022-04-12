import { Outlet } from 'react-router-dom';
import { ModuleType } from '../../shared/types/index';
import Layout from '../admin/layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
function Auth() {
  return <Layout>
    <Outlet></Outlet>
  </Layout>;
}

const AuthModule: ModuleType = {
  moduleProps: {
    path: "/auth",
    element: <Auth />,
  },
  name: "Auth",
  pages: [{
    routeProps: {
      path: "/auth/login",
      element: <Login />,
    },
    name: "Iniciar sesión",
  },
  {
    routeProps: {
      path: "/auth/signup",
      element: <Signup />,
    },
    name: "Registro",

  }]
};

export default AuthModule;
