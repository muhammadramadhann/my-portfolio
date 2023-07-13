import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="max-w-[1000px] mx-auto flex flex-col min-h-screen pt-16 md:pt-24 px-6 md:px-10">
                <Hero />
                <TechStack />
                <Project />
                <Contact />
            </main>
            <MobileNavbar />
            <Footer />
        </>
    );
}
