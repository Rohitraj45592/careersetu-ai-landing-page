import {
  UploadCloud,
  ScanSearch,
  Route,
  Send,
  Mic,
} from "lucide-react";

const events = [
  { icon: UploadCloud, title: "Resume Uploaded", time: "2 hours ago" },
  { icon: ScanSearch, title: "Resume Analyzed", time: "2 hours ago" },
  { icon: Route, title: "Roadmap Generated", time: "5 hours ago" },
  { icon: Send, title: "Jobs Applied", time: "1 day ago" },
  { icon: Mic, title: "Mock Interview Completed", time: "2 days ago" },
];

export default function ActivityTimeline() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Recent Activity</h2>

      <div className="relative mt-6">
        <div className="absolute left-5 top-1 bottom-1 w-px bg-neutral-200" />

        <div className="space-y-6">
          {events.map((event, index) => {
            const Icon = event.icon;

            return (
              <div key={index} className="relative flex items-center gap-4 pl-0">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white">
                  <Icon size={16} />
                </div>

                <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                  <span className="truncate font-medium">{event.title}</span>
                  <span className="shrink-0 text-sm text-neutral-500">
                    {event.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
