import { Link } from "react-router-dom";

function ChildcarePriority() {
  return (
    <section className="bg-[#EAF6FC]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#318EC9]">
            Our Most Urgent Need
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Make childcare permanent for 60 children.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Today, childcare at the Centre runs as a short-term arrangement.
            That means a mother's place in class can depend on who is free to
            hold her baby that day. We are raising UGX 21,000,000 to turn it
            into a permanent Day Care and Early Childhood Development Centre
            for up to 60 children aged 0 to 5.
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#318EC9]/10">
            <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
              Funding target
            </p>

            <p className="mt-2 text-4xl font-bold text-[#318EC9] sm:text-5xl">
              UGX 21,000,000
            </p>
          </div>

          <Link
            to="/get-involved"
            className="mt-8 inline-flex items-center rounded-lg bg-[#ED1C24] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Help Make Childcare Permanent
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ChildcarePriority;