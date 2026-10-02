import { Link } from "react-router-dom";
import {
  FiScissors,
  FiBookOpen,
  FiCreditCard,
} from "react-icons/fi";

const steps = [
  {
    icon: FiScissors,
    title: "She learns a trade",
    description:
      "Practical, competency-based training in trades such as tailoring, hairdressing, carpentry and computer applications, assessed by UVTAB for a national certificate.",
  },
  {
    icon: FiBookOpen,
    title: "Her child is cared for",
    description:
      "Safe care and early learning at the Centre during training hours, so she can attend a full day of training.",
  },
  {
    icon: FiCreditCard,
    title: "She earns, saves and invests",
    description:
      "Business skills, savings and start-up support through CoSCA, our community savings and credit scheme, so her skill becomes an income that pays for her child's schooling.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-[#F4FAFE]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#318EC9]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            One family. Two pathways. Planned together.
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                {/* Step number */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#318EC9]/10 text-[#318EC9]">
                    <Icon size={28} />
                  </div>

                  <span className="text-4xl font-bold text-[#318EC9]/15">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link */}
        <div className="mt-10 text-center">
          <Link
            to="/model"
            className="inline-flex items-center font-semibold text-[#318EC9] transition hover:text-[#ED1C24]"
          >
            See the full two-generation model
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;