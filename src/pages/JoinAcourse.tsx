import {
  FiArrowRight,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiChevronRight,
  FiDollarSign,
  FiHeart,
  FiHome,
  FiLayers,
  FiPhone,
  FiStar,
  FiTool,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import joinCourseVideo from "../assets/videos/success.mp4";

const courses = [
  {
    title: "Tailoring & Garment Cutting",
    description:
      "Learn pattern cutting, garment making, machine operation and finishing.",
    category: "Creative & Fashion",
    icon: FiLayers,
  },
  {
    title: "Hairdressing & Beauty Therapy",
    description:
      "Build professional hair, skin care and beauty skills for salon work or mobile services.",
    category: "Beauty & Personal Care",
    icon: FiStar,
  },
  {
    title: "Carpentry & Joinery",
    description:
      "Learn furniture making and construction woodwork for practical local opportunities.",
    category: "Construction & Craft",
    icon: FiTool,
  },
  {
    title: "Building, Block Laying & Concrete Practice",
    description:
      "Develop practical skills in masonry, concrete mixing and basic building construction.",
    category: "Construction",
    icon: FiHome,
  },
  {
    title: "Welding & Metal Fabrication",
    description:
      "Learn arc welding, metal cutting and basic structural metalwork.",
    category: "Construction & Fabrication",
    icon: FiTool,
  },
  {
    title: "Motorcycle Mechanics & Repair",
    description:
      "Develop practical skills for servicing and repairing motorcycles used every day in the community.",
    category: "Mechanical Skills",
    icon: FiBriefcase,
  },
  {
    title: "Poultry Production & Agribusiness",
    description:
      "Learn poultry keeping, feeding, disease prevention and selling.",
    category: "Agribusiness",
    icon: FiTrendingUp,
  },
  {
    title: "Computer Applications",
    description:
      "Build practical skills in word processing, spreadsheets, email and internet use.",
    category: "Digital Skills",
    icon: FiBookOpen,
  },
  {
    title: "Graphics Design",
    description:
      "Learn to create logos, print materials and digital graphics.",
    category: "Digital & Creative",
    icon: FiLayers,
  },
  {
    title: "Digital Marketing",
    description:
      "Learn social media, content creation and online promotion for small businesses.",
    category: "Digital Skills",
    icon: FiTrendingUp,
  },
];

export default function JoinACourse() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#318EC9] sm:min-h-[660px]">

        {/* Background video */}
        <div className="absolute inset-0 -z-20">
          <video
            src={joinCourseVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="h-full w-full object-cover object-[65%_center]"
          />
        </div>

        {/* Main blue gradient */}
        <div
          className="
            absolute inset-0 -z-10
            bg-[linear-gradient(90deg,#073A68_0%,#0A4779_28%,rgba(49,142,201,0.94)_48%,rgba(49,142,201,0.62)_65%,rgba(49,142,201,0.12)_88%,rgba(49,142,201,0)_100%)]
          "
        />

        {/* Bottom blue fade */}
        <div
          className="
            absolute inset-x-0 bottom-0 -z-10 h-48
            bg-linear-to-t
            from-[#073A68]/80
            via-[#073A68]/25
            to-transparent
          "
        />

        {/* Additional left-side readability overlay */}
        <div
          className="
            absolute inset-y-0 left-0 -z-10 w-[65%]
            bg-linear-to-r
            from-[#073A68]/45
            via-[#073A68]/20
            to-transparent
          "
        />

        {/* Decorative blue shapes */}
        <div
          className="
            pointer-events-none absolute -bottom-32 -left-24 -z-10
            h-72 w-[65%]
            rotate-[-8deg]
            rounded-[50%]
            bg-[#0B4F87]/45
            blur-sm
          "
        />

        <div
          className="
            pointer-events-none absolute -bottom-44 left-[12%] -z-10
            h-72 w-[60%]
            rotate-[-6deg]
            rounded-[50%]
            bg-[#318EC9]/35
          "
        />

        {/* Hero content */}
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 sm:min-h-[660px] sm:px-8 lg:px-12 lg:py-32">

          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
                THEHASA Vocational Skills Development Centre
              </p>

              <div className="mt-4 h-1 w-12 bg-[#ED1C24]" />
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Left school?
              <br />
              Have a baby?
              <br />
              <span className="text-[#9ED8FF]">
                You can still learn a trade.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              At THEHASA, you learn a skill with your hands, get a national
              certificate, and learn how to earn and save from it.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="tel:+256770952512"
                className="
                  inline-flex items-center justify-center gap-3
                  rounded-xl
                  bg-[#ED1C24]
                  px-7 py-4
                  font-semibold text-white
                  shadow-lg shadow-black/10
                  transition
                  hover:bg-red-700
                  hover:shadow-xl
                "
              >
                Call Us to Enrol
                <FiPhone size={18} />
              </a>

              <a
                href="#who-can-join"
                className="
                  inline-flex items-center justify-center gap-3
                  rounded-xl
                  border border-white/60
                  bg-white/5
                  px-7 py-4
                  font-semibold text-white
                  backdrop-blur-sm
                  transition
                  hover:bg-white/10
                "
              >
                See Who Can Join
                <FiArrowRight size={18} />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* COURSE INTRODUCTION */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
          Learn a skill. Build your future.
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Practical skills that can lead to work, income and independence.
        </h2>
      </div>

      <div>
        <p className="text-lg leading-8 text-slate-600">
          At THEHASA, training is designed to take you beyond learning a
          trade. You build practical skills, prepare for assessment, learn
          how to manage a business and develop habits that can help you turn
          your skills into income.
        </p>

        <div className="mt-6">
          <Link
            to="/what-we-do"
            className="inline-flex items-center gap-2 font-semibold text-[#318EC9] transition hover:gap-3"
          >
            See how our programmes connect
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* COURSE BENEFITS */}
<section className="border-y border-slate-200 bg-slate-50">
  <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {[
        {
          icon: FiTool,
          title: "Practical training",
          text: "Learn through hands-on, competency-based training.",
        },
        {
          icon: FiCheckCircle,
          title: "UVTAB assessment",
          text: "Prepare for assessment against recognised standards.",
        },
        {
          icon: FiBriefcase,
          title: "Business skills",
          text: "Learn pricing, selling, customer care and record keeping.",
        },
        {
          icon: FiDollarSign,
          title: "Savings pathway",
          text: "Build saving habits and a pathway into CoSCA savings and credit.",
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#318EC9]/10 text-[#318EC9]">
              <Icon className="text-xl" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* OUR COURSES */}
<section className="bg-white" id="courses">
  <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
        Our courses
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Choose a skill you can build on.
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        All courses are practical and competency-based. Learners are assessed
        by UVTAB and can work towards a nationally recognised certificate.
      </p>
    </div>

    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => {
        const Icon = course.icon;

        return (
          <article
            key={course.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9] transition group-hover:bg-[#318EC9] group-hover:text-white">
                <Icon className="text-xl" />
              </div>

              <span className="text-xs font-bold text-slate-300">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#318EC9]">
              {course.category}
            </p>

            <h3 className="mt-2 text-xl font-bold leading-snug text-slate-900">
              {course.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {course.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900">
              Practical learning
              <FiChevronRight className="text-[#318EC9] transition group-hover:translate-x-1" />
            </div>
          </article>
        );
      })}
    </div>

    <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-[#318EC9] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
          Not sure which course fits you?
        </p>

        <h3 className="mt-2 text-xl font-bold sm:text-2xl">
          Talk to us about the skill you want to learn.
        </h3>
      </div>

      <a
        href="tel:+256770952512"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#ED1C24] px-5 py-3 font-semibold text-white transition hover:brightness-95"
      >
        Call Us
        <FiPhone />
      </a>
    </div>
  </div>
</section>

{/* LEARN TO EARN */}
<section className="bg-slate-50">
  <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
          More than a trade
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Learn the skill. Learn the business. Build the income.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          A skill only changes a family's life when it becomes an income.
          That is why business and financial skills are connected to training,
          rather than treated as something that comes much later.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            number: "01",
            title: "Learn",
            text: "Build practical skills through hands-on training.",
          },
          {
            number: "02",
            title: "Earn",
            text: "Use your skills to produce real work and explore income opportunities.",
          },
          {
            number: "03",
            title: "Save",
            text: "Build saving habits and access pathways through CoSCA.",
          },
          {
            number: "04",
            title: "Build",
            text: "Develop the confidence and knowledge to grow a livelihood.",
          },
        ].map((item) => (
          <div
            key={item.number}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <span className="text-sm font-bold text-[#318EC9]">
              {item.number}
            </span>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* WHAT YOU WILL GET */}
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
          What you will get
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Support that connects learning to real life.
        </h2>

        <div className="mt-8 space-y-4">
          {[
            {
              icon: FiTool,
              title: "Practical training",
              text: "Training in a trade taught through practical, hands-on learning.",
            },
            {
              icon: FiCheckCircle,
              title: "UVTAB assessment",
              text: "An opportunity to be assessed by UVTAB and work towards a nationally recognised certificate.",
            },
            {
              icon: FiBriefcase,
              title: "Business skills",
              text: "Learn how to understand the market, price, sell, serve customers and keep records.",
            },
            {
              icon: FiDollarSign,
              title: "Financial literacy and savings",
              text: "Build skills in budgeting, record keeping, profit and loss, and saving through CoSCA.",
            },
            {
              icon: FiHeart,
              title: "Childcare support",
              text: "For young mothers, childcare during training hours is part of the model, subject to current availability.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#318EC9]/10 text-[#318EC9]">
                  <Icon />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl bg-[#318EC9] p-8 text-white sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
          <FiHeart className="text-2xl" />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
          For young mothers
        </p>

        <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
          You do not have to choose between learning and caring for your child.
        </h3>

        <p className="mt-5 leading-7 text-white/85">
          THEHASA's two-generation approach connects vocational training with
          childcare and early learning, so a mother can work towards her future
          while her child is cared for and supported.
        </p>

        <Link
          to="/model"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-white transition hover:gap-3"
        >
          See our two-generation model
          <FiArrowRight />
        </Link>
      </div>
    </div>
  </div>
</section>

{/* WHO CAN JOIN */}
<section className="bg-slate-50">
  <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
        Who can join
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        There is a pathway for young people ready to learn.
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        THEHASA's courses are designed for young people and families who want
        practical skills and a pathway towards greater economic independence.
      </p>
    </div>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {[
        "Young people aged 13 to 35",
        "Young people who left school at any level",
        "Young mothers",
        "Young people with disabilities",
        "Refugees and members of the host community",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <FiUsers className="text-xl text-[#318EC9]" />

          <p className="mt-4 text-sm font-semibold leading-6 text-slate-800">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* HOW TO JOIN */}
<section className="bg-white" id="how-to-join">
  <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
          How to join
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Ready to start learning?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Getting started is simple. Contact THEHASA, tell us the trade you
          are interested in and speak with the team about the current intake
          requirements.
        </p>

        <a
          href="tel:+256770952512"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ED1C24] px-6 py-3.5 font-semibold text-white transition hover:brightness-95"
        >
          Call Us to Enrol
          <FiPhone />
        </a>
      </div>

      <div className="space-y-4">
        {[
          {
            number: "01",
            title: "Visit or call THEHASA",
            text: "Visit us at Block 30, Kasonga Village, Kyangwali Refugee Settlement, or call +256 770 952 512.",
          },
          {
            number: "02",
            title: "Tell us the trade you want to learn",
            text: "Let the team know which course interests you so you can receive the relevant enrolment information.",
          },
          {
            number: "03",
            title: "Confirm enrolment requirements",
            text: "Speak with the team about the documents, next intake and fees applicable to the current training cycle.",
          },
          {
            number: "04",
            title: "Start your learning journey",
            text: "Begin practical training and work towards building skills that can connect to work, income and savings.",
          },
        ].map((step) => (
          <div
            key={step.number}
            className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#318EC9] text-sm font-bold text-white">
              {step.number}
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-14 flex flex-col gap-5 rounded-3xl border border-[#318EC9]/20 bg-[#318EC9]/5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
          Need more information before you enrol?
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Contact THEHASA and ask about courses, current intake requirements
          and available support for learners.
        </p>
      </div>

      <Link
        to="/contact"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#318EC9] px-5 py-3 font-semibold text-[#318EC9] transition hover:bg-[#318EC9] hover:text-white"
      >
        Contact THEHASA
        <FiArrowRight />
      </Link>
    </div>
  </div>
</section>

    </main>
  );
}