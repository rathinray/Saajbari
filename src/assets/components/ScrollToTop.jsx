import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'PUSH' || navigationType === 'REPLACE') {
      if (window.lenis && typeof window.lenis.scrollTo === 'function') {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
      const timer = setTimeout(() => {
        if (window.lenis && typeof window.lenis.scrollTo === 'function') {
          window.lenis.scrollTo(0, { immediate: false, duration: 1 });
        } else {
          window.scrollTo(0, 0);
        }
      }, 400);
      return () => clearTimeout(timer);
    }
    // If navigationType is 'POP', do nothing (let browser restore scroll)
  }, [pathname, navigationType]);

  return null;
}
