import { Routes, Route } from "react-router-dom";
import routes from "../src/routes"
import Menu from "./Components/Menu"
import Footer from "./Components/Footer"

//Bootstrap
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Menu />
      
      <Routes>
        {
          routes.map((route, key) => {
            if (route.path != "/NotFound" && route.path != "/Login")
              return <Route key={key} path={route.path} element={route.element} />
          })
        }
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
