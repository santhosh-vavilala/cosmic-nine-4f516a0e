import CTAButton from "./CTAButton";

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 p-4 safe-area-bottom">
      <CTAButton className="w-full" onClick={() => window.location.href = "https://rzp.io/rzp/L1WTiLCe"}>
        YES, I WANT THIS FOR ₹9 🔥
      </CTAButton>
    </div>
  );
};

export default StickyMobileCTA;
