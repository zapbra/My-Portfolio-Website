import TextListBox from "../TextListBox";
import TextListBoxWrapper from "../TextListBoxWrapper";

const programmingLanguages = [
    "JavaScript/Typescript",
    "C#",
    "Python",
    "HTML/CSS",
    "SQL",
    "Java",
    "Bash",
];

const frameworksAndLibraries = [
    "ReactJS",
    "NextJS",
    "ExpressJS",
    "Jest",
    "NodeJS",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Vite",
    "Django",
    ".NET",
    "Vitest",
    "XUnit",
    "PyTest",
];

const developerTools = [
    "Git",
    "npm",
    "pip",
    "NuGet",
    "Docker",
    "VS Code",
    "Visual Studio",
    "PyCharm",
    "IntelliJ",
    "Postman",
    "Figma",
    "Azure DevOps",
];

export default function TechStack() {
    return (
        <div id="tech-stack">
            <h2 className="text-6xl font-bold mb-[80px]">Tech Stack</h2>

            <div className="grid lg:grid-cols-2 gap-x-[32px] gap-y-[80px] justify-center">
                <TextListBoxWrapper
                    title="Programming Languages"
                    textArray={programmingLanguages}
                />

                <TextListBoxWrapper
                    title="Frameworks & Libraries"
                    textArray={frameworksAndLibraries}
                />

                <TextListBoxWrapper
                    title="Developer Tools"
                    textArray={developerTools}
                />
            </div>
        </div>
    );
}
