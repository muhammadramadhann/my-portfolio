import { wave } from "../assets";

const Footer = () => {
    return (
        <section
            id="footer"
            className="relative bottom-0 left-0 -z-10 w-full pt-16"
        >
            <img src={wave} className="w-full" />
        </section>
    );
};

export default Footer;
