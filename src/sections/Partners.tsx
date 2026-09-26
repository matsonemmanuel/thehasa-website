const partners = [
  "Bishop Stuart University",
  "Alight",
  "ELECU",
];

function Partners() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#318EC9]">
            Trusted by Partners
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Working with partners to create pathways forward.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            We have delivered vocational training for Bishop Stuart University
            (Mastercard Foundation RETI Project), Alight, and ELECU (Mastercard
            Foundation programming).
          </p>
        </div>

        {/* Sliding partners */}
        <div className="relative mt-12 overflow-hidden">
          <div className="partners-track flex w-max">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="mx-3 flex h-28 w-[280px] shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-[#F4FAFE] px-6 text-center sm:w-[360px] lg:w-[400px]"
              >
                <p className="text-lg font-semibold text-gray-800">
                  {partner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;