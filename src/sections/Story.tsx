import communityImage from "../assets/images/community.jpg";

function Story() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#318EC9]">
              A Story
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Seven graduates.
              <br />
              Seven registered businesses.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              After training, the Foundation employed seven graduates and
              bought their start-up materials. They repaid the cost bit by bit
              from their earnings while they worked. Then they took over the
              businesses as their own.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              All seven have since registered their businesses with the Uganda
              Registration Services Bureau.
            </p>

            <div className="mt-6 border-l-4 border-[#318EC9] pl-5">
              <p className="text-lg font-semibold leading-8 text-gray-900">
                Skills, capital and time, together, turned trainees into
                owners.
              </p>
            </div>

            <a
              href="/impact"
              className="mt-8 inline-flex items-center font-semibold text-[#318EC9] transition hover:text-[#ED1C24]"
            >
              Read more results and stories
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={communityImage}
              alt="THEHASA community activities"
              className="h-full min-h-[350px] w-full object-cover sm:min-h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;