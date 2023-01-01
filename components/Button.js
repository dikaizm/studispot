export default function Button({ click, color, variant, style, children }) {
    const addVariant = {
        "arrow-b": <img src="/button-arrow-b.svg" className="h-3 md:h-4" />,
        "arrow-w": <img src="/button-arrow-w.svg" className="h-3 md:h-4" />
    };

    const addStyle = {
        "normal": `px-6 py-2.5 gap-x-5`,
        "hero": `px-6 py-2.5 md:py-3 gap-x-5`,
        "card": `px-6 py-2.5 gap-x-28 xl:gap-x-32 lg:gap-x-24 md:gap-x-8`,
        "outline": `px-6 py-2.5 gap-x-5 border`
    }

    const pickedVariant = addVariant[variant];
    const pickedStyle = addStyle[style];
    
    return (
        <a  
            href={`${click}`}
            className={`font-bold text-sm md:text-base rounded-full text-center inline-flex items-center ${pickedStyle} ${color}`}>
            {children}
            
            {pickedVariant}
        </a>
    )
}