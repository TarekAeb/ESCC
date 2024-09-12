import { useState } from 'react';
import { Navlinks } from "../../constants";
import { Logo } from "../../utils";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="w-full top-0 items-center z-50" style={{ padding: '20px' }}>
            <nav className="w-full flex justify-between items-center">
                <img src={Logo} alt="Escc club" width={50} />
                <div className="hidden md:flex items-center" style={{ gap: '12px' }}>
                    {Navlinks.map((nav) => (
                        <a href={`#${nav}`} key={nav} className="text-gray-600">
                            {nav}
                        </a>
                    ))}
                </div>
                {/* Hamburger menu for smaller screens */}
                <div className="md:hidden">
                    <button onClick={toggleNav} className="text-gray-600">
                        {isNavOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </nav>
            {/* Mobile navigation menu */}
            {isNavOpen && (
                <div
                    className="lg:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center mt-4 space-y-2 shadow-lg z-50"
                    style={{ position: 'absolute', padding: '20px' }}
                >
                    {Navlinks.map((nav) => (
                        <a
                            href={`#${nav}`}
                            key={nav}
                            className="text-gray-600"
                            onClick={toggleNav} // Close menu on link click
                        >
                            {nav}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}

export default Header;
