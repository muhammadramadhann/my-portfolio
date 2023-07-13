import {
    CodeBracketSquareIcon,
    DocumentMagnifyingGlassIcon,
    HomeIcon,
    InboxArrowDownIcon,
} from "@heroicons/react/24/outline";

const MobileNavbar = () => {
    return (
        <section
            id="mobile-nav"
            className="block md:hidden fixed bottom-0 left-0 z-50 bg-white h-[70px] w-full border-t-2 border-[#e3e3e3]"
        >
            <div className="flex items-center justify-between px-6 mx-auto relative top-2/4 translate-y-[-50%]">
                <a href="#home" className="flex flex-col items-center">
                    <HomeIcon className="w-[22px]" />
                    <div className="text-sm md:text-basemt-1">Home</div>
                </a>
                <a
                    href="#project"
                    className="flex flex-col items-center justify-center"
                >
                    <CodeBracketSquareIcon className="w-[22px]" />
                    <div className="text-sm md:text-basemt-1">Project</div>
                </a>
                <a href="#contact" className="flex flex-col items-center">
                    <InboxArrowDownIcon className="w-[22px]" />
                    <div className="text-sm md:text-basemt-1">Contact</div>
                </a>
                <a
                    href="https://drive.google.com/file/d/1nrRltUsd0WX3bu9rVe6SysmAH_-6Eij4/view?usp=sharing"
                    className="flex flex-col items-center"
                >
                    <DocumentMagnifyingGlassIcon className="w-[22px]" />
                    <div className="text-sm md:text-basemt-1">Resume</div>
                </a>
            </div>
        </section>
    );
};

export default MobileNavbar;
