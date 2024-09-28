import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Members } from "../../constants";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MemberCarousel = () => {
    
    useGSAP(() => {
    }, [])

    return (
        <section className="h-fit w-full bg-primary">
            {/* Header Section */}
            <div className="h-[100vh] flex justify-center items-center">
                <h1 className="text-2xl text-white title3">Our Members</h1>
            </div>

            {/* Members Carousel Section */}
            <div className="overflow-x-auto flex items-center h-fit wrapper">
                <div className="flex items-start panels">
                    {Members.map((member) => (
                        <section
                            key={member.id}
                            className="panel inline-block w-full sm:w-[100vw] h-[80vh] mr-4 mb-20"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-full h-full flex justify-between items-center rounded-3xl overflow-hidden">
                                    <img
                                        src={member.photo}
                                        alt={`${member.name}'s profile picture`}
                                        className="h-full"
                                        loading="lazy"
                                    />
                                    <div className="flex flex-col items-center p-4 w-1/2">
                                        <h2 className="text-yellow-500 text-2xl font-semibold p-2">
                                            {member.name}
                                        </h2>
                                        <h3 className="text-yellow-500 text-xl font-bold py-3">
                                            {member.department}
                                        </h3>
                                        <div className="flex bg-secondary rounded-3xl p-4 text-2xl shadow-cardBtn gap-6">
                                            {/* Contact buttons */}
                                            <div className="bg-secondary text-white rounded-full p-2 shadow-arrow">
                                                <IoIosArrowForward />
                                            </div>
                                            <a
                                                href={member.github}
                                                className="bg-white text-black rounded-full p-2"
                                                aria-label={`Visit ${member.name}'s GitHub profile`}
                                            >
                                                <FaGithub />
                                            </a>
                                            <a
                                                href={`mailto:${member.gmail}`}
                                                className="bg-white text-red-500 rounded-full p-2"
                                                aria-label={`Send an email to ${member.name}`}
                                            >
                                                <FaEnvelope />
                                            </a>
                                            <a
                                                href={member.linkedIn}
                                                className="bg-white text-secondary rounded-full p-2"
                                                aria-label={`Visit ${member.name}'s LinkedIn profile`}
                                            >
                                                <FaLinkedin />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MemberCarousel;
