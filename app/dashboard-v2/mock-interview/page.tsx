import DashboardLayout from "@/components/dashboard-v2/layout/dashboard-layout";
import Header from "@/components/dashboard-v2/header/header";
import MockInterviewHero from "@/components/dashboard-v2/mock-interview/hero";
import Snapshot from "@/components/dashboard-v2/mock-interview/snapshot";
import Categories from "@/components/dashboard-v2/mock-interview/categories";
import AiSession from "@/components/dashboard-v2/mock-interview/ai-session";
import QuestionPanel from "@/components/dashboard-v2/mock-interview/question-panel";
import AiFeedback from "@/components/dashboard-v2/mock-interview/ai-feedback";
import PerformanceBreakdown from "@/components/dashboard-v2/mock-interview/performance-breakdown";
import AiSuggestions from "@/components/dashboard-v2/mock-interview/ai-suggestions";
import InterviewHistory from "@/components/dashboard-v2/mock-interview/interview-history";
import RecentActivity from "@/components/dashboard-v2/mock-interview/recent-activity";
import Faq from "@/components/dashboard-v2/mock-interview/faq";
import CodingPractice from "@/components/dashboard-v2/mock-interview/coding-practice";
import CommunicationTips from "@/components/dashboard-v2/mock-interview/communication-tips";
import PlacementReadiness from "@/components/dashboard-v2/mock-interview/placement-readiness";
import AchievementBadges from "@/components/dashboard-v2/mock-interview/achievement-badges";
import ExportActions from "@/components/dashboard-v2/mock-interview/export-actions";

export default function MockInterviewPage() {
  return (
    <DashboardLayout>
      <Header />

      <div className="p-4 sm:p-6 lg:p-8">
        <MockInterviewHero />
        <Snapshot />
        <Categories />
        <AiSession />
        <QuestionPanel />
        <AiFeedback />
        <PerformanceBreakdown />
        <AiSuggestions />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <InterviewHistory />
          <RecentActivity />
        </div>

        <Faq />
        <CodingPractice />
        <CommunicationTips />
        <PlacementReadiness />
        <AchievementBadges />
        <ExportActions />
      </div>
    </DashboardLayout>
  );
}
