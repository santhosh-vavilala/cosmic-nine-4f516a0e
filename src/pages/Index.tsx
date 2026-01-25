import { useEffect, useState } from "react";
import { Shield, Zap, CreditCard, BookOpen } from "lucide-react";
import StarBackground from "@/components/StarBackground";
import CountdownTimer from "@/components/CountdownTimer";
import CTAButton from "@/components/CTAButton";
import SocialProofStrip from "@/components/SocialProofStrip";
import PriceDisplay from "@/components/PriceDisplay";
import FeatureCard from "@/components/FeatureCard";
import FilterSection from "@/components/FilterSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ebookCover from "@/assets/ebook-cover.png";
import mockUp from "@/assets/mock-up.png";

const Index = () => {
  const [shakeButton, setShakeButton] = useState(false);

  // Periodic shake animation for mid-page CTA
  useEffect(() => {
    const interval = setInterval(() => {
      setShakeButton(true);
      setTimeout(() => setShakeButton(false), 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />

      {/* Main content */}
      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center py-12 md:py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left - Ebook mockup */}
              <div className="order-2 md:order-1 flex justify-center">
                <div className="animate-float">
                  <img
                    src={ebookCover}
                    alt="The Complete Horoscope 2026 Ebook"
                    className="w-64 md:w-80 lg:w-96 drop-shadow-2xl box-glow-gold rounded-lg"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 md:order-2 text-center md:text-left space-y-6 md:space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground text-glow-white leading-tight">
                    🔥 The Complete Horoscope 2026
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Your full-year zodiac guide — now at a once-in-a-lifetime price
                  </p>
                </div>

                <PriceDisplay />

                {/* Urgency line */}
                <p className="text-destructive font-semibold animate-pulse text-lg">
                  ⚠️ Hurry! This offer ends very soon
                </p>

                <CTAButton size="large" onClick={() => window.open("#", "_blank")}>
                  Get Instant Access for ₹9
                </CTAButton>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-foreground">
                  <span className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-primary" />
                    Instant access
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-primary" />
                    No subscription
                  </span>
                  <span className="flex items-center gap-1">
                    <CreditCard className="w-4 h-4 text-primary" />
                    Secure payment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTDOWN TIMER SECTION */}
        <section className="py-8 md:py-12 bg-secondary/30 backdrop-blur-sm">
          <div className="container max-w-4xl mx-auto px-4">
            <CountdownTimer />
          </div>
        </section>

        {/* SOCIAL PROOF STRIP */}
        <SocialProofStrip />

        {/* WHY THIS BOOK WORKS */}
        <section className="py-16 md:py-24 px-4">
          <div className="flex justify-center mb-8">
            <img src={mockUp} alt="Mock up" className="w-90 drop-shadow-2xl" />
          </div>
          <div className="container max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Why This EBook Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Most horoscope books are confusing or scary. This one is calm, clear, and written for real life.
              </p>
            </div>

            <FeatureCard
              title="What Makes It Different"
              features={[
                "Full-year guidance for all 12 zodiac signs",
                "Personality + relationship insights",
                "No fear-based predictions",
                "Written in simple, reassuring language",
              ]}
              className="max-w-2xl mx-auto"
            />
          </div>
        </section>

        {/* WHAT YOU GET SECTION */}
        <section className="py-16 md:py-24 px-4 bg-secondary/20">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                What You Get for ₹9
              </h2>
              <p className="text-lg text-muted-foreground">
                Worth ₹199 — Today Only
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Book preview stack */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -rotate-6 top-4 left-4 opacity-60">
                    <img
                      src={ebookCover}
                      alt="Book preview"
                      className="w-48 md:w-56 rounded-lg"
                    />
                  </div>
                  <div className="relative rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                    <img
                      src={ebookCover}
                      alt="The Complete Horoscope 2026"
                      className="w-48 md:w-56 rounded-lg box-glow-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Value checklist */}
              <FeatureCard
                title="Everything Included"
                features={[
                  "Complete zodiac personality for your sign",
                  "Compatibility explained clearly",
                  "Strengths, challenges & growth guidance",
                  "A Ebook you'll return to all year",
                ]}
              />
            </div>

            {/* Discount badge */}
            <div className="flex justify-center mt-12">
              <div className="bg-primary/20 border border-primary/50 rounded-full px-6 py-3 animate-pulse">
                <span className="text-primary text-center font-bold text-lg">
                  🏷️ Massive 95% Discount – Today Only
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EMOTIONAL CONNECTION */}
        <section className="py-20 md:py-28 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground leading-relaxed">
                "Astrology doesn't control your life.
                <br />
                <span className="text-primary text-glow">Your choices do.</span>
                <br />
                This EBook simply helps you understand yourself better."
              </p>
            </div>
            <div className="mt-12 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </section>

        {/* SECOND CTA */}
        <section className="py-16 md:py-20 px-4 bg-card/40 backdrop-blur-sm">
          <div className="container max-w-xl mx-auto text-center space-y-8">
            <CTAButton
              size="large"
              className={shakeButton ? "animate-shake" : ""}
              onClick={() => window.open("#", "_blank")}
            >
              Unlock My Horoscope for ₹9
            </CTAButton>
            <p className="text-muted-foreground animate-pulse">
              ⚡ Thousands miss this deal every day
            </p>
          </div>
        </section>

        {/* WHO THIS IS FOR / NOT FOR */}
        <FilterSection />

        {/* FINAL URGENCY + CTA */}
        <section className="py-20 md:py-28 px-4 bg-gradient-to-t from-cosmic-purple/50 to-transparent">
          <div className="container max-w-xl mx-auto text-center space-y-8">
            {/* Price comparison */}
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground">
                Earlier: <span className="line-through text-destructive">₹199</span>
              </p>
              <p className="text-5xl md:text-6xl font-bold text-primary text-glow">
                Today: ₹9 ONLY
              </p>
            </div>

            {/* Urgency with fire */}
            <p className="text-lg text-destructive font-semibold animate-pulse">
              🔥 Offer ending soon — don't wait
            </p>

            {/* Countdown repeat */}
            <CountdownTimer />

            {/* Final CTA */}
            <CTAButton size="large" onClick={() => window.open("#", "_blank")}>
              YES, I WANT THIS FOR ₹9
            </CTAButton>
          </div>
        </section>

        {/* FOOTER TRUST */}
        <footer className="py-12 md:py-16 px-4 bg-secondary/30 border-t border-border/30 mb-20 md:mb-0">
          <div className="container max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <CreditCard className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground">One-time payment</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground">No hidden charges</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground">Instant delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="text-sm text-foreground">Read at your pace</span>
              </div>
            </div>
            <p className="text-center text-sm text-foreground mt-8">
              Price will return to ₹199 soon
            </p>
          </div>
        </footer>
      </div>

      {/* Sticky mobile CTA */}
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
