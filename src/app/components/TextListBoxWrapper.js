import TextListBox from "./TextListBox";

const colors = [
    "bg-emerald-400",
    "bg-sky-400",
    "bg-yellow-400",
    "bg-violet-400",
    "bg-rose-400",
];

export default function TextListBoxWrapper({ title, textArray }) {
    const textBoxes = textArray.map((text, index) => {
        return (
            <p
                key={text}
                className={`${
                    colors[index % colors.length]
                } text-slate-950 px-4 py-1 rounded-xl font-secondary`}
            >
                {text}
            </p>
        );
    });

    return (
        <div className="max-w-[600px]">
            <h2 className="text-3xl font-light mb-4">{title}</h2>
            <div className="bg-slate-800 px-8 py-6 rounded-3xl">
                <TextListBox textArray={textArray} />
            </div>
        </div>
    );
}
