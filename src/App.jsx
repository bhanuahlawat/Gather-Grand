import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Steps from "./components/Steps";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonial";
import Carousel from "./components/Carousel";
import AboutUs from "./components/Aboutus";
import PricingPage from "./components/PricingPage"; // 👈 Create this component

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Hero />
              <TrustedBy />
              <Steps />
              <Features />
              <Testimonials />
              <CTA />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </>
  );
}

export default App;
