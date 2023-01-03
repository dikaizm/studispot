import Logo from "../components/Logo"
import Subscribe from "../components/Subscribe"
import Sitemap from "./Sitemap"

export default function Footer() {
    return (
        <footer className="relative bg-spotBlue/10 h-full mt-24 md:mt-32">
          <div className="container mx-auto px-4 md:px-10 pt-12">
            <div className="md:hidden pb-12">
              <p className="text-base font-bold text-spotBlue pb-5 max-w-[200px]">Dapatkan wawasan baru khusus untuk kamu!</p>
              <Subscribe />
            </div>
            <Logo className="h-7 max-w-fit" variant="normal" />
            <div className="grid md:grid-cols-2 gap-12 pt-9">
              <Sitemap />
              <div className="hidden md:block">
                <p className="text-xl font-bold text-spotBlue pb-5">Dapatkan wawasan baru khusus untuk kamu!</p>
                <Subscribe />
              </div>
            </div>
            <div>
                <div className="bg-slate-300 mt-12 h-[1px]"></div>
                <p className="text-center text-xs text-slate-500 pt-5 pb-5">© 2023 Studispot</p>
            </div>
          </div>
      </footer>
    )
}