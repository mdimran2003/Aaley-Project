import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./routings/PublicRoute";
import Home from "./pages/Home";
import Course from "./pages/Course";
import TestimonialPage from "./pages/TestimonialPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import BookPanditJi from "./pages/BookPanditJi";
import AstrologerList from "./pages/AstrologerList";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
