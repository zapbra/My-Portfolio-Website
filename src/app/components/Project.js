import TextListBox from "./TextListBox";

export default function Project({
    name,
    stackList,
    description,
    url,
    classes,
    link = null,
}) {
    return (
        <div
            className={`flex flex-col md:flex-row justify-between gap-x-[32px] ${classes}`}
        >
            <div className="flex-1 mb-8 md:mb-0">
                <h3 className="text-3xl mb-4">{name}</h3>
                <div className="mb-8">
                    <TextListBox textArray={stackList} />
                </div>
                <p className="mb-2">{description} </p>
                {link && <a href={link}>{link}</a>}
            </div>

            <div className="flex-1">
                <img src={url} />
            </div>
        </div>
    );
}
