import { Routes, Route, Link } from "react-router-dom";
import routes from "../src/routes"

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">AboutUs</Link></li>
        <li><Link to="/ContactUs">ContactUs</Link></li>
        <li><button><Link to="/Login">Login</Link></button></li>
      </ul>

      <Routes>
        {
          routes.map((route, key) => {
            if(route.path != "/NotFound") 
              return <Route path={route.path} element={route.element} />
          })
        }
      </Routes>
    </div>
  );
}

export default App;
