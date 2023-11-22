import { Routes, Route } from "react-router-dom";
import routes from "../src/routes"
import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      
      <Routes>
        {
          routes.map((route, key) => {
            if(route.path != "/NotFound" && route.path != "/Login") 
              return <Route key={key} path={route.path} element={route.element} />
          })
        }
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
