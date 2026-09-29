import {
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import contactHeroImage from "../assets/images/programs/Tailoring.jpg";

const interests = [
  "Funding",
  "Partnership",
  "Hiring graduates",
  "Joining a course",
  "Visiting",
  "Other",
];
const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=THEHASA+Foundation%2C+Block+30%2C+Kasonga+Village%2C+Kyangwali+Refugee+Settlement%2C+Kikuube+District%2C+Uganda";

export default function Contact() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative isolate min-h-[560px] overflow-hidden sm:min-h-[620px]">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <img
            src={contactHeroImage}
            alt="THEHASA Foundation Centre in Kyangwali"
            className="h-full w-full object-cover object-[65%_center]"
          />
        </div>

        {/* Simple overlay — no gradient */}
        <div className="absolute inset-0 -z-10 bg-[#073A68]/65" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-24 sm:min-h-[620px] sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
                Contact THEHASA Foundation
              </p>

              <div className="mt-4 h-1 w-12 bg-[#ED1C24]" />
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Come and see the work,
              <br />
              <span className="text-[#9ED8FF]">
                or send us a message.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Whether you want to visit the Centre, join a course, partner
              with us or support our work, we would be glad to hear from you.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact-details"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#ED1C24] px-7 py-4 font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-red-700 hover:shadow-xl"
              >
                Get in Touch
                <FiArrowRight size={18} />
              </a>

              <a
                href="#location"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/60 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Find Us
                <FiMapPin size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION + FORM */}
<section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

    {/* LEFT — FIND US */}
    <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">

      {/* EMAIL */}
      <div className="border-b border-slate-200 pb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
          Email
        </p>

        <a
          href="mailto:thehasafoundation@gmail.com"
          className="mt-2 block break-all text-lg font-medium text-slate-800 transition hover:text-[#318EC9]"
        >
          thehasafoundation@gmail.com
        </a>
      </div>

      {/* FIND US */}
      <div className="flex flex-1 flex-col justify-center py-10">

        <a
  href={googleMapsUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex w-fit text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9] transition hover:text-[#ED1C24]"
>
  Find Us
</a>

        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Come and visit us.
        </h2>

        <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">
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

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block leading-7 text-slate-600 transition hover:text-[#318EC9]"
            >
              Block 30, Kasonga Village,
              <br />
              Kyangwali Refugee Settlement,
              <br />
              Kikuube District, Uganda.
            </a>
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

      </div>
    </div>


    {/* RIGHT COLUMN */}
    <div className="grid gap-8">

      {/* SEND MESSAGE */}
      <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">

        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
          Send Message
        </p>

        <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
          How can we help?
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Tell us what you are interested in and someone from THEHASA
          can follow up with you.
        </p>

        <form className="mt-7 space-y-5">

          {/* NAME + CONTACT */}
          <div className="grid gap-5 sm:grid-cols-2">

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
                placeholder="Email or phone number"
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
              />
            </div>

          </div>


          {/* ORGANISATION + INTEREST */}
          <div className="grid gap-5 sm:grid-cols-2">

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
              rows={5}
              placeholder="Tell us how you would like to connect with THEHASA..."
              required
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
            />
          </div>


          {/* SEND BUTTON */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ED1C24] px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Send Message
              <FiArrowRight size={18} />
            </button>
          </div>

        </form>
      </div>


      {/* GOOGLE MAP */}
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">

  <div className="relative h-[360px] w-full">

    <iframe
      title="THEHASA Foundation Centre location"
      src="https://www.google.com/maps?q=THEHASA+Foundation,+Kyangwali+Refugee+Settlement,+Kikuube,+Uganda&output=embed"
      className="h-full w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

    {/* Open in Google Maps */}
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#318EC9] shadow-lg transition hover:bg-[#318EC9] hover:text-white"
    >
      <FiMapPin size={18} />
      Open in Google Maps
    </a>

  </div>

</div>

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