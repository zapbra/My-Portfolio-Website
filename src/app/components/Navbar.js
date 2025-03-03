export default function Navbar() {
    return (
        <div>
            {/* Start of mobile navbar */}
            <div className="px-2 py-2 justify-end gap-4 md:gap-16 mb-[16px] flex md:hidden">
                <div className="flex flex-col bg-slate-900 right-0 px-[16px]">
                    <a
                        href="#tech-stack"
                        className="text-xl font-bold hover:text-emerald-400 transition duration-300 "
                    >
                        Tech Stack
                    </a>
                    <a
                        href="#projects"
                        className="text-xl font-bold hover:text-emerald-400 transition duration-300"
                    >
                        Projects
                    </a>
                    <a
                        href="#about"
                        className="text-xl font-bold hover:text-emerald-400 transition duration-300"
                    >
                        About Me
                    </a>
                    <a
                        href="#contact"
                        className="text-xl font-bold hover:text-emerald-400 transition duration-300"
                    >
                        Contact
                    </a>
                </div>
            </div>
            {/* End of mobile navbar */}

            {/* Start of desktop navbar */}
            <div className="px-2 py-2 justify-end gap-4 md:gap-16 mb-[80px] hidden md:flex">
                <a
                    href="#tech-stack"
                    className="text-xl font-bold hover:text-emerald-400 transition duration-300 "
                >
                    Tech Stack
                </a>
                <a
                    href="#projects"
                    className="text-xl font-bold hover:text-emerald-400 transition duration-300"
                >
                    Projects
                </a>
                <a
                    href="#about"
                    className="text-xl font-bold hover:text-emerald-400 transition duration-300"
                >
                    About Me
                </a>
                <a
                    href="#contact"
                    className="text-xl font-bold hover:text-emerald-400 transition duration-300"
                >
                    Contact
                </a>
            </div>
            {/* End of desktop navbar */}
        </div>
    );
}
