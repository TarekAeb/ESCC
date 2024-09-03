import { Sports } from "../../utils";

const SecondSection = () => {
    return (
        <>
            <section className="w-full h-[100vh] flex flex-col lg:flex-row items-center p-4 lg:p-6 xl:p-10">
                {/* left part */}
                <div className="left w-full lg:w-1/2 p-4">
                    <h2 className="section-heading text-4xl lg:text-6xl font-exo text-white font-extrabold text-center">
                        <span className="text-[#33aa5b]">E</span>nsia <span className="text-[#33aa5b]">S</span>ports & <span className="text-[#33aa5b]">C</span>ulture <span className="text-[#33aa5b]">C</span>lub
                    </h2>
                    <p className="text-center text-gray-dark text-lg lg:text-2xl mt-6">
                        The Ensia Sports & Culture Club offers a vibrant community through six key areas: Collective Sports, Mental Wellness, Green Environment, Artistic Culture, Individual Sports, and Health. We aim to enhance well-being and personal growth, providing a supportive space for members to engage in sports, creativity, sustainability, and overall health.
                    </p>
                </div>
                {/* right part */}
                <div className="right w-full lg:w-1/2 p-6">
                    <img src={Sports} alt="" className="w-full h-full" />
                </div>
            </section>
        </>
    )
}
export default SecondSection;