import Hero from './components/Hero';
import Lenis from '@studio-freight/lenis';
// import Loader from './components/Loader';
import SecondSection from './components/SecondSection';
import FourthSection from './components/FourthSection';
// import Loader from './components/Loader';
import { useGSAP } from '@gsap/react';
// import MemberCarousel from './components/MembersCarousel/index.js';
const App = () => {
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
      {/* <Loader /> */}
      <main className='bg-black w-full h-full flex flex-col'>
        <Hero />
        <SecondSection />
        {/* <MemberCarousel /> */}
        <FourthSection />
      </main>
    </>
  );
};

export default App;
