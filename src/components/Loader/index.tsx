import { useRef } from 'react';
import gsap from 'gsap';
import './style.css';
import { useGSAP } from '@gsap/react';

const Loader = () => {
    const loaderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const createCounter = (selector: string, count: number) => {
            const counter = document.querySelector(selector);
            if (!counter) return;

            for (let i = 0; i < count; i++) {
                for (let j = 0; j < 10; j++) {
                    const div = document.createElement('div');
                    div.className = 'num';
                    div.textContent = j.toString();
                    counter.appendChild(div);
                }
            }
            const finalDiv = document.createElement('div');
            finalDiv.className = 'num';
            finalDiv.textContent = '0';
            counter.appendChild(finalDiv);
        };

        const animateCounter = (selector: string, duration: number, delay = 0) => {
            const counter = document.querySelector(selector);
            if (!counter) return;
            
            const numHeight = counter.querySelector<HTMLElement>('.num')?.clientHeight || 0;
            const totalDistance = (counter.querySelectorAll('.num').length - 1) * numHeight;

            gsap.to(counter, {
                y: -totalDistance,
                duration,
                delay,
                ease: 'power2.inOut',
            });
        };

        // Create counters
        createCounter('.counter3', 2);

        // Animate counters
        animateCounter('.counter3', 5);
        animateCounter('.counter2', 6);
        animateCounter('.counter1', 2, 4);

        // Animate loader bars
        gsap.fromTo(
            '.loader1',
            { width: 0 },
            { width: '200px', duration: 6, ease: 'power2.inOut' }
        );

        gsap.fromTo(
            '.loader2',
            { width: 0 },
            { width: '100px', delay: 1.9, duration: 2, ease: 'power2.inOut' }
        );

        gsap.timeline()
            .to('.digit', {
                top: '-150px',
                stagger: 0.25,
                delay: 6,
                duration: 1,
                ease: 'power4.inOut',
            })
            .to('.loader', {
                background: 'none',
                // height: '200px',
                delay: 3,
                duration: 0.1,
            })
            .to('.loader1', {
                rotate: 90,
                // y: -5,
                duration: 0.5,
                delay: 1,
            })
            .to('.loader2', {
                x: -75,
                y: 75,
                duration: 0.5,
            })
            .to('.loader', {
                scale: 40,
                duration: 1,
                delay: 3,
                ease: 'power2.inOut',
            })
            .to('.loader', {
                scale: 45,
                y: 500,
                x: 2000,
                duration: 1,
                ease: 'power2.inOut',
            })
            .to('.loading-screen', {
                opacity: 0,
                duration: 0.5,
                ease: 'power1.inOut',
            });
    }, []);

    return (
        <div ref={loaderRef} className="z-30 loading-screen fixed top-0 left-0 w-full h-full bg-black text-white pointer-events-none">
            <div className="loader absolute top-[50%] left-[50%] w-[300px] h-[50px] translate-x-[-50%] translate-y-[-50%] flex bg-gray-700">
                <div className="bar h-[50px] loader1 relative bg-white"></div>
                <div className="bar h-[50px] loader2 relative bg-white"></div>
            </div>
            <div className="counter fixed left-[5%] bottom-[5%] flex h-[100px] w-[300px] font-[100px]">
                <div className="counter1 digit relative right-[-15px]" aria-hidden="true">
                    <div className="num">0</div>
                    <div className="num relative right-[-8px]">1</div>
                </div>
                <div className="counter2 digit relative right-[-15px]" aria-hidden="true">
                    <div className="num">0</div>
                    <div className="num relative right-[-10px]">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    <div className="num">0</div>
                </div>
                <div className="counter3 digit relative right-[-15px]" aria-hidden="true">
                    <div className="num">0</div>
                    <div className="num">1</div>
                    <div className="num">2</div>
                    <div className="num">3</div>
                    <div className="num">4</div>
                    <div className="num">5</div>
                    <div className="num">6</div>
                    <div className="num">7</div>
                    <div className="num">8</div>
                    <div className="num">9</div>
                    {/* <div className="num">0</div> */}
                </div>
            </div>
        </div>
    );
};

export default Loader;
