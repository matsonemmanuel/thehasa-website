import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "motion/react";

import trainingImage from "../assets/images/Training.jpg";
import motherChildImage from "../assets/images/ChildCare-Sample.jpg";
import communityImage from "../assets/images/community.jpg";

interface HeroSlide {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
}

const slides: HeroSlide[] = [
  {
    image: trainingImage,
    eyebrow: "VOCATIONAL SKILLS",
    title: "Empowering Youth.",
    description:
      "Practical skills give young people a pathway to work, income and greater independence.",
  },
  {
    image: motherChildImage,
    eyebrow: "TWO GENERATIONS. ONE FUTURE.",
    title: "Protecting Children.",
    description:
      "Young mothers can learn and build their future while their children are cared for and learning.",
  },
  {
    image: communityImage,
    eyebrow: "COMMUNITY TRANSFORMATION",
    title: "Transforming Communities.",
    description:
      "Skills, livelihoods, savings and community support create pathways for young people and families to move forward.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden">
      {/* =========================
          DESKTOP HERO
      ========================== */}
      <div className="relative hidden min-h-[calc(100vh-88px)] md:block">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Dark blue overlay */}
        <div className="absolute inset-0 bg-[#073b5c]/75" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-20 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl text-white"
            >
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]">
                {slide.eyebrow}
              </p>

              <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 lg:text-xl">
                {slide.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/model"
                  className="rounded-lg bg-[#318EC9] px-6 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#318EC9]"
                >
                  See How Our Model Works
                </a>

                <a
                  href="/get-involved"
                  className="rounded-lg bg-[#ED1C24] px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
                >
                  Support a Mother and Child
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Previous */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
        >
          <FiArrowLeft size={22} />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
        >
          <FiArrowRight size={22} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* =========================
          MOBILE HERO
      ========================== */}
      <div className="md:hidden">
        {/* Image */}
        <div className="relative h-[52vh] min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-[#073b5c]/55" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {slide.eyebrow}
                </p>

                <h1 className="mt-3 text-4xl font-bold leading-tight text-white">
                  {slide.title}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile content */}
        <div className="bg-white px-6 py-7">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-base leading-7 text-gray-600"
            >
              {slide.description}
            </motion.p>
          </AnimatePresence>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="/model"
              className="rounded-lg bg-[#318EC9] px-5 py-3.5 text-center font-semibold text-white"
            >
              See How Our Model Works
            </a>

            <a
              href="/get-involved"
              className="rounded-lg bg-[#ED1C24] px-5 py-3.5 text-center font-semibold text-white"
            >
              Support a Mother and Child
            </a>
          </div>

          {/* Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-[#318EC9]"
                    : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="mt-4 flex justify-center gap-3">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700"
            >
              <FiArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700"
            >
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;