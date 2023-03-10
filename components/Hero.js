import Button from "./Button";

export default function Hero() {
    return (
        <main className="h-[calc(100vh-56px)] md:h-[calc(100vh-80px)]">
            <div className="bg-[url('/hero-home-m.svg')] md:bg-[url('/hero-home.svg')] absolute top-0 left-0 right-0 h-screen bg-cover bg-center z-10">
            </div>
            <div className="relative container mx-auto px-4 md:px-10 pt-[calc(100vh/2.7)] md:pt-24 h-[calc(100vh-56px)] md:h-[calc(100vh-80px)] z-20">
                <section>
                    <h1
                    className="text-white text-3xl md:text-4.5xl font-bold leading-tight max-w-[260px] sm:max-w-sm">Belajar bersama tanpa batas, mudah dan seru!
                    </h1>
                    <p className="text-white text-sm md:text-base max-w-sm opacity-80 leading-loose md:leading-loose pt-6 md:pt-8">Temukan partner belajar, dapatkan solusi, dan tingkatkan pengetahuan kamu di sini!</p>
                </section>
                <div className="pt-8 md:pt-12">
                    <Button click="/belajar" color="text-spotBlue bg-white" style="hero" variant="arrow-b">Coba gratis</Button>
                </div>
                <div className="absolute bottom-12 tall:bottom-36 short:hidden">
                    <div className="flex flex-wrap gap-y-2 md:max-w-[calc(100vh/2)] md:gap-y-4 pt-14 md:pt-20 gap-x-2 md:gap-x-4">
                            <p className="text-[10px] md:text-xs text-white/80 max-w-fit px-3 py-1.5 bg-white/30 rounded-full">10 ribu+ pengguna</p>
                            <p className="text-[10px] md:text-xs text-white/80 max-w-fit px-3 py-1.5 bg-white/30 rounded-full">Jawaban terkurasi</p>
                            <p className="text-[10px] md:text-xs text-white/80 max-w-fit px-3 py-1.5 bg-white/30 rounded-full">500+ konten</p>
                            <p className="text-[10px] md:text-xs text-white/80 max-w-fit px-3 py-1.5 bg-white/30 rounded-full">Makin produktif</p>
                    </div>
                </div>
            </div>
      </main>
    )
}