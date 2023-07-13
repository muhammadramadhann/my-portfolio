import LinkButton from "./design/LinkButton";
import { projects } from "../constants/data";
import parse from "html-react-parser";

const Project = () => {
    return (
        <section id="project">
            <div className="mb-8 pt-24">
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between">
                    <div>
                        <p className="font-semibold text-[#4FBDBA] text-sm md:text-base mb-2">
                            Small steps into something big
                        </p>
                        <h1 className="text-xl md:text-2xl font-semibold mb-4">
                            Projects
                        </h1>
                    </div>
                    <LinkButton
                        href="https://github.com/muhammadramadhann?tab=repositories"
                        className={`bg-[#35858B] text-white hover:bg-[#207379] w-[140px] md:w-[150px]`}
                        name={"See More"}
                    />
                </div>
            </div>
            {projects.map((project) => (
                <div
                    key={project.id}
                    className={`flex flex-col md:flex-row gap-10 ${
                        project === projects[projects.length - 1]
                            ? ""
                            : "mb-12 md:mb-24"
                    }`}
                >
                    <img
                        src={project.img}
                        className={`${
                            project.id % 2 === 0 ? "md:order-2" : ""
                        } mb-4 md:mb-0`}
                    />
                    <div>
                        <h1 className="text-xl md:text-2xl underline font-semibold mb-2 md:mb-4">
                            {project.name}
                        </h1>
                        <p className="text-sm md:text-base mb-4">
                            {parse(project.content)}
                        </p>
                        <LinkButton
                            href={project.link}
                            className={`bg-[#E5EFF0] text-[#35858B] border-2 border-[#35858B] hover:text-white hover:bg-[#35858B] w-full md:w-[189px]`}
                            name={"Repository"}
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Project;
