import { Routes, Route } from "react-router-dom";
import routes from "../src/routes"
import Menu from "./Components/Menu"
import Slider from "./Components/Slider"
import Footer from "./Components/Footer"
import NavigationButtons from "./Components/NavigationButtons"

//Bootstrap
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Menu />
      <Slider />
      <NavigationButtons />

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
