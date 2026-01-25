const PriceDisplay = () => {
  return (
    <div className="flex flex-col items-center md:items-start gap-2">
      {/* Original price - struck through */}
      <div className="flex items-center gap-3">
        <span className="text-lg md:text-xl text-muted-foreground">Earlier:</span>
        <span className="text-2xl md:text-3xl text-destructive line-through font-bold">
          ₹199
        </span>
      </div>
      
      {/* Current price - highlighted */}
      <div className="flex items-center gap-3">
        <span className="text-lg md:text-xl text-muted-foreground">Today:</span>
        <span className="text-4xl md:text-6xl font-bold text-primary text-glow">
          ₹9
        </span>
        <span className="text-sm md:text-base text-primary bg-primary/20 px-3 py-1 rounded-full font-semibold animate-pulse">
          95% OFF
        </span>
      </div>
    </div>
  );
};

export default PriceDisplay;
