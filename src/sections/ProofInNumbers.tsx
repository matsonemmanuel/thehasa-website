import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "youths and young mothers skilled/certified",
  },
  {
    value: 60,
    suffix: "%+",
    label: "graduates working, self-employed or employed",
  },
  {
    value: 247,
    suffix: "",
    label: "learners assessed by UVTAB in March 2026",
  },
  {
    value: null,
    suffix: "",
    staticValue: "UVT692",
    label: "UVTAB Centre Number",
  },
];

function AnimatedNumber({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function ProofInNumbers() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      className="bg-[#318EC9]"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.staticValue ?? `${stat.value}-${index}`}
              className="text-center text-white"
            >
              <div className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {stat.value !== null ? (
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                ) : (
                  stat.staticValue
                )}
              </div>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/90 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProofInNumbers;