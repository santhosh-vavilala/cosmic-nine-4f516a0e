import { Check, X } from "lucide-react";

const perfectFor = [
  "You enjoy astrology",
  "You want clarity, not fear",
  "You love self-growth",
  "You want a meaningful ₹9 purchase",
];

const notFor = [
  "You expect miracles",
  "You dislike self-reflection",
];

const FilterSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Perfect for you */}
          <div className="bg-card/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-primary/30 box-glow-gold">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-6">
              ✨ Perfect for you if…
            </h3>
            <ul className="space-y-4">
              {perfectFor.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="bg-card/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-border/30">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-muted-foreground mb-6">
              Not for you if…
            </h3>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
