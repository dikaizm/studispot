import Button from "./Button"

function ProductItem({ icon, name, nameColor, desc, buttonColor, click }) {
    const addIcon = ` ${icon}`

    const addNameColor = ` ${nameColor}`

    const addButtonColor = ` ${buttonColor}`

    return (
        <div className="relative flex flex-col items-center bg-white md:max-w-[350px] h-[340px] lg:h-[436px] drop-shadow-xl rounded-8xl">
            <img src={`${addIcon}`} className="pt-8 pb-5 w-[100px] lg:w-[142px] lg:pt-14 lg:pb-8" />
            <h3 className={`text-xl lg:text-2xl font-bold text-center ${addNameColor}`}>{name}</h3>
            <p className="text-center text-sm lg:text-base leading-relax text-slate-500 xl:max-w-[280px] lg:max-w-[250px] max-w-[200px] pt-3">{desc}</p>
            <div className="absolute bottom-8 px-4">
                <Button click={`${click}`} style="card" color={`text-white ${addButtonColor}`} variant="arrow-w">Coba gratis</Button>
            </div>
        </div>
    )
}

export default function Product() {
    return (
        <section className="relative right-0 left-0 pt-14">
            <div className="container mx-auto px-9 md:px-10">
                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 lg:gap-x-8 md:gap-x-6">
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