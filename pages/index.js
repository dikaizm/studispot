import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Product from "../components/Product"
import Footer from "../components/Footer"
import Content from "../components/Content"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="bg-spotBlue/10 relative h-[1620px] sm:h-[1680px] md:h-[700px]  -z-0">
        <About />
        <Product />
      </section>
      <Content />
      <Footer />
    </>
  )
}