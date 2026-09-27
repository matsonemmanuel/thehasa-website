function WhoWeServe() {
  const people = [
    {
      number: "01",
      title: "Young people who left school",
      description:
        "Young people aged 13 to 35 whose education was cut short by fees, displacement, language or family pressures.",
    },
    {
      number: "02",
      title: "Young mothers",
      description:
        "Young mothers who want to learn and earn but cannot do so without childcare.",
    },
    {
      number: "03",
      title: "Young people with disabilities",
      description:
        "Young people with disabilities who are too often left out of mainstream training.",
    },
    {
      number: "04",
      title: "Children aged 0 to 5",
      description:
        "Children of participating young mothers who need safe care, early learning and a strong start at school.",
    },
    {
      number: "05",
      title: "Host community youth",
      description:
        "Young people from the Ugandan host community who share the same challenges and train side by side with refugee learners.",
    },
  ];

  const evidence = [
    {
      statistic: "2,041,652",
      label: "refugees and asylum seekers",
      description:
        "Uganda hosts 2,041,652 refugees and asylum seekers. Kyangwali, in Kikuube District, is one of the settlements where they live.",
      response:
        "A permanent training centre inside the settlement, open to refugee and host community youth.",
      source: "Office of the Prime Minister and UNHCR, 31 August 2026.",
    },
    {
      statistic: "55%",
      label: "under 18",
      description:
        "Most refugees in Uganda are young. 55% are under 18, and 25% are aged 15 to 24.",
      response:
        "Training designed for young people aged 13 to 35.",
      source: "Office of the Prime Minister, Uganda.",
    },
    {
      statistic: "9%",
      label: "tertiary enrolment",
      description:
        "The path to education narrows fast. Refugee enrolment in Uganda is 67% at primary level, 37% at secondary and 9% at tertiary.",
      response:
        "A second route into learning through accredited, practical skills.",
      source:
        "UNHCR Education Report 2025, academic year 2023 to 2024.",
    },
    {
      statistic: "23.5%",
      label: "of girls aged 15–19",
      description:
        "23.5% of Ugandan girls aged 15 to 19 have had a child or are pregnant with their first.",
      response:
        "Training built around childcare, so motherhood does not end a young woman's learning.",
      source:
        "Uganda Bureau of Statistics, Uganda Demographic and Health Survey 2022.",
    },
    {
      statistic: "14%",
      label: "of 2026 UNHCR funding received",
      description:
        "By May 2026, only 14% of UNHCR's 2026 funding requirement for Uganda had been received.",
      response:
        "A model that is rooted locally and designed to earn part of its own income.",
      source:
        "UNHCR Uganda, reported by Daily Monitor, 7 May 2026.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F4FAFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
            Who We Serve
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Talent was never missing. The pathway was.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600 sm:text-xl">
            The young people who come to THEHASA are capable, determined and
            ready to work. What they have often lacked is a route back in: a
            place to learn a trade, a recognised certificate, a way to start
            earning, and someone to care for their child while they do it.
          </p>
        </div>
      </section>

      {/* People we work with */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
              The People We Work With
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Different journeys. One pathway forward.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              THEHASA works with young people and families whose access to
              education and economic opportunity has been interrupted.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((person) => (
              <article
                key={person.number}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#318EC9]/10 text-sm font-bold text-[#318EC9]">
                  {person.number}
                </div>

                <h3 className="mt-6 text-xl font-bold leading-7 text-gray-900">
                  {person.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {person.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="bg-[#F4FAFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
              The Need & Our Response
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Every challenge needs a pathway forward.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              The need is real. THEHASA responds by connecting each challenge
              to a practical pathway through skills, income, childcare and
              local opportunity.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {evidence.map((item) => (
              <article
                key={item.statistic + item.label}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                  {/* Statistic */}
                  <div className="bg-[#318EC9] p-8 text-white sm:p-10 lg:p-12">
                    <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                      {item.statistic}
                    </p>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/80">
                      {item.label}
                    </p>
                  </div>

                  {/* Explanation + response */}
                  <div className="p-8 sm:p-10 lg:p-12">
                    <p className="text-base leading-7 text-gray-600 sm:text-lg">
                      {item.description}
                    </p>

                    <div className="mt-7 border-l-4 border-[#ED1C24] pl-5">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#ED1C24]">
                        THEHASA&apos;s response
                      </p>

                      <p className="mt-2 text-lg font-semibold leading-7 text-gray-900">
                        {item.response}
                      </p>
                    </div>

                    <p className="mt-6 text-xs leading-5 text-gray-500">
                      Source: {item.source}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Two-generation connection */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
            One Family. Two Generations.
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            When a young mother moves forward, her child moves with her.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            THEHASA brings skills training, income generation, savings,
            childcare and early learning together so that a mother does not
            have to choose between building her future and caring for her
            child.
          </p>

          <div className="mt-10">
            <a
              href="/model"
              className="inline-flex items-center rounded-lg bg-[#318EC9] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#287caf]"
            >
              See Our Two-Generation Model
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhoWeServe;