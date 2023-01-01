export default function Logo({ variant, className }) {
    const addVariant = {
        "normal": <img src="/logo-studispot.svg" className={`${className}`} />,
        "reverse": <img src="/logo-studispot-white.svg" className={`${className}`} />
    }

    const pickedVariant = addVariant[variant];

    return (
        <a href="/">
            {pickedVariant}
        </a>
    )
}