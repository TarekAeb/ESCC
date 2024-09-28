import React from 'react';
import Contact from '../components/Contact';
import DepartmentSection from '../components/Departements';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MemberCarousel from '../components/MembersCarousel';

const LandingPage: React.FC = () => {
    return (
        <main className='bg-white w-full h-full flex flex-col'>
            <Hero />
            <DepartmentSection />
            <MemberCarousel />
            <Contact />
            <Footer />
        </main>
    );
};

export default LandingPage;