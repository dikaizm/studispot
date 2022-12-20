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
      <section class="bg-spotBlue/10 relative h-[720px]">
        <About />
        <Product />
      </section>
      <Content />
      <Footer />
    </>
  )
}