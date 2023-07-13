import { contacts } from "../constants/data";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Contact = () => {
    return (
        <section id="contact">
            <div className="mb-8 pt-24">
                <p className="font-semibold text-[#4FBDBA] text-sm md:text-base mb-2">
                    Find out more about me
                </p>
                <h1 className="text-xl md:text-2xl font-semibold mb-4">
                    Contact
                </h1>
            </div>
            <div className="flex items-center justify-between flex-wrap">
                {contacts.map((contact) => (
                    <div key={contact.id} className="w-full sm:w-[398px] mb-8">
                        <a href={contact.link}>
                            <div className="flex items-center justify-between">
                                <img src={contact.icon} className="w-[22px]" />
                                <div className="flex flex-col ml-4">
                                    <h5 className="font-semibold text-sm md:text-base">
                                        {contact.name}
                                    </h5>
                                    <p className="font-semibold text-sm md:text-base text-[#696969]">
                                        {contact.username}
                                    </p>
                                </div>
                                <div className="ml-auto">
                                    <ArrowTopRightOnSquareIcon className="hidden sm:block w-[22px] text-[#35858B]" />
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Contact;
