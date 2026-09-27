function OurModel() {
  const motherSteps = [
    {
      number: "01",
      title: "Enrols",
      description: "Joins a trade at the Centre.",
    },
    {
      number: "02",
      title: "Trains",
      description: "Competency-based training, assessed by UVTAB.",
    },
    {
      number: "03",
      title: "Earns",
      description: "Moves into work, self-employed or employed.",
    },
    {
      number: "04",
      title: "Saves",
      description: "Builds savings and access to credit through CoSCA.",
    },
    {
      number: "05",
      title: "Invests",
      description: "Pays her child's school fees from her own income.",
    },
  ];

  const childSteps = [
    {
      number: "01",
      title: "Cared for",
      description: "Safe care during training hours.",
    },
    {
      number: "02",
      title: "Learns",
      description: "Early learning for ages 0 to 5.",
    },
    {
      number: "03",
      title: "Eats",
      description: "Daily meals and wellbeing checks.",
    },
    {
      number: "04",
      title: "Ready",
      description: "Prepared to start primary school.",
    },
    {
      number: "05",
      title: "In school",
      description: "Education paid for from a parent's earnings.",
    },
  ];

  const barriers = [
    {
      barrier: "Childcare keeps mothers out of training",
      response:
        "Care for children at the Centre during training hours.",
    },
    {
      barrier: "Training ends without a recognised certificate",
      response:
        "Competency-based courses assessed by UVTAB.",
    },
    {
      barrier: "Graduates have skills but no money to start",
      response:
        "Savings and credit through CoSCA, plus start-up support.",
    },
    {
      barrier: "Protection and livelihoods are handled separately",
      response:
        "Gender-based violence prevention and child protection built into every programme.",
    },
    {
      barrier: "Short projects end and leave nothing behind",
      response:
        "A permanent institution rooted in the community.",
    },
  ];

  const cycle = [
    "Certified skills",
    "Income",
    "Savings",
    "School fees",
    "Graduates mentor and employ",
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F4FAFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
            Our Two-Generation Model
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Two pathways, one family, moving together.
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-gray-600 sm:text-xl">
            Our founders&apos; philosophy is simple: depend on your skills,
            survive today, invest in tomorrow. For a young mother, today is her
            own skill and income, and tomorrow is her child.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            Most programmes serve either the young person or the child. A
            training course that ignores childcare loses the mothers. A school
            that ignores household income loses the children when fees are
            due.
          </p>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-600">
            At THEHASA, we plan both at the same time. While a mother gains a
            skill and builds an income, her child stays safe and keeps learning.
            When she earns, she pays for her child&apos;s education.
          </p>
        </div>
      </section>

      {/* Two-generation pathway */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
              How a family moves through the model
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              One family. Two pathways. One shared direction.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              The mother&apos;s progress and her child&apos;s progress are
              planned together, so each pathway strengthens the other.
            </p>
          </div>

          {/* Desktop pathway */}
          <div className="mt-16 hidden lg:block">
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              {/* Mother */}
              <div className="bg-[#318EC9] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white">
                    M
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                      Mother&apos;s pathway
                    </p>
                    <p className="text-lg font-bold text-white">
                      From enrolment to investment
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-5">
                {motherSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative border-r border-gray-100 p-7 last:border-r-0"
                  >
                    <span className="text-xs font-bold text-[#318EC9]">
                      {step.number}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>

                    {index < motherSteps.length - 1 && (
                      <div className="absolute right-0 top-1/2 hidden h-px w-5 translate-x-1/2 bg-[#318EC9] xl:block" />
                    )}
                  </div>
                ))}
              </div>

              {/* Connection */}
              <div className="relative h-10 bg-[#F4FAFE]">
                <div className="absolute left-[10%] right-[10%] top-1/2 h-px bg-[#ED1C24]" />

                <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ED1C24] text-xs font-bold text-white">
                  +
                </div>
              </div>

              {/* Child */}
              <div className="bg-[#F4FAFE] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#318EC9]/10 text-sm font-bold text-[#318EC9]">
                    C
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#318EC9]">
                      Child&apos;s pathway
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      From care to school
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-5">
                {childSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative border-r border-gray-100 p-7 last:border-r-0"
                  >
                    <span className="text-xs font-bold text-[#318EC9]">
                      {step.number}
                    </span>

                    <h3 className="mt-3 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>

                    {index < childSteps.length - 1 && (
                      <div className="absolute right-0 top-1/2 hidden h-px w-5 translate-x-1/2 bg-[#318EC9] xl:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile / tablet pathway */}
          <div className="mt-12 space-y-10 lg:hidden">
            {/* Mother */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#318EC9] text-sm font-bold text-white">
                  M
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#318EC9]">
                    Mother&apos;s pathway
                  </p>
                  <p className="font-bold text-gray-900">
                    From enrolment to investment
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {motherSteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                  >
                    <span className="text-xs font-bold text-[#318EC9]">
                      {step.number}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Child */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#318EC9]/10 text-sm font-bold text-[#318EC9]">
                  C
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#318EC9]">
                    Child&apos;s pathway
                  </p>
                  <p className="font-bold text-gray-900">
                    From care to school
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {childSteps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-gray-100 bg-[#F4FAFE] p-6"
                  >
                    <span className="text-xs font-bold text-[#318EC9]">
                      {step.number}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current position */}
      <section className="bg-[#F4FAFE] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
              Where we are today
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building the permanent childcare pathway.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Childcare currently runs as a short-term arrangement. We are
              moving it into a permanent Day Care and Early Childhood
              Development Centre.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              In the longer term, we plan to open an inclusive, affordable
              primary school for the children of graduates and the wider
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Barriers */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
              The Barriers We Remove
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Young people face several barriers at once.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Solving one while ignoring the others rarely works, so we
              address them together.
            </p>
          </div>

          <div className="mt-12 space-y-5">
            {barriers.map((item, index) => (
              <article
                key={item.barrier}
                className="grid gap-0 overflow-hidden rounded-2xl border border-gray-100 shadow-sm lg:grid-cols-2"
              >
                <div className="bg-[#F4FAFE] p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#ED1C24]">
                    Barrier {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-7 text-gray-900">
                    {item.barrier}
                  </h3>
                </div>

                <div className="bg-white p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#318EC9]">
                    THEHASA&apos;s response
                  </p>

                  <p className="mt-3 text-lg font-semibold leading-7 text-gray-900">
                    {item.response}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Earn As You Learn */}
      <section className="bg-[#318EC9] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Earn As You Learn
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Learners do not have to wait until graduation to start earning.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/90">
              Through our Earn As You Learn approach, learners produce real
              work during training, learn to price and sell it, and build
              savings habits from the first week.
            </p>
          </div>

          {/* Five-step process */}
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "LEARN",
              "MAKE",
              "PRICE",
              "SELL",
              "SAVE",
            ].map((step, index) => (
              <div
                key={step}
                className="relative rounded-2xl border border-white/20 bg-white/10 p-6 text-center"
              >
                <span className="text-xs font-bold text-white/60">
                  0{index + 1}
                </span>

                <p className="mt-3 text-xl font-bold text-white">{step}</p>

                {index < 4 && (
                  <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-bold text-white lg:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate cycle */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
              Each Graduate Strengthens the Next
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Skills become income. Income becomes opportunity.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Certified skills lead to income from work. Income becomes savings
              in CoSCA. Savings pay children&apos;s school fees. Graduates then
              mentor, hire and buy from the next group of learners.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {cycle.map((item, index) => (
              <div
                key={item}
                className="relative rounded-2xl border border-gray-100 bg-[#F4FAFE] p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#318EC9] text-sm font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-base font-bold leading-6 text-gray-900">
                  {item}
                </h3>

                {index < cycle.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-bold text-[#318EC9] lg:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-[#F4FAFE] p-7 text-center">
            <p className="font-semibold leading-7 text-gray-900">
              Each group that finishes makes the next one stronger.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4FAFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
            See the work behind the model
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Skills, savings, childcare and protection — working together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore the practical programmes that make the two-generation
            model work.
          </p>

          <div className="mt-8">
            <a
              href="/what-we-do"
              className="inline-flex items-center rounded-lg bg-[#ED1C24] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d71920]"
            >
              See What We Do
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OurModel;