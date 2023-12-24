import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

//This component is used in index.js file.
//It is used to scroll to the top of the page with each route change.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop