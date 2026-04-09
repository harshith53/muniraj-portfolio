import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { LegacySection } from "@/components/sections/legacy-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { MomentsSection } from "@/components/sections/moments-section";
import { JoinSection } from "@/components/sections/join-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <LegacySection />
        <TimelineSection />
        <MomentsSection />
        <JoinSection />
      </main>
      <SiteFooter />
    </>
  );
}
