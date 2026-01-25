import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  features: string[];
  className?: string;
}

const FeatureCard = ({ title, features, className }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "bg-card/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-border/30",
        "box-glow-cosmic transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-6">
        {title}
      </h3>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-foreground/90"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm md:text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
