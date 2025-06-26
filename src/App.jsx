import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
    
    
      <Routes>
     
        <Route path="/Saajbari/" element={<HomePage />} />
        <Route path="/Saajbari/catering-services" element={<Catering />} />
        <Route path="/Saajbari/wedding-menu" element={<MenuPage />} />
        <Route path="/Saajbari/wedding-spin-wheel" element={<WeddingSpinWheel />} />
        <Route path="/Saajbari/bride-groom-qna" element={<BrideGroomQnA />} />
        <Route path="/Saajbari/rice-ceremony-quiz" element={<RiceCeremonyQuiz />} />
        <Route path="/Saajbari/wedding-decoration" element={<WeddingDecoration />} />
        <Route path="/Saajbari/birthday-celebration" element={<BirthdayCelebration />} />
        <Route path="/Saajbari/corporate-events" element={<CorporateEvents />} />

      </Routes>
   
  );
}

export default App;