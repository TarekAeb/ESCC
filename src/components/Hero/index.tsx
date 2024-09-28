import { FC } from 'react';
// import { Button } from "../../Common/Button";
// import GitHub from '../../assets/github.svg';
import gsap from 'gsap';
import Header from '../header';
import { useGSAP } from '@gsap/react';
import { bottomLeftImg, bottomRightImg, HeroImg, middleLeftImg, topLeftImg, topRightImg } from '../../utils';
const Hero: FC = () => {
    useGSAP(() => {
        gsap.to('#heroImg', { opacity: 1, delay: 0.5, duration: 1, })
        gsap.to('#heroBg', { y: 0, opacity: 1, delay: 0.4, })
        gsap.to('#logo', { opacity: 1, delay: 1, scrollTrigger: { trigger: '#logo', start: 'top center', end: 'bottom center', toggleActions: "play none none none", } })
        gsap.to('#heroText', { y:0 ,opacity: 1, delay: 2, })
    }, [])
    return (
        <section className="select-none w-full flex flex-col justify-between items-center z-20">
            <Header />      
            <div id='heroBg' className="absolute top-0 w-[100vw] h-[100vh] z-[-2] flex opacity-0">
                <div className="flex flex-col">
                    <img src={topLeftImg} alt="bg" className='absolute w-1/2 left-0 translate-y-[26em] sm:translate-y-[15em] md:translate-y-[5em]  xl:translate-y-[0em] ' />
                    <img src={middleLeftImg} alt="bg" className='absolute w-1/2 left-0 translate-y-[30em] sm:translate-y-[23em] md:translate-y-[16em] lg:translate-y-[12em] xl:translate-y-[9em]' />
                    <img src={bottomLeftImg} alt="bg" className='absolute w-1/3 left-0 translate-y-[33em] sm:translate-y-[28em] md:translate-y-[20em] lg:translate-y-[25rem] xl:translate-y-[23em]' />
                </div>
                <div className="flex flex-col">
                    <img src={topRightImg} alt="bg" className='absolute w-1/2 right-0 translate-y-[30em] sm:translate-y-[21em] md:translate-y-[13em] lg:translate-y-[14em] xl:translate-y-44 2xl:translate-y-32' />
                    <img src={bottomRightImg} alt="bg" className='absolute w-1/4 right-0 translate-y-[34em] sm:translate-y-[28em] md:translate-y-[22em] lg:translate-y-[25em]' />
                </div>
            </div>
            <div className="w-full p-4">
                <h2 id="logo" className="Club-name text-4xl lg:text-6xl font-exo text-black font-extrabold text-center p-0 opacity-0">
                    <span className="text-[#33aa5b]">E</span>nsia <span className="text-[#33aa5b]">S</span>ports & <span className="text-[#33aa5b]">C</span>ulture <span className="text-[#33aa5b]">C</span>lub
                </h2>
                     <p id='heroText' className="opacity-0 text-center text-gray-700 text-lg lg:text-2xl mt-6">
                    The Ensia Sports & Culture Club offers a vibrant community through six key areas: Collective Sports, Mental Wellness, Green Environment, Artistic Culture, Individual Sports, and Health. We aim to enhance well-being and personal growth, providing a supportive space for members to engage in sports, creativity, sustainability, and overall health.
                </p>
            </div>
            <div id="heroImg" className='w-full p-0 opacity-0'>
                <img src={HeroImg} alt="" className='w-full' />
            </div>
        </section>
    );
};

export default Hero;
