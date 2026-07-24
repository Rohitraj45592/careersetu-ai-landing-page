import { GraduationCap } from "lucide-react";

const tips = [
  "Tailor your resume keywords to each job description.",
  "Apply within the first 24 hours of a posting.",
  "Quantify impact in every bullet point.",
  "Keep your LinkedIn headline specific, not generic.",
  "Follow up politely one week after applying.",
  "Prioritize referrals over cold applications.",
  "Practice explaining projects in under two minutes.",
  "Research the company's recent product launches.",
];

export default function RecruiterTips() {
  return (
    <section className="rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100">
          <GraduationCap size={18} />
        </div>
        <h2 className="text-xl font-bold sm:text-2xl">Recruiter Tips</h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {tips.map((tip, index) => (
          <div key={tip} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-semibold">
              {index + 1}
            </span>
            <span className="text-sm leading-relaxed text-neutral-700">{tip}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
