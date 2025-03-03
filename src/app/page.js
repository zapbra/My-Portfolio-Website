import Image from "next/image";
import Introduction from "./components/Homepage/Introduction";
import TechStack from "./components/Homepage/TechStack";
import Projects from "./components/Homepage/Projects";
import AboutMe from "./components/Homepage/AboutMe";
import Contact from "./components/Homepage/Contact";

export default function Home() {
    return (
        <div className="px-[16px] md:px-[32px]">
            <div className="mb-[200px]">
                <Introduction />
            </div>
            <div className="mb-[160px]">
                <TechStack />
            </div>
            <div className="mb-[160px]">
                <Projects />
            </div>

            <div className="mb-[160px]">
                <AboutMe />
            </div>

            <div className="mb-[160px]">
                <Contact />
            </div>
        </div>
    );
}
