function CoFounder() {
  return (
    <section className="bg-[#F4FAFE]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photo placeholder */}
          <div className="flex min-h-[360px] items-center justify-center rounded-2xl bg-[#318EC9]/10 p-8 sm:min-h-[450px]">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#318EC9]/15 text-[#318EC9]">
                <span className="text-2xl font-bold">KM</span>
              </div>

              <p className="mt-4 text-sm font-medium text-gray-500">
                Co-founder portrait
              </p>
            </div>
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

            <a
              href="/about"
              className="mt-8 inline-flex items-center font-semibold text-[#318EC9] transition hover:text-[#ED1C24]"
            >
              Read our story
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoFounder;