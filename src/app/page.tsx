import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BackgroundEffects from "@/components/landing/BackgroundEffects";
import CombinedSection from "@/components/landing/CombinedSection";
import FeaturesSection from "@/components/landing/FeatureSection";
import LandingSection from "@/components/landing/LandingSection";
import PaymentMethodsSection from "@/components/landing/PaymentMethodSection";
import PhoneMockup from "@/components/landing/PhoneMockup";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
      <BackgroundEffects />
      <MaxWidthWrapper className="mt-20 mb-24 flex flex-col items-center text-center flex-1">
        <LandingSection />
        <div className="hidden min-[900px]:block  w-full">
          <CombinedSection />
        </div>

        <div className="block min-[900px]:hidden w-full">
          <PhoneMockup />
          <FeaturesSection />
        </div>

        <PaymentMethodsSection />
      </MaxWidthWrapper>
    </div>
  );
}
