import Button from "./Button";

export default function Hero() {
    return (
        <main>
            <div class="h-[778px] absolute top-0 left-0 right-0">
                <img src="/hero-home2.svg" />
            </div>
            <div class="relative container mx-auto max-w-[1240px] pt-24">
                <section>
                    <h1
                    class="text-white text-4.5xl font-bold leading-tight max-w-sm">Belajar bersama tanpa batas, mudah dan seru!
                    </h1>
                    <p class="text-white max-w-sm opacity-80 leading-loose pt-8">Temukan partner belajar, dapatkan solusi, dan tingkatkan pengetahuan kamu di sini!</p>
                </section>
                <div class="pt-12">
                    <Button color="text-spotBlue bg-white" style="hero" variant="arrow">Coba gratis</Button>
                </div>
                <div class="flex flex-col gap-y-4 pt-20 pb-24">
                    <div class="flex gap-x-4">
                    <p class="text-xs text-white max-w-fit px-3 py-1.5 bg-white/30 rounded-full">10 ribu+ pengguna</p>
                    <p class="text-xs text-white max-w-fit px-3 py-1.5 bg-white/30 rounded-full">Jawaban terkurasi</p>
                    </div>
                    <div class="flex gap-x-4">
                    <p class="text-xs text-white max-w-fit px-3 py-1.5 bg-white/30 rounded-full">500+ konten</p>
                    <p class="text-xs text-white max-w-fit px-3 py-1.5 bg-white/30 rounded-full">Makin produktif</p>
                    </div>
                </div>
            </div>
      </main>
    )
}