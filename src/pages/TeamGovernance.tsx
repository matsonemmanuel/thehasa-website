
import Modestar from "../assets/images/Modestar.jpg";
import Kemi from "../assets/images/Kemi.jpg";
import Josephine from "../assets/images/Josephine.jpg";
import prosper from "../assets/images/prosper.jpg";
import shukuru from "../assets/images/shukuru.jpg";
import hadija from "../assets/images/hadija.jpg";
import emma from "../assets/images/emma.jpg";
import mechanic from "../assets/images/mechanic.jpg";

function TeamGovernance() {
  const leadership = [
    {
      name: "Kabasinguzi Modestar",
      role: "Co-Founder and Managing Director",
      image: Modestar,
      bio: "Leads the Foundation and the THEHASA Vocational Skills Development Centre. Joined in 2024 as a Financial Clerk, was promoted to Managing Director and Registrar, and led the Foundation's registration and the Centre's DIT and UVTAB accreditation. Cohort 6 AL for Education Fellow, African Leadership Academy.",
    },
    {
      name: "Kemirembe Safinah",
      role: "Director of Finance and Administration and Treasurer",
      image: Kemi,
      bio: null,
    },
    {
      name: "Shulamite Angoa Basomboli",
      role: "Director of Programmes and Academic Registrar",
      image: null,
      bio: null,
    },
    {
      name: "Josephine Manishimwe",
      role: "Director of Operations and Services",
      image: Josephine,
      bio: null,
    },
  ];

  const supportStaff = [
    {
      title: "Protection & Casework",
      description:
        "Protection Officer and caseworkers supporting safe, appropriate protection and referral services.",
    },
    {
      title: "Monitoring & Evaluation",
      description:
        "Monitoring programme activities, documenting progress, and supporting learning and accountability.",
    },
    {
      title: "Media & Communications",
      description:
        "Sharing THEHASA's work, stories, activities, and community impact.",
    },
    {
      title: "Childcare & Community Support",
      description:
        "Caregivers and community volunteers supporting children and families during programme activities.",
    },
  ];

  
const trainerProfiles = [
  {
    id: "hairdressing",
    name: "Riziki Maritanse",
    role: "Hairdressing Trainer",
    image: shukuru,
    description:
      "Supporting learners to develop practical hairdressing skills and prepare for opportunities to earn a living.",
  },
  {
    id: "trainer-2",
    name: "Fred Nalija",
    role: "Vocational Trainer",
    image: mechanic,
    description:
      "Delivering practical training that helps young people build confidence and develop employable skills.",
  },
  {
    id: "trainer-3",
    name: "Hadijha Bukokeye",
    role: "Tailoring Trainer",
    image: hadija,
    description:
      "Helping learners develop practical tailoring skills and prepare for employment or self-employment.",
  },
  {
    id: "trainer-4",
    name: "Prosper Irakoze",
    role: "Computer Applications Trainer",
    image: prosper,
    description:
      "Helping learners build digital skills for education, work, and entrepreneurship.",
  },
  
  {
    id: "trainer-6",
    name: "Emmanuel Matson",
    role: "Digital Marketing Trainer",
    image: emma,
    description:
      "Helping learners strengthen their practical skills and prepare for work or self-employment.",
  },
];


  return (
    <main>
      {/* Page Hero */}
      <section className="bg-[#F4FAFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
            Our Team & Governance
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            A women-led team from the community it serves.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our team lives and works in and around Kyangwali. We understand
            the realities our learners face because many of them are our own.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
              Leadership
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The people leading the work
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              THEHASA&apos;s leadership brings together community knowledge,
              technical experience and a commitment to creating practical
              pathways for young people and young mothers.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <article
                key={`${person.name}-${person.role}`}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#F4FAFE]">
                  {person.image ? (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#318EC9]/10 text-2xl font-bold text-[#318EC9]">
                        {person.name
                          .replace("[Full name]", "FN")
                          .replace("[surname]", "S")
                          .split(" ")
                          .filter(Boolean)
                          .map((part) =>
                            part.replace(/[\[\]]/g, "")[0],
                          )
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>

                      <p className="mt-4 text-sm font-medium text-gray-500">
                        Portrait to be supplied
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold leading-6 text-[#318EC9]">
                    {person.role}
                  </p>

                  {person.bio ? (
                    <p className="mt-5 text-sm leading-7 text-gray-600">
                      {person.bio}
                    </p>
                  ) : (
                    <p className="mt-5 text-sm italic leading-7 text-gray-400">
                      Biography to be supplied.
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers and Staff */}
<section className="bg-[#F4FAFE] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
  <div className="mx-auto max-w-7xl">
    {/* Section Heading */}
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
        Trainers & Staff
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Practical experience in every class.
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600">
        Our trainers bring hands-on trade experience to every class.
        They work alongside our protection, monitoring and evaluation,
        communications, childcare, and community support teams to help
        learners build skills in a safe and supportive environment.
      </p>
    </div>

    
    {/* Trainer Profiles */}
    <div className="mt-12">
      <h3 className="mb-6 text-2xl font-bold text-gray-900">
        Meet Our Trainers
      </h3>

      <div className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {trainerProfiles.map((trainer) => (
          <article
            key={trainer.id}
            className="group flex h-full flex-col rounded-2xl border border-[#318EC9]/10 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
          >
            
        {/* Larger trainer photo with less empty space */}
        <div className="px-5 pt-5">
          <div className="h-72 overflow-hidden rounded-xl bg-[#F4FAFE] sm:h-80">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="h-full w-full rounded-xl object-cover object-[center_15%] transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>


            {/* Trainer details */}
            <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
              <span className="inline-flex w-fit rounded-full bg-[#318EC9]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#318EC9]">
                Training Team
              </span>

              <h4 className="mt-4 text-xl font-bold text-gray-900">
                {trainer.name}
              </h4>

              <p className="mt-1 font-medium text-[#318EC9]">
                {trainer.role}
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {trainer.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>


    {/* Other Staff and Support Teams */}
    <div className="mt-16">
      <h3 className="mb-6 text-2xl font-bold text-gray-900">
        Our Support Team
      </h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {supportStaff.map((staff) => (
          <article
            key={staff.title}
            className="rounded-2xl border border-[#318EC9]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#318EC9]/10 text-lg font-bold text-[#318EC9]">
              {staff.title.charAt(0)}
            </div>

            <h4 className="mt-5 text-lg font-bold text-gray-900">
              {staff.title}
            </h4>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {staff.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Board & Governance */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#318EC9]">
                Board & Governance
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Governed with clear roles and accountability.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                THEHASA Foundation is governed by a Board of Directors and a
                General Assembly, with clear roles separating governance from
                day-to-day management.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Every bank payment requires two authorised signatures.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F4FAFE] p-8 sm:p-10">
              <h3 className="text-xl font-bold text-gray-900">
                Our governance policies
              </h3>

              <ul className="mt-6 space-y-4">
                {[
                  "Safeguarding Policy",
                  "Protection from Sexual Exploitation and Abuse (PSEA) Policy",
                  "Anti-Fraud, Bribery and Whistleblowing Policy",
                  "Conflict of Interest Policy",
                  "Code of Conduct",
                  "Financial Policy",
                  "Procurement Policy",
                  "Human Resource Policy",
                ].map((policy) => (
                  <li
                    key={policy}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#318EC9]" />
                    <span>{policy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section className="bg-[#318EC9] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Accountability
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Raising a concern
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/90">
            If you have a safeguarding concern or want to report fraud or
            misconduct, contact us in confidence.
          </p>

          <p className="mt-6 text-sm font-semibold text-white/80">
            Dedicated safeguarding contact to be confirmed.
          </p>
        </div>
      </section>
    </main>
  );
}

export default TeamGovernance;
