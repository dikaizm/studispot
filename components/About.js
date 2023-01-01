export default function About() {
    return (
            <div className="container mx-auto max-w-[1240px]">
                <div className="grid grid-cols-2 gap-16 items-center pt-24">
                    <img className="max-width-full" src="/about-us.svg" />
                <div>
                    <h2 className="max-w-lg text-spotBlue text-3xl font-bold">Kenalan dengan Studispot, yuk!</h2>
                    <p className="max-w-lg text-slate-600 leading-loose pt-10">
                        Studispot membantu pembelajar untuk memperluas pengetahuan dan mengembangkan keterampilan mereka, dengan memberikan akses ke komunitas pembelajar yang positif dan terbuka.<br /><br />
                    
                        Dengan Studispot, pembelajar dapat belajar dengan lebih efektif dan menyenangkan dalam satu platform yang komprehensif.
                    </p>
                </div>
                </div>
            </div>
    )
}