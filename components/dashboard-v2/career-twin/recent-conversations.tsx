import { MessageSquare, ChevronRight } from "lucide-react";

const conversations = [
  {
    title: "Resume review for AI internships",
    preview: "Your resume is strong on projects, tighten the summary...",
    time: "2 hours ago",
  },
  {
    title: "30-day placement roadmap",
    preview: "Here's a roadmap covering DSA, projects and mock interviews...",
    time: "1 day ago",
  },
  {
    title: "LinkedIn headline suggestions",
    preview: "Try leading with your specialization instead of your title...",
    time: "3 days ago",
  },
];

export default function RecentConversations() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold sm:text-2xl">Recent Conversations</h2>
        <button className="text-sm font-medium text-neutral-500 hover:text-black">
          View All →
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {conversations.map((conversation) => (
          <button
            key={conversation.title}
            className="flex w-full items-center gap-4 rounded-2xl border border-neutral-200 p-4 text-left transition hover:bg-neutral-50"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100">
              <MessageSquare size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">{conversation.title}</p>
              <p className="truncate text-sm text-neutral-500">
                {conversation.preview}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm text-neutral-400">
              {conversation.time}
              <ChevronRight size={16} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
