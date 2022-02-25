import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './shared/components/NotFound';
import modules from "./modules";

function App() {
  console.log(modules);
  return (
    <>
      <Router>
         <Routes>
          {modules.map(module => (
            <Route {...module.moduleProps} key={module.name}>
              {module.pages?.map(route => (
                <Route {...route.routeProps} key={module.name}></Route>
              ))}
            </Route>
          ))}
          <Route path="*" element={<NotFound/>} />
         </Routes>
      </Router>
    </>
  );
}

export default App;
