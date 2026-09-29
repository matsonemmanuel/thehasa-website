import {
  FiArrowRight,
  FiBriefcase,
  FiHeart,
  FiShare2,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import getInvolvedImage from "../assets/images/programs/Involved.jpg";

export default function GetInvolved() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#318EC9] sm:min-h-[660px]">

        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <img
            src={getInvolvedImage}
            alt="THEHASA Foundation community"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Main blue gradient overlay */}
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

        {/* Subtle dark overlay on the left for text readability */}
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
        <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-72 w-[65%] rotate-[-8deg] rounded-[50%] bg-[#0B4F87]/45 blur-sm" />

        <div className="pointer-events-none absolute -bottom-44 left-[12%] -z-10 h-72 w-[60%] rotate-[-6deg] rounded-[50%] bg-[#318EC9]/35" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 sm:min-h-[660px] sm:px-8 lg:px-12 lg:py-32">

          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
                Get Involved
              </p>

              <div className="mt-4 h-1 w-12 bg-[#ED1C24]" />
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              There is a place for you{" "}
              <span className="text-[#9ED8FF]">
                in this story.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Whether you can fund, share your expertise, give work to a
              graduate, or simply tell someone about us, you can help a mother
              and her child move forward together.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#urgent-need"
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
                Support a Mother and Child
                <FiArrowRight size={18} />
              </a>

              <Link
                to="/contact"
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
                Contact Us
                <FiArrowRight size={18} />
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* URGENT NEED */}
      <section
        id="urgent-need"
        className="bg-[#318EC9]/5"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
                Our most urgent need
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Make childcare permanent for 60 children.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We are raising support to turn childcare at the Centre into a
                permanent Day Care and Early Childhood Development Centre for
                up to 60 children aged 0 to 5.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Your support will help provide the care children need while
                mothers attend full training days.
              </p>
            </div>

            {/* FUNDING CARD */}
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100 sm:p-10">

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Fundraising target
                  </p>

                  <p className="mt-2 text-4xl font-bold text-[#318EC9] sm:text-5xl">
                    UGX 21M
                  </p>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ED1C24]/10 text-[#ED1C24]">
                  <FiHeart size={26} />
                </div>
              </div>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-0 rounded-full bg-[#ED1C24]" />
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Progress will be shown here once an approved fundraising
                tracking system is in place.
              </p>

              <a
                href="tel:+256770952512"
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ED1C24] px-6 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Support Permanent Childcare
                <FiArrowRight size={18} />
              </a>

            </div>
          </div>

          {/* WHAT SUPPORT PROVIDES */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold text-slate-900">
              Your support will pay for:
            </h3>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

              {[
                "Trained caregivers and child minders.",
                "A safe space for children aged 0 to 5.",
                "Early learning materials.",
                "Daily meals and wellbeing checks.",
                "Child protection systems and training.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#318EC9] text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="mt-4 text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-[#318EC9] bg-white p-6">
              <p className="leading-7 text-slate-700">
                <span className="font-semibold">What it makes possible:</span>{" "}
                care and early learning for up to 60 children, mothers able to
                attend full training days, and children who start primary school
                ready to learn.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* OTHER WAYS TO HELP */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
            Other ways to help
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Your support can take many forms.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            You do not have to give money to contribute. Your expertise,
            connections, opportunities and time can also help families move
            forward.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {/* GRADUATE BUSINESS */}
          <div className="group rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#318EC9]/30 hover:shadow-lg">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
              <FiBriefcase size={26} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Back a graduate's first business
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              A certificate opens the door. Start-up capital lets a graduate
              walk through it. Support start-up capital through CoSCA, and help
              more graduates follow the seven who now own registered
              businesses.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#318EC9]"
            >
              Ask how to support a graduate
              <span className="transition-transform group-hover:translate-x-1">
                <FiArrowRight />
              </span>
            </Link>
          </div>

          {/* PARTNER */}
          <div className="group rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#318EC9]/30 hover:shadow-lg">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
              <FiUsers size={26} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Partner with us
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Share expertise in early childhood education, inclusive
              education or disability inclusion.
            </p>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#318EC9]" />
                Support recognition of our early childhood centre by the
                Ministry of Education and Sports.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#318EC9]" />
                Commission training from an accredited centre with a track
                record of delivery.
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#318EC9]"
            >
              Start a conversation
              <span className="transition-transform group-hover:translate-x-1">
                <FiArrowRight />
              </span>
            </Link>
          </div>

          {/* HIRE OR BUY */}
          <div className="group rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#318EC9]/30 hover:shadow-lg">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
              <FiShoppingBag size={26} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Hire or buy from our graduates
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Our graduates offer tailoring, hairdressing and beauty,
              carpentry, welding, building and concrete work, motorcycle
              repair, poultry products, graphics design, digital marketing and
              computer services.
            </p>

            <p className="mt-4 font-medium leading-7 text-slate-700">
              Hiring them or buying their work is one of the most direct ways
              to support a family.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#318EC9]"
            >
              Tell Us What You Need
              <span className="transition-transform group-hover:translate-x-1">
                <FiArrowRight />
              </span>
            </Link>
          </div>

          {/* VISIT / VOLUNTEER */}
          <div className="group rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#318EC9]/30 hover:shadow-lg">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
              <FiShare2 size={26} />
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              Visit, volunteer or stay connected
            </h3>

            <ul className="mt-5 space-y-4 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#318EC9]" />
                Visit the Centre in Kyangwali and see the work for yourself.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#318EC9]" />
                Volunteer your professional skills, in person or remotely.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#318EC9]" />
                Share our story and introduce us to one person who should know
                about this work.
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-[#318EC9]"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-1">
                <FiArrowRight />
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* HOW TO GIVE / SAFETY */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
              Giving safely
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Give through official THEHASA channels.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              For your protection, only give to accounts registered in the name
              of THEHASA Foundation. If anyone asks you to pay into a personal
              account, please report it to us.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="tel:+256770952512"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ED1C24] px-7 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Call +256 770 952 512
                <FiArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Contact THEHASA
              </Link>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}