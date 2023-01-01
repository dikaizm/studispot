export default function About() {
    return (
            <div className="container mx-auto xl:max-w-[1240px] lg:max-w-[1000px]">
                <div className="grid md:grid-cols-2 md:gap-x-16 md:items-center md:pt-24">
                    <img className="max-width-full" src="/about-us.svg" />
                <div>
                    <h2 className="max-w-lg text-spotBlue text-3xl font-bold">Kenalan dengan Studispot, yuk!</h2>
                    <p className="max-w-lg text-slate-600 leading-loose pt-10">
                        Studispot membantu pembelajar untuk memperluas pengetahuan dan mengembangkan keterampilan mereka, dengan memberikan akses ke komunitas pembelajar yang positif dan terbuka.<br /><br />
                    
                        <span className="font-bold">Dengan Studispot, pembelajar dapat belajar dengan lebih efektif dan menyenangkan dalam satu platform yang komprehensif.</span>
                    </p>
                </div>
                </div>
            </div>
    )
}