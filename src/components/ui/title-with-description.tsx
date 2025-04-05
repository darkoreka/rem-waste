type TitleWithDescriptionProps = {
    title: string;
    description: string;
    className?: string;
};

export default function TitleWithDescription({ title, description, className = "" }: TitleWithDescriptionProps) {
    return (
        <div className={`mt-12 text-center ${className}`}>
            <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
            <p className="mt-3 text-gray-400">{description}</p>
        </div>
    );
}