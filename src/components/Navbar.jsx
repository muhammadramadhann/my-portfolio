import LinkButton from "./design/LinkButton";
import { dhnLogo } from "../assets";
import { navLinks } from "../constants/data";

const Navbar = () => {
    return (
        <nav className="bg-white fixed w-full top-0 left-0 border-b border-[#e3e3e3] h-[80px] z-50">
            <div className="max-w-[1000px] px-6 md:px-10 flex flex-wrap items-center justify-between mx-auto relative top-2/4 translate-y-[-50%]">
                <a href="/" className="flex items-center mx-auto md:mx-0">
                    <img src={dhnLogo} />
                </a>
                <div className="hidden md:flex md:order-2">
                    <LinkButton
                        href="https://drive.google.com/file/d/1nrRltUsd0WX3bu9rVe6SysmAH_-6Eij4/view?usp=sharing"
                        className={`bg-[#E5EFF0] text-[#35858B] border-2 border-[#35858B] hover:text-white hover:bg-[#35858B]`}
                        name={"Resume"}
                    />
                </div>
                <div className="items-center justify-between mx-auto w-full hidden md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col md:items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white">
                        {navLinks.map((nav) => (
                            <li key={nav.id}>
                                <a
                                    href={nav.link}
                                    className="text-[#696969] hover:text-black text-sm md:text-base"
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
