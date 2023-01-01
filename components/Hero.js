import Button from "./Button";

export default function Hero() {
    return (
        <main>
            <div className="bg-[url('/hero-home-m.svg')] sm:bg-[url('/hero-home.svg')] absolute top-0 left-0 right-0 h-screen bg-cover bg-center">
            </div>
            <div className="relative container mx-auto px-4 sm:px-0 xl:max-w-[1240px] lg:max-w-[1000px] pt-60 sm:pt-24 h-[calc(100vh-80px)] overflow-hidden">
                <section>
                    <h1
                    className="text-white text-3xl sm:text-4.5xl font-bold leading-tight  max-w-xs sm:max-w-sm">Belajar bersama tanpa batas,<br /> mudah dan seru!
                    </h1>
                    <p className="text-white text-sm sm:text-base max-w-sm opacity-80 leading-loose pt-6 sm:pt-8">Temukan partner belajar, dapatkan solusi, dan tingkatkan pengetahuan kamu di sini!</p>
                </section>
                <div className="pt-8 sm:pt-12">
                    <Button click="/belajar" color="text-spotBlue bg-white" style="hero" variant="arrow-b">Coba gratis</Button>
                </div>
                <div className="flex flex-col gap-y-4 pt-6 sm:pt-20">
                    <div className="flex gap-x-4">
                        <p className="text-[10px] sm:text-xs text-white/80 max-w-fit px-3 py-1.5 bg-white/30 rounded-full">10 ribu+ pengguna</p>
                        <p className="text-[10px] sm:text-xs text-white/80 max-w-fit px-3 py-1.5 bg-white/30 rounded-full">Jawaban terkurasi</p>
                    </div>
                    <div className="flex gap-x-4">
                        <p className="text-[10px] sm:text-xs text-white/80 max-w-fit px-3 py-1.5 bg-white/30 rounded-full">500+ konten</p>
                        <p className="text-[10px] sm:text-xs text-white/80 max-w-fit px-3 py-1.5 bg-white/30 rounded-full">Makin produktif</p>
                    </div>
                </div>
            </div>
      </main>
    )
}