import Home from "../Pages/Home"
import AboutUs from "../Pages/AboutUs"
import ContactUs from "../Pages/ContactUs"
import Login from "../Pages/Login"
import PastEvents from "../Pages/PastEvents"
import Concerts from "../Pages/Concerts"
import Theaters from "../Pages/Theaters"
import Festivals from "../Pages/Festivals"
import Standups from "../Pages/Standups"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Concerts",
    element: <Concerts />
  },
  {
    path: "/Theaters",
    element: <Theaters />
  },
  {
    path: "/Festivals",
    element: <Festivals />
  },
  {
    path: "/Standups",
    element: <Standups />
  },
  {
    path: "/PastEvents",
    element: <PastEvents />
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
  }
]

export default routes