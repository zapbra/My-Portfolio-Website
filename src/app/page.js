import Image from "next/image";
import Introduction from "./components/Homepage/Introduction";
import TechStack from "./components/Homepage/TechStack";

export default function Home() {
    return (
        <div>
            <div className="mb-[200px]">
                <Introduction />
            </div>
            <TechStack />
        </div>
    );
}
