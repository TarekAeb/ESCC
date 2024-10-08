import Lenis from '@studio-freight/lenis';
import { useGSAP } from '@gsap/react';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Register from './views/Register';
import { useState } from 'react';
import Loader from './components/Loader';
const App = () => {
  const [showLoader, setShowLoader] = useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }
    , 17000);
  useGSAP(() => {
    // Create a new Lenis instance with the desired configuration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Request Animation Frame function to update Lenis
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const animationFrameId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  return (

    <Router>
      {/* {showLoader ? <Loader /> : ( */}
        <Routes>
          <Route path='/register' element={<LandingPage />} />
          {/* <Route path='/register' element={<Register />} /> */}
        </Routes>
      {/* )} */}
    </Router>
  );
};

export default App;
