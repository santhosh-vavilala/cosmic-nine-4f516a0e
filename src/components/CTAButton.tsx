import { useState } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large";
  onClick?: () => void;
}

const CTAButton = ({ children, className, size = "default", onClick }: CTAButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick?.();
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden rounded-pill font-semibold transition-all duration-300",
        "gradient-gold-shimmer animate-shimmer",
        "text-primary-foreground shadow-lg",
        "hover:scale-105 hover:shadow-xl active:scale-95",
        "animate-pulse-glow",
        size === "large" 
          ? "px-8 py-5 text-lg md:text-xl" 
          : "px-6 py-4 text-base md:text-lg",
        isClicked && "animate-bounce-subtle",
        className
      )}
    >
      {/* Shimmer overlay */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/20 to-transparent -translate-x-full animate-shimmer" />
      
      <span className="relative z-10 flex items-center justify-center gap-2 font-bold">
        {children}
      </span>

      {/* Confetti effect on click */}
      {isClicked && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="absolute w-2 h-2 rounded-full bg-foreground animate-ping"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      )}
    </button>
  );
};

export default CTAButton;
