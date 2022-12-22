import Button from "./Button"

function ProductItem({ icon, name, nameColor, desc, buttonColor, click }) {
    const addIcon = ` ${icon}`

    const addNameColor = ` ${nameColor}`

    const addButtonColor = ` ${buttonColor}`

    return (
        <div className="relative flex flex-col items-center bg-white max-w-[350px] h-[436px] drop-shadow-xl rounded-8xl">
            <img src={`${addIcon}`} className="max-[142px] pt-14 pb-8 px-10" />
            <h3 className={`text-2xl font-bold text-center ${addNameColor}`}>{name}</h3>
            <p className="text-center leading-relax text-slate-500 max-w-[280px] pt-3">{desc}</p>
            <div className="absolute bottom-8 px-4">
                <Button click={`${click}`} style="card" color={`text-white ${addButtonColor}`} variant="arrow-w">Coba gratis</Button>
            </div>
        </div>
    )
}

export default function Product() {
    return (
        <section className="absolute top-[590px] right-0 left-0 h-[720px]">
            <div className="container mx-auto max-w-[1114px]">
                <div className="grid grid-cols-3 gap-x-8">
                    <ProductItem
                        icon="/card-icon-spotbelajar.svg"
                        name="Spot Belajar"
                        nameColor="text-spotBlue"
                        desc="Belajar efektif dengan tatap muka secara virtual."
                        buttonColor="bg-spotBlue"
                        click="/belajar"
                    />
                    <ProductItem
                        icon="/card-icon-spottanya.svg"
                        name="Spot Tanya"
                        nameColor="text-spotOrange"
                        desc="Cari jawaban dari pertanyaan-pertanyaanmu."
                        buttonColor="bg-spotOrange"
                        click="/tanya"
                    />
                    <ProductItem
                        icon="/card-icon-spotbaca.svg"
                        name="Spot Baca"
                        nameColor="text-spotPurple"
                        desc="Dapatkan konten bermanfaat dari teman-teman belajar."
                        buttonColor="bg-spotPurple"
                        click="/baca"
                    />
                </div>
            </div>
        </section>
    )
}