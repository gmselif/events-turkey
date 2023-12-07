import Home from "../Pages/Home"
import AboutUs from "../Pages/AboutUs"
import ContactUs from "../Pages/ContactUs"
import PastEvents from "../Pages/PastEvents"
import Concerts from "../Pages/Concerts"
import Theaters from "../Pages/Theaters"
import Festivals from "../Pages/Festivals"
import Standups from "../Pages/Standups"
import Details from "../Pages/Details"
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:name",
    element: <Details />
  },
  {
    path: "/concerts",
    element: <Concerts />
  },
  {
    path: "/concerts/:name",
    element: <Details />
  },
  {
    path: "/theaters",
    element: <Theaters />
  },
  {
    path: "/theaters/:id",
    element: <Details />
  },
  {
    path: "/festivals",
    element: <Festivals />
  },
  {
    path: "/festivals/:id",
    element: <Details />
  },
  {
    path: "/standups",
    element: <Standups />
  },
  {
    path: "/standups/:id",
    element: <Details />
  },
  {
    path: "/past-events",
    element: <PastEvents />
  },
  {
    path: "/past-events/:id",
    element: <Details />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  },
  {
    path: "/contactus",
    element: <ContactUs />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  }
]

export default routes