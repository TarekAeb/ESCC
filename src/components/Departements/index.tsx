import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import { Departments } from '../../constants';
import { useGSAP } from '@gsap/react';
import './index.css';
gsap.registerPlugin(ScrollTrigger,TextPlugin);

const DepartmentSection = () => {
    useGSAP(() => {
        // Animate the section heading
        gsap.to('.section-heading', {
            y: 0,
            text: {
                value: 'Our Departments',
                oldClass: 'smallFont',
                newClass: 'bigFont',
            },
            scrollTrigger: {
                trigger: '.section-heading',
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play none none none', // Keeps the heading in view
            },
        });

        // Animate each department description
        Departments.forEach((item, index) => {
            gsap.to(`.title-${index}`, {
                y: 0,
                duration: .3,
                opacity: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: `.title-${index}`,
                    start: 'top bottom',
                    end: 'bottom center',
                    toggleActions: 'play none none none', // Restarts when scrolled back in
                },
            });
            const targetRef = `.description-${index}`;
            gsap.to(targetRef, {
                opacity: 1,
                y: 0,
                duration: 1,
                // delay: .1,
                ease: 'power2.inOut',
                text: {
                    value: item.description,
                    oldClass: 'xsmallFont',
                    newClass: 'xbigFont',
                },
                scrollTrigger: {
                    trigger: targetRef,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none', // Restarts when scrolled back in
                },
            });
            gsap.to(`.image-${index}`, {
                opacity: 1,
                y: 0,
                duration: 1,
                // delay: .1,
                ease: 'power2.inOut',
                text: {
                    value: item.description,
                    // type: 'innerHTML',
                    oldClass: 'xsmallFont',
                    newClass: 'xbigFont',
                },
                scrollTrigger: {
                    trigger: targetRef,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none none', // Restarts when scrolled back in
                },
            });
        });

        
    }, []);

    return (
        <section className="relative p-4 lg:p-6 xl:p-10 flex flex-col items-center justify-center bg-primary z-20 overflow-hidden">
            <h1 className="text-center section-heading p-4 text-gray-700">Our Departments</h1>
            <div className="flex flex-col">
                {Departments.map((item, index) => (
                    <div
                        key={index}
                        className={`w-full flex flex-col items-center ${index % 2 === 0 ? 'lg:flex-row ' : 'lg:flex-row-reverse'}`}
                    >
                        <div className="w-full lg:w-1/2 max-h-[80vh] p-4 ">
                            <img src={item.icon} alt={item.title} className={`translate-y-96  image-${index} w-full h-full max-h-[80vh]`} />
                        </div>
                        <div className="p-4 lg:p-6 lg:w-1/2 flex-col items-center text-center ">
                            <h2 className={`text-2xl lg:text-4xl text-center p-4 lg:p-6 title-${index} text-white opacity-0`}>{item.title}</h2>
                            <p className={`text-gray-700 description-${index} opacity-0`}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DepartmentSection;
