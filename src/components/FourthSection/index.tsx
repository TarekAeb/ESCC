import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Canvas } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Departments } from '../../constants';
import Model from '../Modal';
import * as THREE from "three"
gsap.registerPlugin(ScrollTrigger);

const FourthSection: React.FC = () => {
    const [rotation, setRotation] = useState<number>(0);
    const [texture, setTexture] = useState<THREE.Texture>(new TextureLoader().load('/default-texture.jpg'));
    const sectionRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.to(sectionRefs.current, {
            rotateX: 2 * Math.PI, // Rotate model 360 degrees on the X axis
            scrollTrigger: {
                trigger: '.phone',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                    setRotation(self.progress * 2 * Math.PI); // Update rotation based on scroll progress
                },
            },
        });

        const textureLoader = new TextureLoader();
        const textures = Departments.map(department => textureLoader.load(department.icon));
        
        Departments.forEach((item, index) => {
            gsap.to(sectionRefs.current[index], {
                scrollTrigger: {
                    trigger: sectionRefs.current[index],
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                    onEnter: () => setTexture(textures[index]),
                },
            });
        });
    }, [Departments]);

    return (
        <section className="relative p-4 lg:p-6 xl:p-10 flex flex-col items-center justify-center">
            <div className="phone-container h-[100vh] flex-center">
                <div className="phone absolute translate-x-[50%] translate-y-[50%]">
                    <Canvas
                        className='w-full h-full'
                        style={{
                            position: 'fixed',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            overflow: "hidden",
                        }}
                    >
                        <Model rotation={rotation} texture={texture} />
                    </Canvas>
                </div>
            </div>
            <div>
                {Departments.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => el && (sectionRefs.current[index] = el)}
                        className={`w-full flex flex-col items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    >
                        <div className='w-full lg:w-1/2 max-h-[100vh] p-4'>
                            <img src={item.icon} alt={item.title} className='w-full h-full' />
                        </div>
                        <div className="p-4 lg:p-6 flex-col items-center text-center">
                            <h2 className='text-4xl text-center p-4 lg:p-6'>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FourthSection;
