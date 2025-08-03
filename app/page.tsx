import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ProductsSection from "./components/ProductsSection"
import SolutionsSection from "./components/SolutionsSection"
import WhyKinetonSection from "./components/WhyKinetonSection"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <Header />
      <HeroSection />
      <ProductsSection />
      <SolutionsSection />
      <WhyKinetonSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
