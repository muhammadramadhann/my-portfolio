/* eslint-disable react/prop-types */
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const LinkButton = ({ href, className, name }) => {
    let buttonIcon;
    switch (name) {
        case "Resume":
            buttonIcon = <ArrowDownOnSquareIcon className="w-4 md:w-[22px]" />;
            break;
        case "Contact Me":
            buttonIcon = <EnvelopeIcon className="w-4 md:w-[22px]" />;
            break;
        case "Repository":
            buttonIcon = <CodeBracketSquareIcon className="w-4 md:w-[22px]" />;
            break;
        case "See More":
            buttonIcon = (
                <ArrowTopRightOnSquareIcon className="w-4 md:w-[22px]" />
            );
            break;
        default:
            buttonIcon = "";
            break;
    }

    return (
        <a
            href={href}
            target="blank"
            className={`${className} font-semibold flex items-center justify-center text-sm md:text-base rounded-2xl px-6 py-[10px] transition`}
        >
            {buttonIcon}
            <div className="ml-[6px]">{name}</div>
        </a>
    );
};

export default LinkButton;
