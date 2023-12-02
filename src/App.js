import { Routes, Route } from "react-router-dom";
import routes from "../src/routes"
import Menu from "./Components/Menu"
import Footer from "./Components/Footer"
import ScrollToTopButton from "./Components/ScrollToTopButton"

//Bootstrap
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "#f1f1f1" }}>
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
      <ScrollToTopButton />
    </div>
  );
}

export default App;
