import { Github } from "../../utils";
import "./index.css"
const Footer = () => {
    const time = new Date().getFullYear();
    return (
        <footer>
            <div className="w-full flex flex-col items-start p-4 ">
                <div className="p-4">
                    <a href='https://github.com/TarekAeb/ESCC' className='hidden cursor-pointer btn-container md:flex align-center'>
                        <div className='svg-container bg-white h-[54px] w-[54px] p-1'><img src={Github} alt="github" /></div>
                        <button className="btn-17">
                            <span className="text-container">
                                <span className="text">Sponsor us</span>
                            </span>
                        </button>
                    </a>
                </div>
                <div className="w-full flex justify-between p-2 lg:p-4">
                    <div className="flex gap-2 lg:gap-4 md:gap-10">
                        <a href="#" className="text-black text-sm sm:text-base md:text-lg">LinkedIn</a>
                        <a href="#" className="text-black text-sm sm:text-base md:text-lg">Instagram</a>
                        <a href="#" className="text-black text-sm sm:text-base md:text-lg">Gmail</a>
                    </div>
                    <div className="flex">
                        <span className="text-black text-sm sm:text-base md:text-lg">©</span>
                        <a href="mailto:abdelbari.tarek.sibachir@ensia.edu.dz" className="text-black text-sm sm:text-base md:text-lg"> {time.toString()} TAREK</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer