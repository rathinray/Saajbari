import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll immediately
    window.scrollTo(0, 0);

    // Ensure scroll after rendering completes
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 400); // You can adjust the delay if needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
