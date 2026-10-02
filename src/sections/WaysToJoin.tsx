import { FiHeart, FiUsers, FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const ways = [
  {
    icon: FiHeart,
    title: "Fund",
    description:
      "Invest in permanent childcare or start-up capital for graduates.",
  },
  {
    icon: FiUsers,
    title: "Partner",
    description:
      "Share expertise, hire our graduates, or buy their products and services.",
  },
  {
    icon: FiShare2,
    title: "Stay connected",
    description:
      "Visit the Centre, share our story, and introduce us to one person who should know about this work.",
  },
];

function WaysToJoin() {
  return (
    <section className="bg-[#F4FAFE]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#318EC9]">
            Get Involved
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            There is a place for you in this story.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Whether you can fund, share your expertise, give work to a
            graduate, or simply tell someone about us, you can help a mother
            and her child move forward together.
          </p>
        </div>

        {/* Ways to join */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ways.map((way) => {
            const Icon = way.icon;

            return (
              <div
                key={way.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#318EC9]/10 text-[#318EC9]">
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {way.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-gray-600">
                  {way.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/get-involved"
            
            className="inline-flex items-center rounded-lg bg-[#ED1C24] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Find Your Way In
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WaysToJoin;