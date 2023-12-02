import './App.css';
import Contact from './components/Contact';
import CourseSection from './components/CourseSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <div className="sticky top-0 left-0 z-50 hidden md:block ">
        <Navbar />
      </div>
      
      <HeroSection />
      <CourseSection />
      <Testimonials />
      <Price />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
