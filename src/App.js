import { Routes, Route } from 'react-router-dom'
import routes from '../src/routes'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import ScrollButtons from './Components/ScrollButtons'

function App() {
  return (
    <div style={{ overflow: "hidden", backgroundColor: "#f1f1f1" }}>
      <Menu />

      <Routes>
        {
          routes.map((route, key) =>
            <Route key={key} path={route.path} element={route.element} />
          )
        }
      </Routes>

      <Footer />
      <ScrollButtons />
    </div>
  );
}

export default App;
