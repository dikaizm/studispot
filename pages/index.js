import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Product from "../components/Product"
import Logo from "../components/Logo"
import Search from "../components/Search"
import Subscribe from "../components/Subscribe"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section class="bg-spotBlue/10 relative h-[720px]">
        <About />
        <Product />
      </section>

      <section class="mt-[525px]">
        <Search />
      </section>

      <footer class="bg-spotBlue/10 h-[360px] mt-40">
        <div class="container mx-auto max-w-[1240px] pt-12">
          <Logo size="h-7" variant="normal" />
          <div class="grid grid-cols-2 gap-20 pt-9">
            <nav>
              <div class="flex gap-20 text-slate-600 text-sm">
                <ul class="flex flex-col gap-y-5">
                  <li><p class="font-bold">Tentang</p></li>
                  <li><a>Tentang Kami</a></li>
                  <li><a>Syarat dan Ketentuan</a></li>
                  <li><a>Kebijakan Privasi</a></li>
                </ul>
                <ul class="flex flex-col gap-y-5">
                  <li><p class="font-bold">Produk</p></li>
                  <li><a>Spot Belajar</a></li>
                  <li><a>Spot Tanya</a></li>
                  <li><a>Spot Baca</a></li>
                </ul>
                <ul class="flex flex-col gap-y-5">
                  <li><p class="font-bold">Hubungi Kami</p></li>
                  <li><a>Kontak</a></li>
                  <li><a>Bantuan</a></li>
                </ul>
              </div>
              
            </nav>
            <div>
              <p class="text-xl font-bold text-spotBlue pb-5">Dapatkan wawasan baru khusus untuk kamu!</p>
              <Subscribe />
            </div>
          </div>
          <div class="bg-slate-300 mt-12 h-[1px]">
          </div>
          <p class="text-center text-xs text-slate-500 pt-5">© 2022 Studispot</p>
        </div>
      </footer>
    </>
  )
}