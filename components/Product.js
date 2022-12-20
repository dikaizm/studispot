import Button from "./Button"

function ProductItem({ icon, name, nameColor, desc, buttonColor }) {
    const addIcon = ` ${icon}`

    const addNameColor = ` ${nameColor}`

    const addButtonColor = ` ${buttonColor}`

    return (
        <div class="relative flex flex-col items-center bg-white max-w-[350px] h-[480px] drop-shadow-xl rounded-8xl">
            <img src={`${addIcon}`} class="max-[142px] pt-16 pb-12 px-10" />
            <h3 class={`text-2xl font-bold text-center ${addNameColor}`}>{name}</h3>
            <p class="text-center leading-loose text-slate-500 max-w-[280px] pt-5">{desc}</p>
            <div class="absolute bottom-8 px-4">
                <Button style="card" color={`text-white ${addButtonColor}`} variant="arrow-w">Coba gratis</Button>
            </div>
        </div>
    )
}

export default function Product() {
    return (
        <section class="absolute top-[590px] right-0 left-0 h-[720px]">
            <div class="container mx-auto max-w-[1114px]">
                <div class="grid grid-cols-3 gap-x-8">
                    <ProductItem
                        icon="/card-icon-spotbelajar.svg"
                        name="Spot Belajar"
                        nameColor="text-spotBlue"
                        desc="Belajar efektif dengan tatap muka secara virtual."
                        buttonColor="bg-spotBlue"
                    />
                    <ProductItem
                        icon="/card-icon-spottanya.svg"
                        name="Spot Tanya"
                        nameColor="text-spotOrange"
                        desc="Cari jawaban dari pertanyaan-pertanyaanmu."
                        buttonColor="bg-spotOrange"
                    />
                    <ProductItem
                        icon="/card-icon-spotbaca.svg"
                        name="Spot Baca"
                        nameColor="text-spotPurple"
                        desc="Dapatkan konten bermanfaat dari teman-teman belajar."
                        buttonColor="bg-spotPurple"
                    />
                </div>
            </div>
        </section>
    )
}