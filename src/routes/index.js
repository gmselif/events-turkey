import Home from "../Pages/Home"
import AboutUs from "../Pages/AboutUs"
import ContactUs from "../Pages/ContactUs"
import Login from "../Pages/Login"
import Events from "../Pages/Events"
import NotFound from "../Pages/NotFound"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/AboutUs",
    element: <AboutUs />
  },
  {
    path: "/ContactUs",
    element: <ContactUs />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Events",
    element: <Events />
  },
  {
    path: "/NotFound",
    element: <NotFound />
  }
]

export default routes