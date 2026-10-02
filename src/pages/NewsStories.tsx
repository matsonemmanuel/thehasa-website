import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCalendar,
  FiScissors,
  FiUsers,
  FiPlay,
  FiVideo,
} from "react-icons/fi";


const successStories = [
  {
    title: "A Journey of Transformation",
    category: "Success Story",
    description:
      "A story from the THEHASA community highlighting the journey from learning towards new opportunities.",
    video: "/videos/success.mp4",
    poster: "/images/success-poster.png",
  },
  {
    title: "Skills That Create Opportunity",
    category: "Learner Story",
    description:
      "Discover how practical skills can help young people build confidence, independence and a pathway forward.",
    video: "/videos/success.mp4",
    poster: "/images/success-poster.png",
  },
  {
    title: "From Learning to Possibility",
    category: "Community Story",
    description:
      "A glimpse into the people and journeys at the heart of THEHASA's work in Kyangwali.",
    video: "/videos/success.mp4",
    poster: "/images/success-poster.png",
  },
];


function NewsStories() {
  const stories = [
    {
      title: "THEHASA Foundation is incorporated by URSB",
      date: "18 May 2026",
      category: "Milestone",
      icon: FiAward,
      description:
        "THEHASA Foundation was incorporated by the Uganda Registration Services Bureau, marking an important step in establishing the Foundation as an independent, women-led organisation rooted in Kyangwali.",
    },
    {
      title: "247 learners sit their UVTAB assessments",
      date: "March 2026",
      category: "Skills & Certification",
      icon: FiBookOpen,
      description:
        "In Cohort IV, 247 learners were assessed by the Uganda Vocational and Technical Assessment Board as part of the Foundation's pathway from practical training to recognised certification.",
    },
    {
      title: "Seven graduates. Seven registered businesses.",
      date: "Start-up Pilot",
      category: "Enterprise",
      icon: FiBriefcase,
      description:
        "Seven graduates moved from training into business ownership through a start-up pilot that combined employment, start-up materials, earnings and gradual transfer of the businesses to the graduates.",
    },
    {
      title: "Our Managing Director joins the African Leadership Academy fellowship",
      date: "Cohort 6",
      category: "Leadership",
      icon: FiUsers,
      description:
        "Kabasinguzi Modestar, Co-Founder and Managing Director of THEHASA Foundation, joined the African Leadership Academy AL for Education Fellowship, Cohort 6.",
    },
    {
      title: "Inside the hairdressing class",
      date: "Training at THEHASA",
      category: "Learner Stories",
      icon: FiScissors,
      description:
        "A closer look at a day in the hairdressing class, showing learners developing practical skills that can become a source of income and independence.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#F4FAFE] px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#318EC9]">
              News & Stories
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              What is happening at THEHASA.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Follow the people, milestones and moments behind our work in
              Kyangwali.
            </p>
          </div>
        </div>
      </section>

      {/* Featured story */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
            {/* Image placeholder */}
            <div className="flex min-h-[380px] items-center justify-center bg-[#318EC9]/5">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-[#318EC9] shadow-sm">
                  <FiAward />
                </div>

                <p className="mt-5 font-semibold text-slate-700">
                  THEHASA Foundation
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Milestone photo coming soon
                </p>
              </div>
            </div>

            {/* Featured content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-[#318EC9]/10 px-3 py-1.5 font-semibold text-[#318EC9]">
                  Milestone
                </span>

                <span className="flex items-center gap-1.5 text-slate-500">
                  <FiCalendar />
                  18 May 2026
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                THEHASA Foundation is incorporated by URSB
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The incorporation of THEHASA Foundation by the Uganda
                Registration Services Bureau marked an important milestone in
                the Foundation's journey as an independent, women-led
                organisation serving young people and families in Kyangwali.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                The Foundation was established to connect practical skills,
                entrepreneurship, childcare and protection through a
                two-generation model.
              </p>

              <div className="mt-8">
                <a
                  href="/get-involved"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#318EC9] transition-colors hover:text-[#ED1C24]"
                >
                  Be part of what comes next
                  <span className="h-4 w-4">
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story grid */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#318EC9]">
              Latest from THEHASA
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Milestones, learning and people
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From assessment and certification to enterprise and leadership,
              these are some of the moments shaping the Foundation's work.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {stories.slice(1).map((story) => {
              const Icon = story.icon;

              return (
                <article
                  key={story.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Photo placeholder */}
                  <div className="flex h-56 items-center justify-center bg-[#318EC9]/5">
                    <div className="text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#318EC9] shadow-sm">
                        <Icon size={28} />
                      </div>

                      <p className="mt-4 text-sm font-medium text-slate-400">
                        Story photo coming soon
                      </p>
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-bold uppercase tracking-[0.16em] text-[#318EC9]">
                        {story.category}
                      </span>

                      <span className="text-slate-400">•</span>

                      <span className="text-slate-500">
                        {story.date}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">
                      {story.title}
                    </h3>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {story.description}
                    </p>

                    <a
                      href="/get-involved"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#318EC9] transition-colors hover:text-[#ED1C24]"
                    >
                      Get involved
                      <span className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1">
                        <FiArrowRight />
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

     {/* Success Stories */}
<section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
  <div className="mx-auto max-w-7xl">
    {/* Section heading */}
    <div className="mx-auto max-w-3xl text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
        <FiVideo className="h-7 w-7" />
      </div>

      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#318EC9]">
        Success Stories
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        Real people. Real journeys. Real change.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        Go beyond the numbers and hear directly from the people whose
        journeys are at the heart of THEHASA's work.
      </p>
    </div>

    {/* Video cards */}
    <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {successStories.map((story, index) => (
        <article
          key={`${story.title}-${index}`}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative aspect-video overflow-hidden bg-slate-950">
            <video
              controls
              playsInline
              preload="metadata"
              poster={story.poster}
              className="h-full w-full object-cover"
            >
              <source src={story.video} type="video/mp4" />
              Your browser does not support the video element.
            </video>
            {/* Story number */}
            <div className="pointer-events-none absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#318EC9] text-sm font-bold text-white shadow-lg">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Content */}
          <div className="p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#318EC9]">
              {story.category}
            </p>

            <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
              {story.title}
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {story.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#318EC9]">
              <FiPlay className="h-4 w-4" />
              Watch story
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* Bottom message */}
    <div className="mx-auto mt-14 max-w-4xl rounded-2xl bg-[#F4FAFE] px-6 py-7 text-center sm:px-8">
      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        Every story represents a person, a family and a community moving
        forward through skills, protection and opportunity.
      </p>
    </div>
  </div>
</section>


      {/* Coming stories */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-[#318EC9] p-8 text-white sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 [&>svg]:h-7 [&>svg]:w-7">
              <FiUsers />
            </div>

            <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
              The people behind the progress
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
              We will continue sharing learner stories, training milestones
              and community moments as the work grows.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-5">
                <p className="font-semibold">Learner stories</p>
                <p className="mt-2 text-sm text-white/75">
                  Real experiences from learners and graduates.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-5">
                <p className="font-semibold">Training moments</p>
                <p className="mt-2 text-sm text-white/75">
                  A look inside practical learning at the Centre.
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-5">
                <p className="font-semibold">Community milestones</p>
                <p className="mt-2 text-sm text-white/75">
                  Progress, partnerships and important moments.
                </p>
              </div>
            </div>

            <a
              href="/get-involved"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#ED1C24] px-7 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-600"
            >
              Get Involved
              <span className="h-4 w-4">
                <FiArrowRight />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NewsStories;