import { Navlinks } from "../../constants";
import { Logo } from "../../utils";

const Header = () => {
    return (
        <header className="w-full" style={{
            padding: '20px',
            width: '100%'
        }}>
            <nav className="w-full flex justify-around items-center">
                <img src={Logo} alt="Escc club" width={50} />
                <div className="flex items-center gap-7"style={{
                    gap:'10px'
                }}>
                    {Navlinks.map((nav) => (
                        <a href={`#${nav}`}  key={nav} className="text-gray-400">
                            {nav}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Header;
