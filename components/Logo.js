export default function Logo({ variant, size }) {
    const addVariant = {
        "normal": <img src="/logo-studispot.svg" />,
        "reverse": <img src="/logo-studispot-white.svg" />
    }

    const addSize = ` ${size}`

    const pickedVariant = addVariant[variant];

    return (
        <div class={`${size}`}>
            {pickedVariant}
        </div>
    )
}