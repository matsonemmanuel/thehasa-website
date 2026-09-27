import {
  FiArrowRight,
  FiCheckCircle,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const interests = [
  "Funding",
  "Partnership",
  "Hiring graduates",
  "Joining a course",
  "Visiting",
  "Other",
];

export default function Contact() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#318EC9]">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Contact THEHASA Foundation
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Come and see the work,
              <br />
              or send us a message.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Whether you want to visit the Centre, join a course, partner
              with us or support our work, we would be glad to hear from you.
            </p>

          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION + FORM */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* CONTACT DETAILS */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
              Find us
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              We would love to hear from you.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Visit us at the THEHASA Centre in Kyangwali, or contact the
              Foundation using the details below.
            </p>

            {/* ADDRESS */}
            <div className="mt-10 flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
                <FiMapPin size={23} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Visit us
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Block 30, Kasonga Village,
                  <br />
                  Kyangwali Refugee Settlement,
                  <br />
                  Kikuube District, Uganda.
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="mt-7 flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
                <FiPhone size={23} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Call us
                </h3>

                <div className="mt-2 space-y-1">
                  <a
                    href="tel:+256770952512"
                    className="block text-slate-600 transition hover:text-[#318EC9]"
                  >
                    +256 770 952 512
                  </a>

                  <a
                    href="tel:0393103992"
                    className="block text-slate-600 transition hover:text-[#318EC9]"
                  >
                    0393 103 992
                  </a>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="mt-7 flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
                <FiMail size={23} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  Email us
                </h3>

                <a
                  href="mailto:thehasafoundation@gmail.com"
                  className="mt-2 block break-all text-slate-600 transition hover:text-[#318EC9]"
                >
                  thehasafoundation@gmail.com
                </a>
              </div>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">

              <div className="flex h-64 items-center justify-center p-6 text-center">

                <div>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#318EC9] text-white shadow-lg">
                    <FiMapPin size={26} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    THEHASA Centre
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Block 30, Kasonga Village,
                    <br />
                    Kyangwali Refugee Settlement
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* MESSAGE FORM */}
          <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-100 sm:p-8 lg:p-10">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
                Send us a message
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                How can we help?
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Tell us what you are interested in and someone from THEHASA
                can follow up with you.
              </p>
            </div>

            <form className="mt-8 space-y-6">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
                />
              </div>

              {/* EMAIL / PHONE */}
              <div>
                <label
                  htmlFor="contact"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email or phone
                </label>

                <input
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="Email address or phone number"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
                />
              </div>

              {/* ORGANISATION */}
              <div>
                <label
                  htmlFor="organisation"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Organisation{" "}
                  <span className="font-normal text-slate-400">
                    (optional)
                  </span>
                </label>

                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  placeholder="Organisation name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
                />
              </div>

              {/* INTEREST */}
              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  I am interested in
                </label>

                <select
                  id="interest"
                  name="interest"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  {interests.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us how you would like to connect with THEHASA..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#ED1C24] px-7 py-4 font-semibold text-white transition hover:bg-red-700"
              >
                Send Message
                <FiArrowRight size={18} />
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* NEXT STEP */}
      <section className="bg-[#318EC9]/5">

        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
                Looking for training?
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Ready to learn a trade?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                If you are interested in joining a course at THEHASA, learn
                more about who can join and the skills available.
              </p>
            </div>

            <div className="md:text-right">
              <Link
                to="/join-a-course"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#318EC9] px-7 py-4 font-semibold text-white transition hover:bg-[#2679ad]"
              >
                Explore Our Courses
                <FiArrowRight size={18} />
              </Link>
            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900">

        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 lg:px-12">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#318EC9]">
            <FiCheckCircle size={27} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Come and see the work for yourself.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/70">
            THEHASA is based in Kyangwali Refugee Settlement, Kikuube
            District, Uganda.
          </p>

          <a
            href="tel:+256770952512"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#ED1C24] px-7 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Call +256 770 952 512
            <FiPhone size={18} />
          </a>

        </div>

      </section>

    </main>
  );
}