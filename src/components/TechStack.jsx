import { techStacks } from "../constants/data";

const TechStack = () => {
    return (
        <section id="techstack">
            <div className="mb-8">
                <p className="font-semibold text-[#4FBDBA] text-sm md:text-base mb-2">
                    Skill & Experience
                </p>
                <h1 className="text-xl md:text-2xl font-semibold mb-4">
                    Tech Stack
                </h1>
            </div>
            <div className="flex flex-wrap items-center gap-8">
                {techStacks.map((techStack) => (
                    <div
                        key={techStack.id}
                        className="border-2 border-[#e3e3e3] fill-white p-[14px] rounded-full rotate-infinite"
                    >
                        <img src={techStack.icon} className="w-[28px]" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
