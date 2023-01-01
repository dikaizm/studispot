export default function About() {
    return (
            <div className="container mx-auto px-4 md:px-10">
                <div className="grid pt-20 md:grid-cols-2 md:gap-x-16 md:items-center md:pt-24">
                    <img className="max-width-full" src="/about-us.svg" />
                <div className="px-5 pt-5 md:px-0 md:pt-0">
                    <h2 className="max-w-[220px] md:max-w-lg text-spotBlue text-2xl md:text-3xl font-bold">Kenalan dengan Studispot, yuk!</h2>
                    <p className="max-w-lg text-sm md:text-base text-slate-600 pt-6 md:pt-10">
                        <span className="leading-loose">Studispot membantu pembelajar untuk memperluas pengetahuan dan mengembangkan keterampilan mereka, dengan memberikan akses ke komunitas pembelajar yang positif dan terbuka.</span><br /><br />
                    
                        <span className="font-bold leading-loose">Dengan Studispot, pembelajar dapat belajar dengan lebih efektif dan menyenangkan dalam satu platform yang komprehensif.</span>
                    </p>
                </div>
                </div>
            </div>
    )
}