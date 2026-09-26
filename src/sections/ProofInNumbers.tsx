const stats = [
  {
    value: "500+",
    label: "youths and young mothers skilled/certified",
  },
  {
    value: "60%+",
    label: "graduates working, self-employed or employed",
  },
  {
    value: "247",
    label: "learners assessed by UVTAB in March 2026",
  },
  {
    value: "UVT692",
    label: "UVTAB Centre Number",
  },
];

function ProofInNumbers() {
  return (
    <section className="bg-[#318EC9]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="text-center text-white"
            >
              <div className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {stat.value}
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