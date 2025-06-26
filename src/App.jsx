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




function App() {
  return (
    
    <HashRouter>
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

      </Routes>
    </HashRouter>
  );
}

export default App;