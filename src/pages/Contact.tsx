
import { useState, type FormEvent } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiPhone,
  FiMail,
  FiMessageCircle,
  FiExternalLink,
  FiBookOpen,
  FiUsers,
  FiHeart,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import contactHeroImage from "../assets/images/programs/contact.jpg";

const CONTACT_EMAIL = "thehasafoundation@gmail.com";
const CONTACT_PHONE = "+256 770 952 512";
const WHATSAPP_NUMBER = "+256393103992";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=THEHASA+Foundation%2C+Block+30%2C+Kasonga+Village%2C+Kyangwali+Refugee+Settlement%2C+Kikuube+District%2C+Uganda";

const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=THEHASA+Foundation,+Kyangwali+Refugee+Settlement,+Kikuube,+Uganda&output=embed";

const interests = [
  "Funding",
  "Partnership",
  "Hiring graduates",
  "Joining a course",
  "Visiting",
  "Other",
];

export default function Contact() {
  const [formNotice, setFormNotice] = useState("");

  // Prepare the visitor's message in their email application.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const contact = String(formData.get("contact") || "");
    const organisation = String(formData.get("organisation") || "");
    const interest = String(formData.get("interest") || "");
    const message = String(formData.get("message") || "");

    const subject = `THEHASA Website Enquiry - ${interest}`;

    const body = `
Hello THEHASA Foundation,

I would like to get in touch with your organisation.

Name: ${name}
Email or Phone: ${contact}
Organisation: ${organisation || "Not provided"}
Area of Interest: ${interest}

Message:
${message}

Thank you.
    `.trim();

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setFormNotice(
      "Your email application should open with your message prepared. Please review and send it to THEHASA."
    );

    window.location.href = mailtoUrl;
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello THEHASA Foundation, I would like to know more about your work."
  )}`;

  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative isolate min-h-[560px] overflow-hidden sm:min-h-[620px]">

        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src={contactHeroImage}
            alt="THEHASA Foundation community and training participants in Kyangwali"
            className="h-full w-full object-cover object-[65%_center]"
            fetchPriority="high"
          />
        </div>

        {/* Blue Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#073A68]/65" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-24 sm:min-h-[620px] sm:px-8 lg:px-12 lg:py-28">

          <div className="max-w-3xl">

            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/85 sm:text-sm">
                Contact THEHASA Foundation
              </p>

              <div className="mt-5 h-1 w-14 rounded-full bg-[#ED1C24]" />
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Come and see the work,
              <br />

              <span className="text-[#9ED8FF]">
                or send us a message.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 sm:text-lg lg:text-xl">
              Whether you want to visit the Centre, join a course,
              partner with us or support our work, we would be glad
              to hear from you.
            </p>

            {/* Hero Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="#contact-details"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#ED1C24] px-7 py-4 font-bold text-white shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
              >
                Get in Touch
                <FiArrowRight size={19} />
              </a>

              <a
                href="#location"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/60 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#073A68]"
              >
                Find Us
                <FiMapPin size={19} />
              </a>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT DETAILS AND MESSAGE FORM
      ====================================================== */}
      <section
        id="contact-details"
        className="scroll-mt-24 bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >

        <div className="mx-auto max-w-7xl">

          {/* Section Introduction */}
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#318EC9]">
              Let's Connect
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              We'd love to hear from you.
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Have a question, an idea or an opportunity to work
              together? Reach out to THEHASA Foundation.
            </p>
          </div>


          <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">

            {/* =================================================
                LEFT COLUMN - CONTACT INFORMATION
            ================================================== */}
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-[#F8FBFE] p-7 sm:p-9">

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#318EC9]">
                  Contact Information
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  Come and visit us.
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Visit the THEHASA Centre in Kyangwali or contact
                  our team using the information below.
                </p>
              </div>


              {/* Email */}
              <div className="mt-9 flex gap-5 border-b border-slate-200 pb-7">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
                  <FiMail size={22} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900">
                    Email Us
                  </h3>

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-2 block break-all text-slate-600 transition hover:text-[#318EC9]"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>


              {/* Address */}
              <div className="flex gap-5 border-b border-slate-200 py-7">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
                  <FiMapPin size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Visit Our Centre
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

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#318EC9] hover:text-[#ED1C24]"
                  >
                    Get Directions
                    <FiExternalLink size={15} />
                  </a>
                </div>
              </div>


              {/* Phone */}
              <div className="flex gap-5 border-b border-slate-200 py-7">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
                  <FiPhone size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Call Us
                  </h3>

                  <div className="mt-2 space-y-2">
                    <a
                      href="tel:+256770952512"
                      className="block text-slate-600 transition hover:text-[#318EC9]"
                    >
                      +256 770 952 512
                    </a>

                    <a
                      href="tel:+256393103992"
                      className="block text-slate-600 transition hover:text-[#318EC9]"
                    >
                      0393 103 992
                    </a>
                  </div>
                </div>
              </div>


              {/* WhatsApp */}
              <div className="flex gap-5 pt-7">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                  <FiMessageCircle size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    WhatsApp
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Have a quick question? Send us a WhatsApp message.
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-700"
                  >
                    Chat With Us
                    <FiArrowRight size={16} />
                  </a>
                </div>
              </div>

            </div>


            {/* =================================================
                RIGHT COLUMN - CONTACT FORM
            ================================================== */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#318EC9]">
                Send a Message
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                How can we help?
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Tell us what you are interested in and someone from
                THEHASA can follow up with you.
              </p>


              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Name and Contact */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="contact"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Email or Phone *
                    </label>

                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      autoComplete="email"
                      placeholder="Email or phone number"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
                    />
                  </div>

                </div>


                {/* Organisation and Interest */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="organisation"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Organisation
                      <span className="ml-1 font-normal text-slate-400">
                        (Optional)
                      </span>
                    </label>

                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      autoComplete="organization"
                      placeholder="Organisation name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      I Am Interested In *
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


                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Your Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how you would like to connect with THEHASA..."
                    required
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#318EC9] focus:ring-2 focus:ring-[#318EC9]/10"
                  />
                </div>


                {/* Submission Notice */}
                {formNotice && (
                  <div
                    role="status"
                    className="rounded-xl border border-[#318EC9]/20 bg-[#318EC9]/5 p-4 text-sm leading-6 text-slate-700"
                  >
                    {formNotice}

                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="ml-1 font-bold text-[#318EC9] underline"
                    >
                      Open email manually.
                    </a>
                  </div>
                )}


                {/* Submit Button */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">

                  <p className="text-xs text-slate-400">
                    Fields marked * are required.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#ED1C24] px-8 py-4 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg"
                  >
                    Send Message
                    <FiArrowRight size={18} />
                  </button>

                </div>

              </form>

              <p className="mt-5 text-xs leading-6 text-slate-400">
                Submitting opens your device's email application with
                your message prepared. You will need to send the email
                to complete your enquiry.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          GOOGLE MAPS LOCATION
      ====================================================== */}
      <section
        id="location"
        className="scroll-mt-24 bg-[#F8FBFE] px-6 py-20 sm:px-8 lg:px-12"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#318EC9]">
                Find Our Centre
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Come and visit us.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                We welcome visitors, partners and community members
                to connect with our work in Kyangwali.
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-xl bg-[#318EC9] px-6 py-3.5 font-bold text-white transition hover:bg-[#2679ad]"
            >
              Open Google Maps
              <FiExternalLink size={17} />
            </a>

          </div>


          {/* Map */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            <iframe
              title="THEHASA Foundation location in Kyangwali, Uganda"
              src={googleMapsEmbedUrl}
              className="h-[360px] w-full border-0 sm:h-[450px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

          </div>


          {/* Address underneath map */}
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#318EC9]/10 text-[#318EC9]">
                <FiMapPin size={22} />
              </div>

              <div>
                <h3 className="font-bold text-slate-900">
                  THEHASA Foundation Centre
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Block 30, Kasonga Village, Kyangwali Refugee
                  Settlement, Kikuube District, Uganda.
                </p>
              </div>

            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#318EC9] transition hover:text-[#ED1C24]"
            >
              Get Directions
              <FiArrowRight size={17} />
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          QUICK CONNECTION LINKS
      ====================================================== */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#318EC9]">
              Take the Next Step
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How would you like to connect?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Whether you are looking to learn, collaborate or
              support our mission, there is a place for you.
            </p>
          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {/* Courses */}
            <div className="rounded-2xl border border-slate-200 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#318EC9]/10 text-[#318EC9]">
                <FiBookOpen size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Join a Course
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Discover vocational training opportunities and
                practical skills development programmes.
              </p>

              <Link
                to="/join-a-course"
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#318EC9] transition hover:text-[#ED1C24]"
              >
                Explore Courses
                <FiArrowRight size={17} />
              </Link>

            </div>


            {/* Partnerships */}
            <div className="rounded-2xl border border-slate-200 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#318EC9]/10 text-[#318EC9]">
                <FiUsers size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Partner With Us
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Work with THEHASA to expand opportunities for
                young people, mothers and children.
              </p>

              <Link
                to="/get-involved"
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#318EC9] transition hover:text-[#ED1C24]"
              >
                Get Involved
                <FiArrowRight size={17} />
              </Link>

            </div>


            {/* Support */}
            <div className="rounded-2xl border border-slate-200 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#318EC9]/10 text-[#318EC9]">
                <FiHeart size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Support Our Work
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Help strengthen families and create opportunities
                for young mothers and their children.
              </p>

              <Link
                to="/get-involved"
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#318EC9] transition hover:text-[#ED1C24]"
              >
                Support THEHASA
                <FiArrowRight size={17} />
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CALL TO ACTION
      ====================================================== */}
      <section className="bg-slate-900 px-6 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-[#9ED8FF]">
            <FiCheckCircle size={30} />
          </div>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#9ED8FF]">
            Building a Better Future Together
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Come and see the work for yourself.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            THEHASA is based in Kyangwali Refugee Settlement,
            Kikuube District, Uganda. We would be glad to connect
            with you.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="tel:0393103992"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#ED1C24] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-red-700"
            >
              Call {CONTACT_PHONE}
              <FiPhone size={18} />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-900"
            >
              Message Us
              <FiMessageCircle size={18} />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}
