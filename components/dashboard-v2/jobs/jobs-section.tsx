import JobCard from "./job-card";

export default function JobsSection() {
  return (
    <section className="mt-8">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold sm:text-2xl">
          Top Job Matches
        </h2>

        <button className="text-sm font-medium">
          View All →
        </button>

      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <JobCard
          company="Google"
          role="Software Engineer"
          match="96%"
          salary="₹28-40 LPA"
        />

        <JobCard
          company="Microsoft"
          role="Backend Engineer"
          match="94%"
          salary="₹24-36 LPA"
        />

        <JobCard
          company="Razorpay"
          role="SDE-1"
          match="91%"
          salary="₹18-28 LPA"
        />

        <JobCard
          company="Atlassian"
          role="Frontend Engineer"
          match="90%"
          salary="₹22-35 LPA"
        />

      </div>

    </section>
  );
}