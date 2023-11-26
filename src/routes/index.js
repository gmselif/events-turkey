import Home from "../Pages/Home"
import AboutUs from "../Pages/AboutUs"
import ContactUs from "../Pages/ContactUs"
import Login from "../Pages/Login"
import PastEvents from "../Pages/PastEvents"
import Concerts from "../Pages/Concerts"
import Theaters from "../Pages/Theaters"
import Festivals from "../Pages/Festivals"
import Standups from "../Pages/Standups"
import Details from "../Pages/Details"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:id",
    element: <Details />
  },
  {
    path: "/Concerts",
    element: <Concerts />
  },
  {
    path: "/Concerts/:id",
    element: <Details />
  },
  {
    path: "/Theaters",
    element: <Theaters />
  },
  {
    path: "/Theaters/:id",
    element: <Details />
  },
  {
    path: "/Festivals",
    element: <Festivals />
  },
  {
    path: "/Festivals/:id",
    element: <Details />
  },
  {
    path: "/Standups",
    element: <Standups />
  },
  {
    path: "/Standups/:id",
    element: <Details />
  },
  {
    path: "/PastEvents",
    element: <PastEvents />
  },
  {
    path: "/PastEvents/:id",
    element: <Details />
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