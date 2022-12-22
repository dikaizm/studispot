export default function Nav({ color }) {
    const addColor = color ? ` ${color}` : "";

    return (
        <nav className="grid grid-cols-3 text-sm gap-x-14 min-w-max justify-self-center">
            <div className="flex gap-x-2.5 items-center">
                <img className="h-5" src="/nav-icon-spotbelajar.svg"/>
                <a href="#" className={`font-bold ${addColor}`}>Spot Belajar</a>
            </div>
            <div className="flex gap-x-2.5 items-center">
                <img className="h-5" src="/nav-icon-spottanya.svg"/>
                <a href="#" className={`font-bold ${addColor}`}>Spot Tanya</a>
            </div>
            <div className="flex gap-x-2.5 items-center">
                <img className="h-5" src="/nav-icon-spotbaca.svg"/>
                <a href="#" className={`font-bold ${addColor}`}>Spot Baca</a>
            </div>
        </nav>
    )
}