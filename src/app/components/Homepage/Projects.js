import Project from "../Project";

export default function Projects() {
    return (
        <div id="projects">
            <h1 className="text-6xl font-bold mb-[80px]">My Projects</h1>

            <div className="mb-[80px]">
                <Project
                    name="Project one"
                    description="This is the epic project description"
                    stackList={["react", "nextjs"]}
                    url="images/skateboarding-tricks.jpg"
                    link="google.com"
                />
            </div>

            <div className="mb-[80px]">
                <Project
                    name="Project one"
                    description="This is the epic project description"
                    stackList={["react", "nextjs"]}
                    url="images/skateboarding-tricks.jpg"
                    classes={"md:flex-row-reverse"}
                    link="google.com"
                />
            </div>

            <div className="mb-[80px]">
                <Project
                    name="Project one"
                    description="This is the epic project description"
                    stackList={["react", "nextjs"]}
                    url="images/skateboarding-tricks.jpg"
                    link="google.com"
                />
            </div>

            <div className="mb-[80px]">
                <Project
                    name="Project one"
                    description="This is the epic project description"
                    stackList={["react", "nextjs"]}
                    url="images/skateboarding-tricks.jpg"
                    classes={"md:flex-row-reverse"}
                    link="google.com"
                />
            </div>
        </div>
    );
}
