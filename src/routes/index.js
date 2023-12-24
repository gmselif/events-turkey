import Home from "../Pages/Home"
import AboutUs from "../Pages/AboutUs"
import ContactUs from "../Pages/ContactUs"
import PastEvents from "../Pages/PastEvents"
import Concerts from "../Pages/Concerts"
import Theatres from "../Pages/Theatres"
import Festivals from "../Pages/Festivals"
import Standups from "../Pages/Standups"
import Details from "../Pages/Details"
import Signin from "../Pages/Signin"
import Signup from "../Pages/Signup"
import Favorites from "../Pages/Favorites"
import NotFound from "../Pages/NotFound"

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
    path: "/theatres",
    element: <Theatres />
  },
  {
    path: "/theatres/:name",
    element: <Details />
  },
  {
    path: "/festivals",
    element: <Festivals />
  },
  {
    path: "/festivals/:name",
    element: <Details />
  },
  {
    path: "/standups",
    element: <Standups />
  },
  {
    path: "/standups/:name",
    element: <Details />
  },
  {
    path: "/past-events",
    element: <PastEvents />
  },
  {
    path: "/past-events/:name",
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
  },
  {
    path: "/favorites",
    element: <Favorites />
  },
  {
    path: "*",
    element: <NotFound />
  }
]

export default routes