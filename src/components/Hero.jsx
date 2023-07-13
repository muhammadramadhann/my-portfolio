import LinkButton from "./design/LinkButton";
import { hero } from "../assets";
import { description } from "../constants/data";

const Hero = () => {
    return (
        <section
            id="home"
            className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between pt-20 md:pt-24 mb-[72px] md:mb-20"
        >
            <img
                src={hero}
                className="w-full h-full bg-cover md:h-[274px] md:w-[275px] rounded-tr-[48px] rounded-bl-[48px] mr-0 md:mr-[77px]"
            />
            <div className="text-center md:text-left">
                <p className="font-semibold text-[#4FBDBA] text-sm md:text-base mb-2 mt-8 md:mt-0">
                    Full Stack Web Developer Enthusiast
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                    Hi I’m{" "}
                    <span className="font-bold text-[#35858B]">Ramadhan</span>
                </h1>
                <p className="text-sm md:text-base mb-4 w-full lg:w-[548px]">
                    {description}
                </p>
                <LinkButton
                    href="mailto:ramadhannkurniawan@gmail.com"
                    className={`bg-[#35858B] text-white hover:bg-[#207379] w-full md:w-[189px]`}
                    name={"Contact Me"}
                />
            </div>
        </section>
    );
};

export default Hero;
