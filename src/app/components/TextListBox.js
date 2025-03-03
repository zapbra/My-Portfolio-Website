const colors = [
    "bg-emerald-400",
    "bg-sky-400",
    "bg-yellow-400",
    "bg-violet-400",
    "bg-rose-400",
];

export default function TextListBox({ textArray }) {
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

    return <div className="flex flex-wrap gap-x-4 gap-y-6  ">{textBoxes}</div>;
}
