export default function Nav({ color }) {
    return (
        <nav className="grid grid-flow-row gap-y-12 text-lg justify-items-center lg:text-sm lg:grid-flow-col lg:gap-x-12">
            <a href="/belajar">
                <div className="flex gap-x-4 md:gap-x-2.5 items-center">
                    <img className="h-7 md:h-5" src="/nav-icon-spotbelajar.svg"/>
                    <p className={`font-bold min-w-max ${color}`}>Spot Belajar</p>
                </div>
            </a>
            <a href="/tanya">
                <div className="flex gap-x-4 md:gap-x-2.5 items-center">
                    <img className="h-7 md:h-5" src="/nav-icon-spottanya.svg"/>
                    <p className={`font-bold min-w-max ${color}`}>Spot Tanya</p>
                </div>
            </a>
            <a href="/baca">
                <div className="flex gap-x-4 md:gap-x-2.5 items-center">
                    <img className="h-7 md:h-5" src="/nav-icon-spotbaca.svg"/>
                    <p className={`font-bold min-w-max ${color}`}>Spot Baca</p>
                </div>
            </a>
        </nav>
    )
}