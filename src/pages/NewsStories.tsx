
import { useState } from "react";
import { Link } from "react-router-dom";

const BASE = import.meta.env.BASE_URL;

type IconProps = {
  size?: number;
  className?: string;
};

function ArrowRight({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Play({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function VideoIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}

function Users({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function GraduationCap({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m22 10-10-5L2 10l10 5 10-5Z" />
      <path d="M6 12v5c3.33 2.67 8.67 2.67 12 0v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function Heart({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
    </svg>
  );
}

function NewsStories() {
  const [videoError, setVideoError] = useState(false);

  const stories = [
    {
      number: "01",
      category: "Success Story",
      title: "A Journey of Transformation",
      description:
        "A story from the THEHASA community highlighting the journey from learning practical skills to building confidence and independence.",
      icon: GraduationCap,
    },
    {
      number: "02",
      category: "Learner Story",
      title: "Skills That Create Opportunity",
      description:
        "Discover how practical vocational training can help young people develop skills, pursue opportunities and shape a more independent future.",
      icon: Users,
    },
    {
      number: "03",
      category: "Community Story",
      title: "From Learning to Possibility",
      description:
        "A glimpse into the people, experiences and community journeys at the heart of THEHASA Foundation's work.",
      icon: Heart,
    },
  ];

  return (
    <section
      id="news-stories"
      className="overflow-hidden bg-[#F8FBFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#318EC9]/10 text-[#318EC9]">
            <VideoIcon size={28} />
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#318EC9]">
            News & Stories
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Real people. Real journeys.{" "}
            <span className="text-[#318EC9]">Real change.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Go beyond the numbers and hear directly from the people
            whose journeys are at the heart of THEHASA's work.
          </p>
        </div>

        {/* FEATURED VIDEO */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-900/5">

          {/* VIDEO INTRODUCTION */}
          <div className="flex flex-col gap-4 p-5 sm:p-8 lg:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#318EC9]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#318EC9]">
                <Play size={14} />
                Featured Story
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
                Stories from the THEHASA Community
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                Watch and listen to the experiences of people whose
                lives are connected to skills, opportunity and
                community transformation.
              </p>
            </div>
          </div>

          {/* PROFESSIONAL VIDEO PLAYER */}
          <div className="relative overflow-hidden bg-black">
            {!videoError ? (
              <video
                key={`${BASE}videos/success.mp4`}
                className="block aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                poster={`${BASE}images/thumbnails/thumb.png`}
                aria-label="THEHASA Foundation community success story"
                onError={() => setVideoError(true)}
              >
                <source
                  src={`${BASE}videos/success.mp4`}
                  type="video/mp4"
                />

                Your browser does not support HTML5 video.
              </video>
            ) : (
              <div className="flex aspect-video flex-col items-center justify-center bg-gray-950 px-6 text-center text-white">
                <VideoIcon size={48} className="text-[#318EC9]" />

                <h4 className="mt-5 text-xl font-bold">
                  Video temporarily unavailable
                </h4>

                <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
                  The video could not be loaded. Please check the
                  video file and try again.
                </p>
              </div>
            )}
          </div>

          {/* VIDEO FOOTER */}
          <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#318EC9]">
                Community Impact
              </p>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                Empowering youth. Protecting children.
                Transforming communities.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ED1C24] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 sm:w-auto"
            >
              Connect With Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* MORE STORIES */}
        <div className="mt-16">

          {/* STORIES HEADER */}
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#318EC9]">
                Explore
              </span>

              <h3 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                More stories from our community
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-600">
              Every journey tells a story of possibility,
              resilience and transformation.
            </p>
          </div>

          {/* STORY CARDS */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => {
              const Icon = story.icon;

              return (
                <article
                  key={story.number}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#318EC9]/30 hover:shadow-xl sm:p-8"
                >
                  {/* CARD ICON */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#318EC9]/10 text-[#318EC9] transition duration-300 group-hover:bg-[#318EC9] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <span className="text-sm font-extrabold text-gray-300">
                      {story.number}
                    </span>
                  </div>

                  {/* CATEGORY */}
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#318EC9]">
                    {story.category}
                  </p>

                  {/* TITLE */}
                  <h4 className="mt-3 text-xl font-bold leading-snug text-gray-900">
                    {story.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                    {story.description}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-7 border-t border-gray-100 pt-5">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#318EC9] transition hover:text-[#ED1C24]"
                    >
                      Learn More

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-[#318EC9]">
          <div className="relative px-6 py-12 text-center sm:px-12 sm:py-16">

            {/* DECORATIVE CIRCLES */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[30px] border-white/5" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full border-[30px] border-white/5" />

            <div className="relative mx-auto max-w-3xl">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Every story deserves an opportunity.
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/90">
                Help us create more opportunities for young people,
                young mothers and children through skills,
                protection, education and livelihoods.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/get-involved"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ED1C24] px-7 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-red-700"
                >
                  Get Involved
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-[#318EC9]"
                >
                  Contact THEHASA
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default NewsStories;
