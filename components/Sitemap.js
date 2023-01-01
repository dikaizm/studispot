export default function Sitemap() {
    return (
        <nav>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:flex md:gap-20 text-slate-600 text-sm">
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
    )
}