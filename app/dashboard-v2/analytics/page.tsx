import DashboardLayout from "@/components/dashboard-v2/layout/dashboard-layout";
import Header from "@/components/dashboard-v2/header/header";
import AnalyticsHero from "@/components/dashboard-v2/analytics/hero";
import Snapshot from "@/components/dashboard-v2/analytics/snapshot";
import WeeklyProgress from "@/components/dashboard-v2/analytics/weekly-progress";
import ResumeAnalytics from "@/components/dashboard-v2/analytics/resume-analytics";
import InterviewAnalytics from "@/components/dashboard-v2/analytics/interview-analytics";
import JobAnalytics from "@/components/dashboard-v2/analytics/job-analytics";
import LearningAnalytics from "@/components/dashboard-v2/analytics/learning-analytics";
import CareerInsights from "@/components/dashboard-v2/analytics/career-insights";
import SkillDistribution from "@/components/dashboard-v2/analytics/skill-distribution";
import MonthlyTimeline from "@/components/dashboard-v2/analytics/monthly-timeline";
import ProductivityOverview from "@/components/dashboard-v2/analytics/productivity-overview";
import AiRecommendations from "@/components/dashboard-v2/analytics/ai-recommendations";
import PlacementPrediction from "@/components/dashboard-v2/analytics/placement-prediction";
import ExportReports from "@/components/dashboard-v2/analytics/export-reports";
import RecentActivity from "@/components/dashboard-v2/analytics/recent-activity";
import Achievements from "@/components/dashboard-v2/analytics/achievements";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <Header />

      <div className="p-4 sm:p-6 lg:p-8">
        <AnalyticsHero />
        <Snapshot />
        <WeeklyProgress />
        <ResumeAnalytics />
        <InterviewAnalytics />
        <JobAnalytics />
        <LearningAnalytics />
        <CareerInsights />
        <SkillDistribution />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <MonthlyTimeline />
          <RecentActivity />
        </div>

        <ProductivityOverview />
        <AiRecommendations />
        <PlacementPrediction />
        <ExportReports />
        <Achievements />
      </div>
    </DashboardLayout>
  );
}
