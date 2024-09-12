import Hero from './components/Hero';
import Lenis from '@studio-freight/lenis';
import FourthSection from './components/FourthSection';
import { useGSAP } from '@gsap/react';
import Footer from './components/Footer';
import { useState } from 'react';
import Contact from './components/Contact';
// import MemberCarousel from './components/MembersCarousel/index.js';
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

    <>
      {/* {showLoader ? <Loader /> : ( */}
      <main className='bg-white w-full h-full flex flex-col'>
        <Hero />
        {/* <SecondSection /> */}
        {/* <MemberCarousel /> */}
        <FourthSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
