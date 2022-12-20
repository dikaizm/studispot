export default function Button({ color, variant, style, children }) {
    const addColor = color ? ` ${color}` : "";

    const variants = {
        "arrow": <img src="/button-arrow.svg" />
    };

    const styles = {
        "normal": `px-6 py-2.5 gap-x-5`,
        "hero": `px-6 py-3 gap-x-5`,
        "card": `px-6 py-2.5 gap-x-32`,
    }

    const pickedVariant = variants[variant];
    const pickedStyle = styles[style];
    
    return (
        <button
            type="button"
            class={`font-bold rounded-full px-6 text-center inline-flex items-center ${pickedStyle}${addColor}`}>
            {children}
            
            {pickedVariant}
        </button>
    )
}