function Founders() {
  const founders = [
    {
      name: "Sumi Hamid",
      role: "Founder and Chief Executive Officer, THEHASA Holdings",
      saying: "Living in the moment, investing in tomorrow.",
      meaning:
        "He believed it is best to live in the moment while investing in the future.",
    },
    {
      name: "Theophile Ngomba",
      role: "Co-Founder and Hairdressing Technical Lead",
      saying: "Maisha ni kupima pima",
      meaning:
        "Life is about weighing things carefully, step by step.",
    },
    {
      name: "Nkedi Maweti",
      role: "Co-Founder and Tailoring Technical Lead",
      saying: "Kazi yangu inanipa raha",
      meaning: "My work gives me joy.",
    },
  ];

  return (
    <section
      id="founders"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
            The Founders
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Three founders, three sayings.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The name THEHASA comes from one belief the founders of THEHASA
            Holdings share: the happy and satisfied are those who depend on
            their skills. Each of them carried that belief in a saying of
            their own.
          </p>
        </div>

        {/* Founders cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-[#F4FAFE]">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#318EC9]/10 text-2xl font-bold text-[#318EC9]">
                    {founder.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>

                  <p className="mt-4 text-sm font-medium text-gray-500">
                    Portrait to be supplied
                  </p>
                </div>
              </div>

              {/* Founder information */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-900">
                  {founder.name}
                </h3>

                <p className="mt-2 text-sm font-semibold leading-6 text-[#318EC9]">
                  {founder.role}
                </p>

                {/* Saying */}
                <div className="mt-7 border-l-4 border-[#ED1C24] pl-5">
                  <p className="text-xl font-semibold leading-8 text-gray-900">
                    “{founder.saying}”
                  </p>
                </div>

                {/* Meaning */}
                <p className="mt-5 text-base leading-7 text-gray-600">
                  {founder.meaning}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Philosophy band */}
      <div className="mt-20 bg-[#318EC9]">
        <div className="mx-auto max-w-5xl px-6 py-12 text-center sm:px-8 lg:py-16">
          <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Depend on your skills. Survive today. Invest in tomorrow.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
            Together, the three sayings became one philosophy. A person who
            depends on their skills can meet today&apos;s needs without waiting
            on others. What they earn beyond today&apos;s needs, they put to
            work for the future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Founders;