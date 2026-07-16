import DashboardLayout from "@/components/dashboard-v2/layout/dashboard-layout";
import Header from "@/components/dashboard-v2/header/header";
import JobHubHero from "@/components/dashboard-v2/job-hub/hero";
import Snapshot from "@/components/dashboard-v2/job-hub/snapshot";
import RecommendedJobs from "@/components/dashboard-v2/job-hub/recommended-jobs";
import Filters from "@/components/dashboard-v2/job-hub/filters";
import TrendingCompanies from "@/components/dashboard-v2/job-hub/trending-companies";
import JobMatch from "@/components/dashboard-v2/job-hub/job-match";
import ApplicationTracker from "@/components/dashboard-v2/job-hub/application-tracker";
import MissingSkills from "@/components/dashboard-v2/job-hub/missing-skills";
import PlacementAnalytics from "@/components/dashboard-v2/job-hub/placement-analytics";
import SavedJobs from "@/components/dashboard-v2/job-hub/saved-jobs";
import UpcomingDeadlines from "@/components/dashboard-v2/job-hub/upcoming-deadlines";
import AiSuggestions from "@/components/dashboard-v2/job-hub/ai-suggestions";
import PlacementInsights from "@/components/dashboard-v2/job-hub/placement-insights";
import RecentActivity from "@/components/dashboard-v2/job-hub/recent-activity";
import RecruiterTips from "@/components/dashboard-v2/job-hub/recruiter-tips";
import ExportActions from "@/components/dashboard-v2/job-hub/export-actions";

export default function JobHubPage() {
  return (
    <DashboardLayout>
      <Header />

      <div className="p-4 sm:p-6 lg:p-8">
        <JobHubHero />
        <Snapshot />
        <RecommendedJobs />
        <Filters />
        <TrendingCompanies />
        <JobMatch />
        <ApplicationTracker />
        <MissingSkills />
        <PlacementAnalytics />
        <SavedJobs />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <UpcomingDeadlines />
          <PlacementInsights />
        </div>

        <AiSuggestions />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RecentActivity />
          <RecruiterTips />
        </div>

        <ExportActions />
      </div>
    </DashboardLayout>
  );
}
