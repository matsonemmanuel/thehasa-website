
import SumiHamid from "../assets/images/founders/sumi.jpg";
import TheophileNgomba from "../assets/images/founders/theo.jpg";
import KabasinguziModestar from "../assets/images/founders/mode.jpg";

function Founders() {
  const founders = [
    {
      name: "Sumi Hamid",
      role: "Founder and Chief Executive Officer, THEHASA Holdings",
      image: SumiHamid,
      imagePosition: "center top",
      saying: "Living in the moment, investing in tomorrow.",
      meaning:
        "He believed it is best to live in the moment while investing in the future.",
    },
    {
      name: "Theophile Ngomba",
      role: "Co-Founder and Hairdressing Technical Lead",
      image: TheophileNgomba,
      imagePosition: "center top",
      saying: "Maisha ni kupima pima",
      meaning:
        "Life is about weighing things carefully, step by step.",
    },
    {
      name: "Kabasinguzi Modestar",
      role: "Co-Founder and Managing Director",
      image: KabasinguziModestar,
      imagePosition: "center top",
      saying: "Kazi yangu inanipa raha",
      meaning: "My work gives me joy.",
    },
  ];

  return (
    <section
      id="founders"
      className="bg-[#F8FBFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#318EC9]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#318EC9]">
            Our Leadership Story
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            The People Behind{" "}
            <span className="text-[#318EC9]">THEHASA.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            The name THEHASA comes from one belief the founders of
            THEHASA Holdings share: the happy and satisfied are those
            who depend on their skills. Each of them carried that
            belief in a saying of their own.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {founders.map((founder) => (
            <article
              key={founder.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Founder Photograph */}
              <div className="bg-[#EAF5FC] p-3 sm:p-4">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-sm">
                  <img
                    src={founder.image}
                    alt={`Portrait of ${founder.name}`}
                    style={{
                      objectPosition: founder.imagePosition,
                    }}
                    className="h-full w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Founder Information */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">

                <span className="mb-4 w-fit rounded-full bg-[#318EC9]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#318EC9]">
                </span>

                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {founder.name}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm font-semibold leading-6 text-[#318EC9]">
                  {founder.role}
                </p>

                {/* Decorative Divider */}
                <div className="mt-5 h-1 w-12 rounded-full bg-[#ED1C24]" />

                {/* Founder Saying */}
                <blockquote className="mt-6 flex-1">
                  <p className="text-lg font-bold leading-8 text-gray-900">
                    “{founder.saying}”
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {founder.meaning}
                  </p>
                </blockquote>

                {/* Card Footer */}
                <div className="mt-7 border-t border-gray-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    A Founding Philosophy
                  </p>
                </div>

              </div>
            </article>
          ))}

        </div>
      </div>

      {/* Founders' Philosophy Band */}
      <div className="mx-auto mt-24 max-w-7xl overflow-hidden rounded-3xl bg-[#318EC9]">
        <div className="relative px-6 py-14 text-center sm:px-12 lg:py-20">

          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[30px] border-white/5" />

          <div className="pointer-events-none absolute -bottom-32 -left-16 h-64 w-64 rounded-full border-[30px] border-white/5" />

          <div className="relative mx-auto max-w-4xl">

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/75">
              The Philosophy That Guides Us
            </p>

            <h3 className="mt-6 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
              Depend on your skills.
              <br className="hidden sm:block" />
              Survive today. Invest in tomorrow.
            </h3>

            <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#ED1C24]" />

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
              Together, the three sayings became one philosophy.
              A person who depends on their skills can meet today's
              needs without waiting on others. What they earn beyond
              today's needs, they put to work for the future.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Founders;
