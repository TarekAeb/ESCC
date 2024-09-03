import { useRef, useEffect } from "react";
// import { Members } from "../../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

// interface Member {
//     id: number;
//     name: string;
//     department: string;
//     photo: string;
//     github: string;
//     gmail: string;
//     linkedIn: string;
// }

const MemberCarousel = () => {
    const sectionRef = useRef < HTMLDivElement > (null);
    const panelWrapperRef = useRef < HTMLDivElement > (null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#wrapper",
            start: "top top",
            end: "max",
            pin: true,
            scrub: true,
            markers: true,
        });
        const panels = gsap.utils.toArray('.panel');
        gsap.to(".panels", {
            x: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".wrapper",
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                // end: () => "+=" + document.querySelector("#wrapper").offsetWidth * panels.length,
            },
        });
    }, []);

    return (
        <div ref={sectionRef} className="flex flex-col items-center p-10 h-[100vh] wrapper" >
            <div id="content" className="h-full flex flex-col overflow-hidden whitespace-nowrap items-center">
                <h1>Our Members</h1>
                <div className="flex items-center container">
                    <div ref={panelWrapperRef} className="flex items-center">
                        {/* {Members.map((member) => (
                            <div key={member.id} className="panel inline-block w-[50vh] mr-4 mb-20">
                                <div className="flex flex-col items-center p-4 gap-4">
                                    <div className="w-full h-full flex flex-col items-center rounded-3xl overflow-hidden bg-dark">
                                        <img src={member.photo} alt={member.name} className="w-full" />
                                        <div className="flex flex-col items-center p-4">
                                            <h2 className="text-2xl font-semibold p-2">{member.name}</h2>
                                            <h3 className="text-xl font-bold py-3">{member.department}</h3>
                                            <div className="flex bg-black rounded-3xl p-4 text-2xl shadow-cardBtn gap-6">
                                                <div className="bg-black text-white rounded-full p-2 shadow-arrow">
                                                    <IoIosArrowForward />
                                                </div>
                                                <a href={member.github} className="bg-white text-black rounded-full p-2" aria-label={`GitHub profile of ${member.name}`}>
                                                    <FaGithub />
                                                </a>
                                                <a href={`mailto:${member.gmail}`} className="bg-white text-black rounded-full p-2" aria-label={`Email ${member.name}`}>
                                                    <FaEnvelope />
                                                </a>
                                                <a href={member.linkedIn} className="bg-white text-black rounded-full p-2" aria-label={`LinkedIn profile of ${member.name}`}>
                                                    <FaLinkedin />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))} */}
                        <div className="w-[30vh] h-[30vh] bg-white">
                        </div>
                        <div className="w-[30vh] h-[30vh] bg-white">
                        </div>
                        <div className="w-[30vh] h-[30vh] bg-white">
                        </div>
                        <div className="w-[30vh] h-[30vh] bg-white">
                        </div>
                        <div className="w-[30vh] h-[30vh] bg-white">
                        </div>
                        <div className="w-[30vh] h-[30vh] bg-white">
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default MemberCarousel;
