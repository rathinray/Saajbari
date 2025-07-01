import { BrowserRouter as Router, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Catering from './assets/pages/Catering';
import HomePage from './assets/pages/HomePage';
import MenuPage from './assets/pages/MenuPage';
import WeddingSpinWheel from './assets/pages/WeddingSpinWheel';
import BrideGroomQnA from './assets/pages/BrideGroomQnA';
import RiceCeremonyQuiz from './assets/pages/RiceCeremonyQuiz';
import WeddingDecoration from './assets/pages/WeddingDecoration';
import BirthdayCelebration from './assets/pages/BirthdayCelebration';
import CorporateEvents from './assets/pages/CorporateEvents';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from './assets/components/ScrollToTop';
import { useEffect } from 'react';
import Lenis from 'lenis';
import WeddingMenuBangla from './assets/components/WeddingMenuBangla';
import BengaliWeddingMenu from './assets/components/BengaliWeddingMenu';
import WeddingImages from './assets/pages/WeddingImages';
import WeddingMenuBangla1 from './assets/pages/WeddingMenuBangla1';


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });
    window.lenis = lenis;
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    // Optionally sync with GSAP ScrollTrigger if used globally
    if (window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
    }
    return () => {
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  return (
    
    <HashRouter>
      <ScrollToTop />
      <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path="/catering-services" element={<Catering />} />
        <Route path="/wedding-menu" element={<MenuPage />} />
        <Route path="/wedding-spin-wheel" element={<WeddingSpinWheel />} />
        <Route path="/bride-groom-qna" element={<BrideGroomQnA />} />
        <Route path="/rice-ceremony-quiz" element={<RiceCeremonyQuiz />} />
        <Route path="/wedding-decoration" element={<WeddingDecoration />} />
        <Route path="/birthday-celebration" element={<BirthdayCelebration />} />
        <Route path="/corporate-events" element={<CorporateEvents />} />
        <Route path="/wedding-menu-bangla" element={<WeddingMenuBangla />} />
        <Route path="/bengali-wedding-menu" element={<BengaliWeddingMenu />} />
        <Route path='/wedding-images' element={<WeddingImages/>}/>
        <Route path="/wedding-menu-bangla1" element={<WeddingMenuBangla1/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;