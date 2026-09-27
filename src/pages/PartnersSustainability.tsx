import { FiArrowRight, FiBriefcase, FiHeart, FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function PartnersSustainability() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#318EC9]">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Our Impact
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Built with partners.
              <br />
              Built to last.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              THEHASA was set up to be a permanent institution, with more than
              one source of income and partnerships that strengthen the work.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
              Why sustainability matters
            </p>

            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              More than a project.
              <br />
              A growing institution.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Many projects in the settlement end when their funding ends, and
              what they built goes with them. THEHASA was set up to be a
              permanent institution, with more than one source of income.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
              <FiTrendingUp size={27} />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Multiple pathways to sustainability
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Partnerships, earned income, training contracts and corporate
              reinvestment all contribute to the long-term model.
            </p>
          </div>

        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
              Who we have worked with
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Partnerships that strengthen our work.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We have delivered vocational training for organisations and
              institutions working to expand opportunities for young people.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* PARTNER 1 */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
                <FiBriefcase size={26} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Bishop Stuart University
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Vocational training delivered under the Mastercard Foundation
                RETI Project.
              </p>
            </div>

            {/* PARTNER 2 */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
                <FiHeart size={26} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Alight
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Vocational training delivered in partnership with Alight.
              </p>
            </div>

            {/* PARTNER 3 */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
                <FiTrendingUp size={26} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                ELECU
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Vocational training delivered under Mastercard Foundation
                programming.
              </p>
            </div>

          </div>

          <div className="mt-10 rounded-2xl border-l-4 border-[#318EC9] bg-white p-6">
            <p className="text-sm leading-7 text-slate-600">
              Our training and assessment are recognised by the Directorate of
              Industrial Training (DIT) and UVTAB.
            </p>
          </div>

        </div>
      </section>

      {/* SUSTAINABILITY MODEL */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
            How we sustain the work
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            A model designed to grow beyond grants.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {/* CORPORATE REINVESTMENT */}
          <div className="rounded-3xl border border-slate-200 p-8">
            <span className="text-sm font-bold text-[#318EC9]">
              01
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Corporate reinvestment
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Our founding commercial partner, THEHASA Holdings Company
              Limited, reinvests 75% of its net profits into Foundation
              programmes.
            </p>
          </div>

          {/* EARNED INCOME */}
          <div className="rounded-3xl border border-slate-200 p-8">
            <span className="text-sm font-bold text-[#318EC9]">
              02
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Earned income
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              The Centre is growing income from its own services, such as salon
              work, poultry, digital services and construction work, which also
              give learners real work experience.
            </p>
          </div>

          {/* TRAINING CONTRACTS */}
          <div className="rounded-3xl border border-slate-200 p-8">
            <span className="text-sm font-bold text-[#318EC9]">
              03
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Training contracts
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              We deliver accredited training for development partners, creating
              an additional source of institutional income.
            </p>
          </div>

          {/* AFFORDABLE FEES */}
          <div className="rounded-3xl border border-slate-200 p-8">
            <span className="text-sm font-bold text-[#318EC9]">
              04
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              Affordable fees
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              As childcare and schooling grow, graduates will pay affordable
              fees from the income their new skills bring.
            </p>
          </div>

        </div>

        {/* TARGET */}
        <div className="mt-10 rounded-3xl bg-[#318EC9] p-8 sm:p-10">
          <p className="max-w-3xl text-xl font-semibold leading-8 text-white sm:text-2xl">
            Our target is for earned income to cover at least 40% of our
            operating costs by Year 3.
          </p>
        </div>

      </section>

      {/* WHERE WE ARE GOING */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#318EC9]">
              Where we are going
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Build the model. Document it. Share what works.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Our first goal is to make the full two-generation model work in
              Kyangwali, with permanent childcare in place and every trade
              accredited.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/75">
              We will then document the model so that partners in other
              refugee-hosting districts of Uganda, and later in the wider East
              African region, can adapt it.
            </p>

            <Link
              to="/get-involved"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ED1C24] px-7 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              Partner With Us
              <FiArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}