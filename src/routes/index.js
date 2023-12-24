import Home from "../pages/home"
import AboutUs from "../pages/aboutUs"
import ContactUs from "../pages/contactUs"
import PastEvents from "../pages/pastEvents"
import Concerts from "../pages/concerts"
import Theatres from "../pages/theatres"
import Festivals from "../pages/festivals"
import Standups from "../pages/standups"
import Details from "../pages/details"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Favorites from "../pages/favorites"
import NotFound from "../pages/notFound"

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