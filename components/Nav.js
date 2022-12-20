export default function Nav({ color }) {
    const addColor = color ? ` ${color}` : "";

    return (
        <nav class="grid grid-cols-3 text-sm gap-x-14 min-w-max">
            <div class="flex gap-x-2.5 items-center">
                <img class="h-5" src="/nav-icon-spotbelajar.svg"/>
                <a class={`font-bold ${addColor}`}>Spot Belajar</a>
            </div>
            <div class="flex gap-x-2.5 items-center">
                <img class="h-5" src="/nav-icon-spottanya.svg"/>
                <a class={`font-bold ${addColor}`}>Spot Tanya</a>
            </div>
            <div class="flex gap-x-2.5 items-center">
                <img class="h-5" src="/nav-icon-spotbaca.svg"/>
                <a class={`font-bold ${addColor}`}>Spot Baca</a>
            </div>
        </nav>
    )
}