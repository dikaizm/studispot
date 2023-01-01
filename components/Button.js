export default function Button({ click, color, variant, style, children }) {
    const addVariant = {
        "arrow-b": <img src="/button-arrow-b.svg" />,
        "arrow-w": <img src="/button-arrow-w.svg" />
    };

    const addStyle = {
        "normal": `px-6 py-2.5 gap-x-5`,
        "hero": `px-6 py-3 gap-x-5`,
        "card": `px-6 py-2.5 gap-x-32`,
        "outline": `px-6 py-2.5 gap-x-5 border`
    }

    const pickedVariant = addVariant[variant];
    const pickedStyle = addStyle[style];
    
    return (
        <a  
            href={`${click}`}
            className={`font-bold rounded-full text-center inline-flex items-center ${pickedStyle} ${color}`}>
            {children}
            
            {pickedVariant}
        </a>
    )
}