import Logo from "../components/Logo"
import Subscribe from "../components/Subscribe"

export default function Footer() {
    return (
        <footer className="bg-spotBlue/10 h-[360px] mt-32">
        <div className="container mx-auto max-w-[1240px] pt-12">
          <Logo className="h-7" variant="normal" />
          <div className="grid grid-cols-2 gap-20 pt-9">
            <nav>
              <div className="flex gap-20 text-slate-600 text-sm">
                <ul className="flex flex-col gap-y-5">
                  <li><p className="font-bold">Tentang</p></li>
                  <li><a>Tentang Kami</a></li>
                  <li><a>Syarat dan Ketentuan</a></li>
                  <li><a>Kebijakan Privasi</a></li>
                </ul>
                <ul className="flex flex-col gap-y-5">
                  <li><p className="font-bold">Produk</p></li>
                  <li><a>Spot Belajar</a></li>
                  <li><a>Spot Tanya</a></li>
                  <li><a>Spot Baca</a></li>
                </ul>
                <ul className="flex flex-col gap-y-5">
                  <li><p className="font-bold">Hubungi Kami</p></li>
                  <li><a>Kontak</a></li>
                  <li><a>Bantuan</a></li>
                </ul>
              </div>
            </nav>
            <div>
              <p className="text-xl font-bold text-spotBlue pb-5">Dapatkan wawasan baru khusus untuk kamu!</p>
              <Subscribe />
            </div>
          </div>
          <div className="bg-slate-300 mt-12 h-[1px]">
          </div>
          <p className="text-center text-xs text-slate-500 pt-5">© 2022 Studispot</p>
        </div>
      </footer>
    )
}