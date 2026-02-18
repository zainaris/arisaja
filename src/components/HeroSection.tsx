import { useState, useEffect, useCallback, useRef, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroStreamingNew from "@/assets/hero-banner-streaming-new.jpg";
import heroPromotion from "@/assets/hero-banner-promotion.jpg";
import heroAndroidBox from "@/assets/hero-android-box.jpg";

const slides = [
  { src: heroStreamingNew, alt: "Streaming Spuasnya - ARTAMEDIANET" },
  { src: heroPromotion, alt: "Internet Cepat Tanpa Batasan - ARTAMEDIANET" },
  { src: heroAndroidBox, alt: "Ubah TV Biasa Jadi Smart TV - ARTAMEDIANET" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setPrev(current);
    setCurrent(index);
    setTimeout(() => {
      setPrev(null);
      setIsAnimating(false);
    }, 700);
  }, [isAnimating, current]);

  const next = useCallback(() => goTo((current + 1) % slides.length, "left"), [current, goTo]);
  const prevSlide = useCallback(() => goTo((current - 1 + slides.length) % slides.length, "right"), [current, goTo]);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, isHovered]);

  const handleTouchStart = (e: TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prevSlide();
  };

  const getSlideStyle = (index: number): React.CSSProperties => {
    const isActive = index === current;
    const isPrev = index === prev;

    if (!isAnimating) {
      return {
        transform: isActive ? "translateX(0) scale(1)" : "translateX(100%) scale(0.95)",
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 10 : 5,
        transition: "none",
      };
    }

    if (isActive) {
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 10,
        transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s ease",
        animationName: direction === "left" ? "slideInFromRight" : "slideInFromLeft",
      };
    }

    if (isPrev) {
      const exitTranslate = direction === "left" ? "-100%" : "100%";
      return {
        transform: `translateX(${exitTranslate}) scale(0.92)`,
        opacity: 0,
        zIndex: 5,
        transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease",
      };
    }

    return {
      transform: "translateX(100%) scale(0.95)",
      opacity: 0,
      zIndex: 1,
      transition: "none",
    };
  };

  const getInitialActiveStyle = (index: number): React.CSSProperties => {
    if (!isAnimating || index !== current) return {};
    const enterTranslate = direction === "left" ? "100%" : "-100%";
    return {
      transform: `translateX(${enterTranslate}) scale(0.95)`,
    };
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
      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(100%) scale(0.95); opacity: 0.3; }
          to   { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%) scale(0.95); opacity: 0.3; }
          to   { transform: translateX(0) scale(1); opacity: 1; }
        }
        .slide-enter-right {
          animation: slideInFromRight 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .slide-enter-left {
          animation: slideInFromLeft 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {slides.map((slide, i) => {
        const isActive = i === current;
        const isPrevSlide = i === prev;
        const exitTranslate = direction === "left" ? "-105%" : "105%";
        const enterClass = direction === "left" ? "slide-enter-right" : "slide-enter-left";

        return (
          <div
            key={i}
            className={`absolute inset-0 will-change-transform ${isActive && isAnimating ? enterClass : ""}`}
            style={{
              zIndex: isActive ? 10 : isPrevSlide ? 5 : 1,
              transform: isActive && !isAnimating
                ? "translateX(0) scale(1)"
                : isPrevSlide && isAnimating
                ? `translateX(${exitTranslate}) scale(0.92)`
                : !isActive && !isPrevSlide
                ? "translateX(100%)"
                : undefined,
              opacity: isActive || isPrevSlide ? 1 : 0,
              transition: isPrevSlide && isAnimating
                ? "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease"
                : "none",
            }}
          >
            {/* Subtle overlay for depth */}
            {isPrevSlide && isAnimating && (
              <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-700" />
            )}
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        );
      })}

      {/* Gradient edge hints */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/20 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/20 to-transparent z-20 pointer-events-none" />

      {/* Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110 border border-white/20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110 border border-white/20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "left" : "right")}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${
              i === current
                ? "w-7 h-3 bg-primary shadow-lg shadow-primary/50"
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
