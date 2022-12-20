export default function Nav() {
    return (
        <nav className="flex text-sm w-4/12 gap-x-14 min-w-max">
            <div className="flex gap-x-2.5 items-center">
                <img className="h-5" src="/nav-icon-spotbelajar.svg"/>
                <a className="text-white font-bold">Spot Belajar</a>
            </div>
            <div className="flex gap-x-2.5 items-center">
                <img className="h-5" src="/nav-icon-spottanya.svg"/>
                <a className="text-white font-bold">Spot Tanya</a>
            </div>
            <div className="flex gap-x-2.5 items-center">
                <img className="h-5" src="/nav-icon-spotbaca.svg"/>
                <a className="text-white font-bold">Spot Baca</a>
            </div>
        </nav>
    )
}