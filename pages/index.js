import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Product from "../components/Product"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section class="bg-spotBlue/10 relative h-[720px] z-0">
        <About />
        <Product />
      </section>
      
    </>
  )
}