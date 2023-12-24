import { Routes, Route } from 'react-router-dom'
import routes from '../src/routes'
import Menu from './components/menu'
import Footer from './components/footer'
import ScrollButtons from './components/scrollButtons'

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
