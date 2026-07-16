import DashboardLayout from "@/components/dashboard-v2/layout/dashboard-layout";
import Header from "@/components/dashboard-v2/header/header";
import CareerTwinHero from "@/components/dashboard-v2/career-twin/hero";
import ChatCard from "@/components/dashboard-v2/career-twin/chat-card";
import Snapshot from "@/components/dashboard-v2/career-twin/snapshot";
import TodayFocus from "@/components/dashboard-v2/career-twin/today-focus";
import AiSuggestions from "@/components/dashboard-v2/career-twin/ai-suggestions";
import QuickActions from "@/components/dashboard-v2/career-twin/quick-actions";
import LearningProgress from "@/components/dashboard-v2/career-twin/learning-progress";
import AiInsights from "@/components/dashboard-v2/career-twin/ai-insights";
import ActivityTimeline from "@/components/dashboard-v2/career-twin/activity-timeline";
import RecentConversations from "@/components/dashboard-v2/career-twin/recent-conversations";

export default function CareerTwinPage() {
  return (
    <DashboardLayout>
      <Header />

      <div className="p-4 sm:p-6 lg:p-8">
        <CareerTwinHero />
        <ChatCard />
        <Snapshot />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <TodayFocus />
          <QuickActions />
        </div>

        <AiSuggestions />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <LearningProgress />
          <AiInsights />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ActivityTimeline />
          <RecentConversations />
        </div>
      </div>
    </DashboardLayout>
  );
}
