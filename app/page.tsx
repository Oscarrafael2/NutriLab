import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProgramSection } from "@/components/program-section"
import { DonationSection } from "@/components/donation-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <ProgramSection />
        <DonationSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  )
}
