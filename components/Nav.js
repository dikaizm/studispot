export default function Nav({ color }) {

    return (
        <nav className="grid grid-flow-row gap-y-4 lg:grid-flow-col lg:text-sm lg:gap-x-14 min-w-max lg:justify-self-center">
            <a href="/belajar">
                <div className="flex gap-x-2.5 items-center">
                    <img className="h-5" src="/nav-icon-spotbelajar.svg"/>
                    <p className={`font-bold ${color}`}>Spot Belajar</p>
                </div>
            </a>
            <a href="/tanya">
                <div className="flex gap-x-2.5 items-center">
                    <img className="h-5" src="/nav-icon-spottanya.svg"/>
                    <p className={`font-bold ${color}`}>Spot Tanya</p>
                </div>
            </a>
            <a href="/baca">
                <div className="flex gap-x-2.5 items-center">
                    <img className="h-5" src="/nav-icon-spotbaca.svg"/>
                    <p className={`font-bold ${color}`}>Spot Baca</p>
                </div>
            </a>
        </nav>
    )
}