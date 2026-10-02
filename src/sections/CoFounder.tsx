import { Link } from "react-router-dom";
import modestarImage from "../assets/images/Modestar.jpg";

function CoFounder() {
  return (
    <section className="bg-[#F4FAFE]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photo placeholder */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={modestarImage}
              alt="Kabasinguzi Modestar, Co-Founder and Managing Director of THEHASA Foundation"
              className="h-full min-h-[360px] w-full object-cover sm:min-h-[450px]"
            />
          </div>

          {/* Quote */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#318EC9]">
              Our Co-Founder
            </p>

            <blockquote className="mt-5">
              <p className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                “I was an orphan at seven, and I could not finish university.
                Neither took away what I could learn or build.”
              </p>
            </blockquote>

            <div className="mt-8">
              <p className="text-lg font-bold text-gray-900">
                Kabasinguzi Modestar
              </p>

              <p className="mt-1 text-base text-gray-600">
                Co-Founder and Managing Director
              </p>
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center font-semibold text-[#318EC9] transition hover:text-[#ED1C24]"
            >
              Read our story
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoFounder;