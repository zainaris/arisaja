import { useState, useEffect, useCallback, useRef, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroStreaming from "@/assets/hero-banner-streaming.jpg";
import heroPromotion from "@/assets/hero-banner-promotion.jpg";
import heroAndroidBox from "@/assets/hero-android-box.jpg";

const slides = [
  { src: heroStreaming, alt: "Streaming Sepuasnya - ARTAMEDIANET" },
  { src: heroPromotion, alt: "Unlimited Internet Promotion - ARTAMEDIANET" },
  { src: heroAndroidBox, alt: "Android Box - Ubah TV Biasa Jadi Smart TV - ARTAMEDIANET" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % slides.length, "left"), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length, "right"), [current, goTo]);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, isHovered]);

  const handleTouchStart = (e: TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background"
      style={{ aspectRatio: "12/5", maxHeight: "70vh" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, i) => {
        const isActive = i === current;
        let transform = "translateX(0%)";
        if (!isActive) {
          transform = direction === "left" ? "translateX(100%)" : "translateX(-100%)";
        }

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              transform: isActive ? "translateX(0%)" : transform,
              transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              zIndex: isActive ? 10 : 5,
            }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        );
      })}

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "left" : "right")}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
