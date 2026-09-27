import {
  FiArrowRight,
  FiBookOpen,
  FiHeart,
  FiScissors,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

function WhatWeDo() {
  const trades = [
    {
      title: "Tailoring and Garment Cutting",
      description:
        "Pattern cutting, garment making, machine operation and finishing.",
      icon: FiScissors,
    },
    {
      title: "Hairdressing and Beauty Therapy",
      description:
        "Professional hair, skin care and beauty skills for salon work or mobile services.",
      icon: FiHeart,
    },
    {
      title: "Carpentry and Joinery",
      description:
        "Furniture making and construction woodwork for a strong local market.",
      icon: FiBookOpen,
    },
    {
      title: "Building, Block Laying and Concrete Practice",
      description:
        "Masonry, concrete mixing and basic building construction.",
      icon: FiBookOpen,
    },
    {
      title: "Welding and Metal Fabrication",
      description:
        "Arc welding, metal cutting and basic structural metalwork.",
      icon: FiBookOpen,
    },
    {
      title: "Motorcycle Mechanics and Repair",
      description:
        "Servicing and repairing the boda-bodas that move people and goods every day.",
      icon: FiBookOpen,
    },
    {
      title: "Poultry Production and Agribusiness",
      description:
        "Poultry keeping, feeding, disease prevention and selling.",
      icon: FiTrendingUp,
    },
    {
      title: "Computer Applications",
      description:
        "Word processing, spreadsheets, email and internet skills.",
      icon: FiBookOpen,
    },
    {
      title: "Graphics Design",
      description:
        "Logos, print materials and digital graphics.",
      icon: FiBookOpen,
    },
    {
      title: "Digital Marketing",
      description:
        "Social media, content creation and online promotion for small businesses.",
      icon: FiTrendingUp,
    },
  ];

  const businessSkills = [
    "Finding a business idea",
    "Understanding the market",
    "Pricing",
    "Customer care",
    "Budgeting",
    "Record keeping",
    "Profit and loss",
    "Keeping business and household money separate",
  ];

  const childcare = [
    "Safe, supervised care by trained caregivers during training hours.",
    "Early learning in language, numbers, play and social skills.",
    "Daily meals and wellbeing checks.",
    "Preparation for starting primary school.",
    "Clear child protection systems and trained staff.",
  ];

  const protection = [
    {
      title: "Gender-based violence prevention",
      description:
        "Community awareness sessions, including sessions that engage men and boys.",
    },
    {
      title: "Child protection",
      description:
        "A safeguarding policy across all activities, trained staff, and child rights awareness in the community.",
    },
    {
      title: "Referrals",
      description:
        "We connect people who need help to health, legal, psychosocial and protection services.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F4FAFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
            What We Do
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Everything a young person needs to move from learning to earning,
            in one place.
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-gray-600 sm:text-xl">
            We bring together four things that are usually offered by
            different organisations, in different places, at different times.
          </p>
        </div>
      </section>

      {/* Jump menu */}
      <section className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto pb-1">
          <a
            href="#vocational-skills"
            className="shrink-0 rounded-full bg-[#318EC9] px-4 py-2 text-sm font-semibold text-white"
          >
            Vocational Skills
          </a>

          <a
            href="#entrepreneurship"
            className="shrink-0 rounded-full bg-[#F4FAFE] px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-[#318EC9]/10"
          >
            Entrepreneurship
          </a>

          <a
            href="#childcare"
            className="shrink-0 rounded-full bg-[#F4FAFE] px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-[#318EC9]/10"
          >
            Childcare
          </a>

          <a
            href="#protection"
            className="shrink-0 rounded-full bg-[#F4FAFE] px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-[#318EC9]/10"
          >
            Protection
          </a>
        </div>
      </section>

      <section
  id="vocational-skills"
  className="scroll-mt-28 bg-white py-20 lg:py-28"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section introduction */}
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#318EC9]">
        Vocational Skills Development Centre
      </p>

      <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Learn a practical skill.
        <span className="block text-[#318EC9]">
          Earn a recognised certificate.
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        The THEHASA Vocational Skills Development Centre offers practical,
        competency-based training. Learners are assessed against national
        standards by UVTAB and receive a recognised certificate.
      </p>
    </div>

    {/* Credentials */}
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <div className="rounded-full bg-[#318EC9]/10 px-5 py-3 text-sm font-semibold text-[#318EC9]">
        UVTAB Centre No. UVT692
      </div>

      <div className="rounded-full bg-[#318EC9]/10 px-5 py-3 text-sm font-semibold text-[#318EC9]">
        DIT Accredited
      </div>

      <div className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700">
        Practical, competency-based training
      </div>
    </div>

    {/* Programme cards */}
    <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {trades.map((trade) => (
        <article
          key={trade.title}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          {/* Image placeholder */}
          <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#318EC9]/5">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#318EC9] shadow-sm">
                <trade.icon />
              </div>

              <p className="mt-4 text-sm font-medium text-slate-400">
                Training photo coming soon
              </p>
            </div>

            {/* subtle decorative shape */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#318EC9]/5" />
            <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-[#318EC9]/5" />
          </div>

          {/* Card content */}
          <div className="p-7">
            <h3 className="text-xl font-bold leading-snug text-slate-900">
              {trade.title}
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-600">
              {trade.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#318EC9]">
              <span>Explore this skill</span>

              <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:transition-transform [&>svg]:duration-200 group-hover:[&>svg]:translate-x-1">
                <FiArrowRight />
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* Course CTA */}
    <div className="mt-14 text-center">
      <a
        href="/join-a-course"
        className="inline-flex items-center gap-2 rounded-xl bg-[#ED1C24] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-600"
      >
        Join a Course
        <span className="[&>svg]:h-4 [&>svg]:w-4">
          <FiArrowRight />
        </span>
      </a>
    </div>

  </div>
</section>

      {/* 2. Entrepreneurship */}
      <section
        id="entrepreneurship"
        className="scroll-mt-24 bg-[#F4FAFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-sm font-bold text-[#318EC9]">02</span>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
                Entrepreneurship, Savings & Start-up Support
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A skill only changes a family&apos;s life when it becomes an
                income.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                That is why business skills are part of every trade from the
                first week, not an extra module at the end.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">
                  Business & financial skills
                </h3>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {businessSkills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-700"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#318EC9]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#318EC9]">
                  CoSCA
                </p>

                <h3 className="mt-3 text-xl font-bold text-gray-900">
                  Community Led Savings and Credit Access
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Members save using passbooks recorded at our office and build
                  access to credit for start-up capital.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 border-[#ED1C24] bg-white p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#ED1C24]">
                  Start-up support
                </p>

                <p className="mt-3 leading-7 text-gray-700">
                  In a pilot, we employed seven graduates, bought their
                  start-up materials and recovered the cost from their
                  earnings. All seven now own registered businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Childcare */}
      <section
        id="childcare"
        className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <span className="text-sm font-bold text-[#318EC9]">03</span>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
                Childcare & Early Learning
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Childcare is what makes the whole model work.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Without it, many young mothers cannot attend training at all.
                With it, a mother can train for a full day, knowing her child
                is safe and learning nearby.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Childcare at the Centre currently runs as a short-term
                arrangement. We are now building a permanent Day Care and Early
                Childhood Development Centre for up to 60 children aged 0 to 5.
              </p>

              <a
                href="/get-involved"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#ED1C24] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#d71920]"
              >
                Help Make Childcare Permanent
                <FiArrowRight size={17} />
              </a>
            </div>

            <div className="rounded-3xl bg-[#F4FAFE] p-8 sm:p-10">
              <h3 className="text-xl font-bold text-gray-900">
                What children receive
              </h3>

              <ul className="mt-6 space-y-5">
                {childcare.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#318EC9] text-[10px] font-bold text-white">
                      ✓
                    </span>

                    <span className="leading-7 text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Protection */}
      <section
        id="protection"
        className="scroll-mt-24 bg-[#F4FAFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="text-sm font-bold text-[#318EC9]">04</span>

              <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#318EC9] shadow-sm">
                <FiShield size={27} />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
                Protection
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Protection is part of everything we do.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Economic exclusion and violence feed each other. A young woman
                without income has fewer choices; a young woman facing
                violence finds it harder to learn and earn.
              </p>
            </div>

            <div className="space-y-5">
              {protection.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-7 shadow-sm"
                >
                  <div className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#318EC9] text-sm font-bold text-white">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-[#318EC9]/10 bg-white p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <span className="mt-1 shrink-0 text-[#318EC9]">
                <FiShield size={22} />
              </span>

              <div>
                <h3 className="font-bold text-gray-900">
                  Including young people with disabilities
                </h3>

                <p className="mt-2 leading-7 text-gray-600">
                  Young people with disabilities are welcome in every trade,
                  and we work to make our training, spaces and materials
                  accessible.
                </p>

                <p className="mt-3 text-sm italic text-gray-500">
                  Specific inclusion targets and adaptations will be published
                  once confirmed by the Foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#318EC9] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything connects back to one goal.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Help young people build skills, earn an income and create a better
            future for their families.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/join-a-course"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#318EC9] transition hover:bg-gray-100"
            >
              Join a Course
              <FiArrowRight size={17} />
            </a>

            <a
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get Involved
              <FiArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WhatWeDo;