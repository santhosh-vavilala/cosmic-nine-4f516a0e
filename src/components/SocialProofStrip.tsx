import { Star } from "lucide-react";

const proofItems = [
  "Trusted by astrology lovers",
  "Simple & easy to read",
  "Perfect for beginners",
  "Read anytime, anywhere",
];

const SocialProofStrip = () => {
  return (
    <div className="w-full overflow-hidden bg-secondary/50 backdrop-blur-sm py-4 border-y border-border/30">
      <div className="flex gap-8 md:gap-16 animate-scroll px-4 overflow-x-auto md:overflow-visible md:justify-center scrollbar-hide">
        {proofItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 whitespace-nowrap text-sm md:text-base text-foreground/90"
          >
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProofStrip;
