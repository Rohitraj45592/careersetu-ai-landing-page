type JobCardProps = {
  company: string;
  role: string;
  match: string;
  salary: string;
};

export default function JobCard({
  company,
  role,
  match,
  salary,
}: JobCardProps) {
  return (
    <div className="rounded-[24px] border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-lg font-bold">{company}</h3>

          <p className="text-sm text-neutral-500">
            {role}
          </p>
        </div>

        <div className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-semibold">
          {match}
        </div>

      </div>

      <div className="mt-6">

        <p className="text-sm text-neutral-500">
          Salary
        </p>

        <h4 className="mt-1 font-semibold">
          {salary}
        </h4>

      </div>

      <div className="mt-6 flex gap-3">

        <button className="flex-1 rounded-xl bg-black py-3 text-white">
          Apply
        </button>

        <button className="rounded-xl border border-neutral-300 px-5">
          Save
        </button>

      </div>

    </div>
  );
}