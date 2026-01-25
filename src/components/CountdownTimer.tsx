import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches 0
          hours = 2;
          minutes = 47;
          seconds = 33;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-muted-foreground text-sm uppercase tracking-widest">
        Offer expires in
      </p>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-bold text-destructive font-sans tabular-nums animate-countdown-blink">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-xs text-muted-foreground uppercase mt-1">Hours</span>
        </div>
        <span className="text-3xl md:text-5xl font-bold text-destructive">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-bold text-destructive font-sans tabular-nums animate-countdown-blink" style={{ animationDelay: "0.3s" }}>
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-xs text-muted-foreground uppercase mt-1">Minutes</span>
        </div>
        <span className="text-3xl md:text-5xl font-bold text-destructive">:</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-bold text-destructive font-sans tabular-nums animate-countdown-blink" style={{ animationDelay: "0.6s" }}>
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="text-xs text-muted-foreground uppercase mt-1">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
