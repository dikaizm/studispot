import Button from "./Button";

export default function Hero() {
    return (
        <main class="bg-[url('/hero-home.svg')] h-[688px] mx-auto">
            <div class="container mx-24 pt-24">
                <section>
                    <h1
                    class="text-white text-4.5xl font-bold leading-tight max-w-sm">Belajar bersama tanpa batas, mudah dan seru!
                    </h1>
                    <p class="text-white max-w-sm opacity-80 leading-loose pt-8">Temukan partner belajar, dapatkan solusi, dan tingkatkan pengetahuan kamu di sini!</p>
                </section>
                <div class="pt-12">
                    <Button color="text-spotBlue bg-white" size="hero" variant="arrow">Coba gratis</Button>
                </div>
                <div class="pt-20">
                    <div class="flex gap-x-4 max-w-sm">
                    <p class="text-xs text-white max-w-fit px-3 py-1.5 bg-white/30 rounded-full">10 ribu+ pengguna</p>
                    <p class="text-xs text-white max-w-fit px-3 py-1.5 bg-white/30 rounded-full">Jawaban terkurasi</p>
                    </div>
                    <div class="flex gap-x-4 max-w-sm pt-4">
                    <p class="text-xs text-white max-w-fit px-3 py-1.5 bg-white/30 rounded-full">500+ konten</p>
                    <p class="text-xs text-white max-w-fit px-3 py-1.5 bg-white/30 rounded-full">Makin produktif</p>
                    </div>
                </div>
            </div>
      </main>
    )
}