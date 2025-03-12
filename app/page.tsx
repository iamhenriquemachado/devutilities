import { UtilityGrid } from "@/components/utility-grid"
import { HeroSection } from "@/components/hero-section"
import { RecentlyUsed } from "@/components/recently-used"

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <RecentlyUsed />
      <UtilityGrid />
    </div>
  )
}

