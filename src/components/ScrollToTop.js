// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the pathname changes (i.e., a new route is visited)
    // This ensures smooth transition when going from /about to / (or vice versa)
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // You can optionally add logic here for when only the hash changes
    // However, the browser's native scroll-behavior: smooth for #links usually handles that well.
    // And your Navbar's Home link handler already explicitly scrolls to top.
  }, [location.pathname]); // Effect runs whenever the pathname part of the URL changes

  return null; // This component doesn't render any visible UI
};

export default ScrollToTop;