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
    <div style={{overflow: "hidden"}}>
      <Menu />
      <Slider />
      <div style={{ height: "50vh" }}>
        <NavigationButtons />
      </div>
      <div style={{ height: "50vh" }}>
        <Routes>
          {
            routes.map((route, key) => {
              if (route.path != "/NotFound" && route.path != "/Login")
                return <Route key={key} path={route.path} element={route.element} />
            })
          }
        </Routes>
      </div>

      <div style={{ height: "30vh" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
