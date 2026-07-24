import DashboardLayout from "@/components/dashboard-v2/layout/dashboard-layout";
import Header from "@/components/dashboard-v2/header/header";
import RoadmapHero from "@/components/dashboard-v2/roadmap/hero";
import Snapshot from "@/components/dashboard-v2/roadmap/snapshot";
import CareerGoal from "@/components/dashboard-v2/roadmap/career-goal";
import RoadmapTimeline from "@/components/dashboard-v2/roadmap/roadmap-timeline";
import WeeklyPlan from "@/components/dashboard-v2/roadmap/weekly-plan";
import SkillProgress from "@/components/dashboard-v2/roadmap/skill-progress";
import RecommendedProjects from "@/components/dashboard-v2/roadmap/recommended-projects";
import Certifications from "@/components/dashboard-v2/roadmap/certifications";
import AiRecommendations from "@/components/dashboard-v2/roadmap/ai-recommendations";
import UpcomingMilestones from "@/components/dashboard-v2/roadmap/upcoming-milestones";
import DailyTasks from "@/components/dashboard-v2/roadmap/daily-tasks";
import LearningAnalytics from "@/components/dashboard-v2/roadmap/learning-analytics";
import CareerInsights from "@/components/dashboard-v2/roadmap/career-insights";
import RecentActivity from "@/components/dashboard-v2/roadmap/recent-activity";
import MotivationCard from "@/components/dashboard-v2/roadmap/motivation-card";
import ExportActions from "@/components/dashboard-v2/roadmap/export-actions";

export default function RoadmapPage() {
  return (
    <DashboardLayout>
      <Header />

      <div className="p-4 sm:p-6 lg:p-8">
        <RoadmapHero />
        <Snapshot />
        <CareerGoal />
        <RoadmapTimeline />
        <WeeklyPlan />
        <SkillProgress />
        <RecommendedProjects />
        <Certifications />
        <AiRecommendations />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <UpcomingMilestones />
          <DailyTasks />
        </div>

        <LearningAnalytics />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <CareerInsights />
          <RecentActivity />
        </div>

        <MotivationCard />
        <ExportActions />
      </div>
    </DashboardLayout>
  );
}
