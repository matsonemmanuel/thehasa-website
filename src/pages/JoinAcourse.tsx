import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiPhone,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const trades = [
  "Tailoring",
  "Hairdressing",
  "Carpentry",
  "Building",
  "Welding",
  "Motorcycle Mechanics",
  "Poultry & Agribusiness",
  "Computer Applications",
  "Graphics Design",
  "Digital Marketing",
];

const learners = [
  "Young people aged 13 to 35.",
  "Young people who left school at any level.",
  "Young mothers.",
  "Young people with disabilities.",
  "Refugees and members of the host community.",
];

const benefits = [
  "Practical training in a trade, taught by experienced trainers.",
  "An assessment by UVTAB and a nationally recognised certificate.",
  "Business skills: how to price, sell and manage your money.",
  "A chance to save through CoSCA.",
];

export default function JoinACourse() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#318EC9]">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              THEHASA Vocational Skills Development Centre
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Left school?
              <br />
              Have a baby?
              <br />
              You can still learn a trade.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              At THEHASA, you learn a skill with your hands, get a national
              certificate, and learn how to earn and save from it.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="tel:+256770952512"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ED1C24] px-7 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Call Us to Enrol
                <FiPhone size={18} />
              </a>

              <a
                href="#who-can-join"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                See Who Can Join
                <FiArrowRight size={18} />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
              Your future is still possible
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Learn a skill. Build an income. Invest in tomorrow.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              At THEHASA, practical vocational training is connected to business
              skills, savings and opportunities to earn.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              If you are a mother, the model is designed around the reality that
              your child also needs care while you learn.
            </p>
          </div>

          <div className="rounded-3xl bg-[#318EC9]/5 p-8 ring-1 ring-[#318EC9]/10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
              <FiBookOpen size={27} />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Skills that can lead somewhere
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Training is practical, competency-based and assessed through
              UVTAB for a nationally recognised certificate.
            </p>

          </div>

        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section
        id="who-can-join"
        className="bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
              Who can join
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              There is a pathway for you.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              THEHASA's training is designed for young people and families who
              want practical skills and a pathway towards earning.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {learners.map((learner, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#318EC9] text-white">
                  <FiUsers size={18} />
                </div>

                <p className="mt-5 text-sm font-medium leading-6 text-slate-700">
                  {learner}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TRADES */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
            Choose a skill
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Practical trades you can learn.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Training at THEHASA covers practical skills that can open pathways
            to employment, self-employment and enterprise.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {trades.map((trade, index) => (
            <div
              key={trade}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#318EC9]/30 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-[#318EC9]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 font-bold text-slate-900">
                {trade}
              </h3>

              <div className="mt-4 h-1 w-8 rounded-full bg-[#ED1C24] transition-all duration-300 group-hover:w-14" />
            </div>
          ))}

        </div>

      </section>

      {/* WHAT YOU GET */}
      <section className="bg-[#318EC9]/5">

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
                What you will get
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                More than a certificate.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The goal is to help you turn a practical skill into a pathway
                towards earning, saving and building your future.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100"
                >
                  <div className="shrink-0 text-[#318EC9]">
                    <FiCheckCircle size={23} />
                  </div>

                  <p className="text-sm leading-6 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}

              <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:col-span-2">
                <div className="shrink-0 text-[#318EC9]">
                  <FiCheckCircle size={23} />
                </div>

                <p className="text-sm leading-6 text-slate-700">
                  Care for your child during training hours is part of the
                  model, subject to confirmed availability and age limits.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* HOW TO JOIN */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
            How to join
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Ready to start?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Getting started begins with a conversation about the trade you are
            interested in.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-200 p-7">
            <span className="text-4xl font-bold text-[#318EC9]">01</span>

            <h3 className="mt-5 text-xl font-bold">
              Visit or call
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Visit us at Block 30, Kasonga Village, Kyangwali Refugee
              Settlement, or call us.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-7">
            <span className="text-4xl font-bold text-[#318EC9]">02</span>

            <h3 className="mt-5 text-xl font-bold">
              Choose your trade
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Tell us which trade you are interested in learning.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-7">
            <span className="text-4xl font-bold text-[#318EC9]">03</span>

            <h3 className="mt-5 text-xl font-bold">
              Start your journey
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Speak with the Centre about the current training opportunities
              and the next steps for enrolment.
            </p>
          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 sm:p-10">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
                Ready to begin?
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Call THEHASA to enquire about enrolment.
              </h3>

              <p className="mt-3 text-white/70">
                +256 770 952 512
              </p>
            </div>

            <a
              href="tel:+256770952512"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#ED1C24] px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Call Us to Enrol
              <FiPhone size={18} />
            </a>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-[#318EC9]">

        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 lg:px-12">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Your next chapter can start with a skill.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Learn a trade, build your skills and take the next step towards
            earning and saving.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:+256770952512"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ED1C24] px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Call Us to Enrol
              <FiPhone size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
              <FiArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}