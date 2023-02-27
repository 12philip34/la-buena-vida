import './App.css';
import { useEffect } from 'react';
import Business from './Components/Business';
import FAQ from './Components/FAQ.jsx';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Testimonies from './Components/Testimonies';
import WhoElse from './Components/WhoElse';
import AOS from 'aos';
import 'aos/dist/aos.css';
import JoinUs from './Components/JoinUs';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Business />
      <WhoElse />
      <Testimonies />
      <FAQ />
      <JoinUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
