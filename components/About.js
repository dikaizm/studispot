export default function About() {
    return (
            <div className="container mx-auto px-4 sm:px-0 xl:max-w-[1240px] lg:max-w-[1000px]">
                <div className="grid pt-20 md:grid-cols-2 md:gap-x-16 md:items-center md:pt-24">
                    <img className="max-width-full" src="/about-us.svg" />
                <div className="px-5 pt-5 sm:px-0 sm:pt-0">
                    <h2 className="max-w-[220px] sm:max-w-lg text-spotBlue text-2xl sm:text-3xl font-bold">Kenalan dengan Studispot, yuk!</h2>
                    <p className="max-w-lg text-sm sm:text-base text-slate-600 pt-6 sm:pt-10">
                        <span className="leading-loose">Studispot membantu pembelajar untuk memperluas pengetahuan dan mengembangkan keterampilan mereka, dengan memberikan akses ke komunitas pembelajar yang positif dan terbuka.</span><br /><br />
                    
                        <span className="font-bold leading-loose">Dengan Studispot, pembelajar dapat belajar dengan lebih efektif dan menyenangkan dalam satu platform yang komprehensif.</span>
                    </p>
                </div>
                </div>
            </div>
    )
}