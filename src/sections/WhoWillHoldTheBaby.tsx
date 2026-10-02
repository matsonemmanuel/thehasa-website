import { Link } from "react-router-dom";
import childCareImage from "../assets/images/childcare.jpg";

function WhoWillHoldTheBaby() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={childCareImage}
              alt="Young mother and child at THEHASA Foundation"
              className="h-full min-h-[320px] w-full object-cover sm:min-h-[400px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#318EC9]">
              The Choice
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Who will hold the baby?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              For many young mothers in Kyangwali, that is the first question,
              long before "What will I learn?" Without an answer, she stays at
              home. Her skills wait. Her income waits. And her child's chance
              at school waits with her.
            </p>

            <p className="mt-5 text-lg font-semibold leading-8 text-gray-900">
              We built THEHASA around that question.
            </p>

            <Link
              to="/who-we-serve"
              className="mt-8 inline-flex items-center font-semibold text-[#318EC9] transition hover:text-[#ED1C24]"
            >
              Why young people are left behind, and how we respond
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

export default WhoWillHoldTheBaby;