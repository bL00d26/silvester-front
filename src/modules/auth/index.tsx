import { ModuleType } from '../../shared/types/index';
function Auth() {
  return <>auth module works!</>;
}

const AuthModule: ModuleType = {
  moduleProps: {
    path: "/auth",
    element: <Auth/>,
  },
  name: "Auth",
  pages: []
};

export default AuthModule;
