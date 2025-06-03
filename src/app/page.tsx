import { PricingTable } from "@/components/pricing-table"
import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import ModoOscuroToggle from "@/components/ModoOscuroToggle"

export default function Home() {
  return (
    
    <main className="min-h-screen bg-grid-animation">
      <ModoOscuroToggle />
      <Hero />
      <Features />

      <About />
      <PricingTable />
      <Footer />
    </main>
  )
}