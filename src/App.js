import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./routings/PublicRoute";
import Home from "./pages/Home";
import Course from "./pages/Course";
import TestimonialPage from "./pages/TestimonialPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import BookPanditJi from "./pages/BookPanditJi";
import AstrologerList from "./pages/AstrologerList";
import IndividualConsultation from "./pages/IndividualConsultation";
import IndividualModal from "./components/Individual-Modal";
import MatchMaking from "./components/Match-Making";
import MarrideLyfeAnalysis from "./components/MarrideLyfe-Analysis";
import BirthTimeRectification from "./components/Birth-Time-Rectification";
import KundliReport from "./pages/Kundli-Report";
import TaroCardReading from "./pages/TaroCard-Reading";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute element={<Home />} />} />
          <Route path="/course" element={<PublicRoute element={<Course />} />} />
          <Route path="/testimonial" element={<PublicRoute element={<TestimonialPage />} />} />
          <Route path="/contact-us" element={<PublicRoute element={<ContactUs />} />} />
          <Route path="/about-us" element={<PublicRoute element={<AboutUs />} />} />
          <Route path="/book-pandit-ji" element={<PublicRoute element={<BookPanditJi />} />} />
          <Route path="/astrologer-list" element={<PublicRoute element={<AstrologerList />} />} />
          <Route path="/individual-consultation" element={<PublicRoute element={<IndividualConsultation />} />} />
          <Route path="/individual-Modal" element={<PublicRoute element={<IndividualModal />} />} />
          <Route path="/match-making" element={<PublicRoute element={<MatchMaking />} />} />
          <Route path="/marrideLifeAnalysis" element={<PublicRoute element={<MarrideLyfeAnalysis />} />} />
          <Route path="/birthTimeRectification" element={<PublicRoute element={<BirthTimeRectification />} />} />
          <Route path="/kundali-report" element={<PublicRoute element={<KundliReport />} />} />
          <Route path="/tarroCard-reading" element={<PublicRoute element={<TaroCardReading />} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
