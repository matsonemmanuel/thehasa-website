import {
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiHeart,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiLayers,
  FiDollarSign,
  FiHome,
  FiSmile,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import graphicDesignImage from "../assets/images/programs/Graphic Design.jpg";
import successVideo from "../assets/videos/success.mp4";

const programmeAreas = [
  {
    id: "education",
    number: "01",
    label: "Education",
    title: "Learning for two generations.",
    description:
      "Our education work follows the two-generation model: the young person learns a trade, and the child learns through early childhood education. Both pathways move forward together.",
    icon: FiBookOpen,
    accent: "bg-[#318EC9]",
    light: "bg-[#318EC9]/5",
    programmes: [
      {
        title: "Vocational Skills Development",
        icon: FiBriefcase,
        description:
          "Practical, competency-based training for young people aged 13 to 35, including those who left school, young mothers and young people with disabilities.",
        points: [
          "Competency-based practical training",
          "Assessment against national standards",
          "UVTAB assessment and recognised certification",
          "Earn As You Learn approach",
          "Business skills integrated into training",
          "Pathways into employment and self-employment",
        ],
      },
      {
        title: "Early Childhood Development",
        icon: FiHome,
        description:
          "Childcare and early learning support that allows young mothers to attend training while their children remain safe, cared for and learning.",
        points: [
          "Childcare during training hours",
          "Early learning for children aged 0 to 5",
          "Daily meals and wellbeing checks",
          "Preparation for primary school",
          "Planned permanent ECD Centre",
        ],
      },
    ],
  },
  {
    id: "protection",
    number: "02",
    label: "Protection",
    title: "Every enrolment is also a protection moment.",
    description:
      "Young people cannot learn if they are not safe. Protection is therefore built into THEHASA programmes, with safeguarding, referral and community-based approaches supporting learners, children and families.",
    icon: FiShield,
    accent: "bg-[#318EC9]",
    light: "bg-[#318EC9]/5",
    programmes: [
      {
        title: "Child Protection",
        icon: FiShield,
        description:
          "We integrate child protection into enrolment, learning, childcare and community activities so that children can learn and grow in safer environments.",
        points: [
          "Safe and confidential enrolment",
          "Identification of protection risks",
          "Safe referral to appropriate services",
          "Child-friendly and supervised spaces",
          "Positive parenting and caregiver support",
          "Community-based protection awareness",
          "Safe channels for children and young people to raise concerns",
        ],
      },
      {
        title: "Peer-to-Peer Adolescent Programme",
        icon: FiUsers,
        description:
          "Adolescents come together in safe, supervised groups where they learn life skills, support one another and develop practical skills that can create income opportunities.",
        points: [
          "Peer-led learning and mentorship",
          "Communication and confidence",
          "Decision-making and problem-solving",
          "Conflict resolution and goal setting",
          "Short practical income-generating skills",
          "Pathways into vocational training and savings groups",
        ],
      },
      {
        title: "Gender-Based Violence Prevention & Response",
        icon: FiHeart,
        description:
          "Our GBV work focuses on prevention, safe referral and psychosocial support, using a survivor-centred approach that prioritises safety, confidentiality, respect and choice.",
        points: [
          "Community awareness and prevention",
          "Gender equality and healthy relationships",
          "Engagement with men, boys and community leaders",
          "Safe identification and referral",
          "Psychosocial support and appropriate referral",
          "Economic empowerment as part of risk reduction",
        ],
      },
    ],
  },
  {
    id: "livelihoods",
    number: "03",
    label: "Livelihoods",
    title: "From a skill to an income that lasts.",
    description:
      "A certificate opens the door. Savings, capital and business skills help a person walk through it. Our livelihoods programmes help young people, graduates, young mothers and community members save, borrow, start and grow.",
    icon: FiTrendingUp,
    accent: "bg-[#318EC9]",
    light: "bg-[#318EC9]/5",
    programmes: [
      {
        title: "CoSCA Savings & Credit",
        icon: FiDollarSign,
        description:
          "CoSCA — Community Led Savings and Credit Access — helps members save regularly and build access to credit that can support start-up and business capital.",
        points: [
          "Regular savings",
          "Passbook-based records",
          "Access to credit",
          "Start-up and business capital",
          "Connection between skills and financial opportunity",
        ],
      },
      {
        title: "Village Savings & Loan Associations",
        icon: FiUsers,
        description:
          "We form and train community-based VSLAs using recognised savings-group methodology, helping members build collective financial resilience.",
        points: [
          "Member-owned and member-managed groups",
          "Regular savings through shares",
          "Small loans from group savings",
          "Social funds for emergencies",
          "Member-led management",
          "Progress toward independent group operation",
        ],
      },
      {
        title: "Entrepreneurship Skills",
        icon: FiBriefcase,
        description:
          "Business skills are connected to training and livelihoods so that people can turn practical skills into sustainable income.",
        points: [
          "Finding business ideas",
          "Understanding local markets",
          "Costing and pricing",
          "Selling and customer care",
          "Record keeping",
          "Profit and loss",
          "Simple business planning",
        ],
      },
      {
        title: "Mindset Shift",
        icon: FiSmile,
        description:
          "Our mindset sessions support confidence, discipline, planning and a habit of saving — helping young people move from waiting for opportunities toward creating them.",
        points: [
          "Confidence and self-belief",
          "Discipline and planning",
          "Goal setting",
          "Saving habits",
          "Entrepreneurial thinking",
        ],
      },
      {
        title: "Start-up Support",
        icon: FiTrendingUp,
        description:
          "THEHASA supports graduates to move from training into business through practical start-up support and pathways to capital.",
        points: [
          "Start-up materials and support",
          "Connection to savings and credit",
          "Practical business experience",
          "Transition from training into ownership",
        ],
      },
    ],
  },
];

const standards = [
  {
    title: "Recognised standards",
    description:
      "Our programmes are designed around recognised national and international standards relevant to refugee and host communities.",
    icon: FiCheckCircle,
  },
  {
    title: "Two-generation approach",
    description:
      "Education, protection and livelihoods are connected so that young people and their children can move forward together.",
    icon: FiLayers,
  },
  {
    title: "Community-rooted",
    description:
      "Our work is rooted in Kyangwali and designed around the realities of the young people and families we serve.",
    icon: FiHome,
  },
];

export default function WhatWeDo() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current === 0 ? 1 : 0));
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
<section className="relative min-h-[680px] overflow-hidden bg-[#071F33] sm:min-h-[720px] lg:min-h-[760px]">

  {/* ================= MEDIA SLIDES ================= */}
  <div className="absolute inset-0">

    {/* IMAGE */}
    <div
      className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
        activeSlide === 0 ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={graphicDesignImage}
        alt="Young people participating in vocational skills training at THEHASA Foundation"
        className="h-full w-full object-cover"
      />
    </div>

    {/* VIDEO */}
    <div
      className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
        activeSlide === 1 ? "opacity-100" : "opacity-0"
      }`}
    >
      <video
        src={successVideo}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
      />
    </div>

    {/* DARK BLUE OVERLAY */}
    <div className="absolute inset-0 bg-[#061C2E]/55" />

    {/* LEFT-TO-RIGHT GRADIENT */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#061C2E]/95 via-[#061C2E]/70 to-[#061C2E]/20" />

    {/* BOTTOM GRADIENT */}
    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#061C2E]/80 to-transparent" />

  </div>


  {/* ================= CONTENT ================= */}
  <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-20 sm:min-h-[720px] sm:px-8 sm:py-24 lg:min-h-[760px] lg:px-12">

    <div className="max-w-3xl">

      {/* LABEL */}
      <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">

        <span className="h-2 w-2 rounded-full bg-[#ED1C24] shadow-[0_0_12px_rgba(237,28,36,0.8)]" />

        What We Do

      </div>


      {/* HEADING */}
      <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">

        Three programme areas.

        <span className="mt-2 block text-white/85">
          One family moving forward.
        </span>

      </h1>


      {/* DESCRIPTION */}
      <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">

        We work across Education, Protection and Livelihoods. Our
        programmes are planned together because a young person needs a
        skill to learn, safety to learn it in, and a way to turn it into
        income.

      </p>


      {/* BUTTONS */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">

        <Link
          to="/join-a-course"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ED1C24] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d71920]"
        >
          Explore Our Courses
          <FiArrowRight />
        </Link>


        <Link
          to="/model"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#318EC9]"
        >
          See Our Model
          <FiArrowRight />
        </Link>

      </div>

    </div>

  </div>


  {/* ================= SLIDE INDICATORS ================= */}
  <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">

    <button
      type="button"
      aria-label="Show training image"
      onClick={() => setActiveSlide(0)}
      className={`h-2.5 rounded-full transition-all duration-500 ${
        activeSlide === 0
          ? "w-8 bg-white"
          : "w-2.5 bg-white/40 hover:bg-white/70"
      }`}
    />

    <button
      type="button"
      aria-label="Show success video"
      onClick={() => setActiveSlide(1)}
      className={`h-2.5 rounded-full transition-all duration-500 ${
        activeSlide === 1
          ? "w-8 bg-white"
          : "w-2.5 bg-white/40 hover:bg-white/70"
      }`}
    />

  </div>


  {/* ================= BOTTOM LABEL ================= */}
  <div className="absolute bottom-7 right-6 z-20 hidden sm:block lg:right-12">

    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md">

      <span className="h-1.5 w-1.5 rounded-full bg-[#ED1C24]" />

      {activeSlide === 0 ? "Skills in action" : "Stories of progress"}

    </div>

  </div>

</section>

      {/* INTRO / PROGRAMME NAVIGATION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
                Our programme areas
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Explore how THEHASA connects learning, protection and
                livelihoods into one pathway for young people and families.
              </p>
            </div>

            <nav
              aria-label="Programme areas"
              className="flex flex-wrap gap-2"
            >
              {programmeAreas.map((area) => (
                <a
                  key={area.id}
                  href={`#${area.id}`}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#318EC9] hover:text-[#318EC9]"
                >
                  {area.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* PROGRAMME AREAS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="space-y-24 lg:space-y-32">
          {programmeAreas.map((area) => {
            const AreaIcon = area.icon;

            return (
              <section
                key={area.id}
                id={area.id}
                className="scroll-mt-28"
              >
                {/* AREA HEADER */}
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold tracking-[0.2em] text-[#318EC9]">
                        {area.number}
                      </span>

                      <span className="h-px w-12 bg-[#318EC9]/30" />

                      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {area.label}
                      </span>
                    </div>

                    <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
                      <AreaIcon className="text-2xl" />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                      {area.title}
                    </h2>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* PROGRAMME CARDS */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                  {area.programmes.map((programme, index) => {
                    const ProgrammeIcon = programme.icon;

                    return (
                      <article
                        key={programme.title}
                        className={`group relative overflow-hidden rounded-3xl border border-slate-200 ${area.light} p-7 transition duration-500 hover:-translate-y-1 hover:border-[#318EC9]/30 hover:shadow-xl hover:shadow-slate-200/50 sm:p-8 ${
                          area.programmes.length === 2
                            ? ""
                            : index === area.programmes.length - 1 &&
                                area.programmes.length % 2 !== 0
                              ? "md:col-span-2 lg:max-w-[calc(50%-0.75rem)]"
                              : ""
                        }`}
                      >
                        <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-[#318EC9]/10 transition duration-500 group-hover:scale-150" />

                        <div className="relative">
                          <div className="flex items-start justify-between gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#318EC9] shadow-sm ring-1 ring-[#318EC9]/10">
                              <ProgrammeIcon className="text-xl" />
                            </div>

                            <span className="text-xs font-semibold uppercase tracking-widest text-[#318EC9]/60">
                              Programme
                            </span>
                          </div>

                          <h3 className="mt-7 text-2xl font-bold tracking-tight text-slate-900">
                            {programme.title}
                          </h3>

                          <p className="mt-4 text-sm leading-7 text-slate-600">
                            {programme.description}
                          </p>

                          <div className="mt-7 border-t border-slate-200/80 pt-6">
                            <ul className="space-y-3">
                              {programme.points.map((point) => (
                                <li
                                  key={point}
                                  className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                                >
                                  <FiCheckCircle className="mt-1 shrink-0 text-[#318EC9]" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      {/* HOW IT CONNECTS */}
      <section className="bg-[#318EC9]/5">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
              One connected approach
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The programmes work together.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Education builds skills. Protection creates the safety needed to
              learn and participate. Livelihoods help turn those skills into
              income, savings and opportunity.
            </p>
          </div>

          <div className="relative mt-14">
            {/* Desktop connecting line */}
            <div className="absolute left-[16.67%] right-[16.67%] top-12 hidden h-px bg-[#318EC9]/20 lg:block" />

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Learn",
                  text: "Gain practical skills and build knowledge.",
                  icon: FiBookOpen,
                },
                {
                  number: "02",
                  title: "Stay Safe",
                  text: "Learn and grow in safer, supportive environments.",
                  icon: FiShield,
                },
                {
                  number: "03",
                  title: "Build a Livelihood",
                  text: "Turn skills into income, savings and opportunity.",
                  icon: FiTrendingUp,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="relative rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-200 sm:p-8"
                  >
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#318EC9] text-white shadow-lg shadow-[#318EC9]/20">
                      <Icon className="text-3xl" />

                      <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#ED1C24] text-xs font-bold text-white">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS / CREDIBILITY */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
              How we work
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Programmes designed around real community needs.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              THEHASA brings education, protection and livelihoods together
              rather than treating them as separate pieces. This reflects the
              realities faced by young people and young mothers in Kyangwali.
            </p>

            <Link
              to="/model"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#318EC9] transition hover:gap-3"
            >
              Understand our two-generation model
              <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-4">
            {standards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-[#318EC9]/30 hover:shadow-lg hover:shadow-slate-200/40"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#318EC9]/10 text-xl text-[#318EC9]">
                    <Icon />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COURSE CTA */}
      <section className="bg-[#318EC9]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Ready to learn?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Find a course that can become your next step.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                Explore the practical trades offered through the THEHASA
                Vocational Skills Development Centre and learn how to enrol.
              </p>
            </div>

            <Link
              to="/join-a-course"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ED1C24] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#d71920]"
            >
              Join a Course
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}