export default function Logo({ variant, className }) {
    const addVariant = {
        "normal": <img src="/logo-studispot.svg" />,
        "reverse": <img src="/logo-studispot-white.svg" />
    }

    const pickedVariant = addVariant[variant];

    return (
        <div className={`${className}`}>
            {pickedVariant}
        </div>
    )
}