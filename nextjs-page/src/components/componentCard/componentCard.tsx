import Image from "next/image";

interface ComponentCardProps {
    title: string;
    img: string;
    price1: string;
    price2: string;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ title, img, price1, price2 }) => {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="w-52 h-52 relative border border-solid border-black rounded-lg overflow-hidden">
                <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover"
                    }} />
            </div>
            <div className="text-center">
                <h1 className="text-xl mb-2.5">{title}</h1>
                <p className="mb-2.5 font-light text-slate-500">{price1} - {price2}</p>
            </div>
        </div>
    );
};

export default ComponentCard;
