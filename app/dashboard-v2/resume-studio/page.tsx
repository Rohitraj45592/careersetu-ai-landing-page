import DashboardLayout from "@/components/dashboard-v2/layout/dashboard-layout";
import Header from "@/components/dashboard-v2/header/header";
import ResumeStudioHero from "@/components/dashboard-v2/resume-studio/hero";
import Snapshot from "@/components/dashboard-v2/resume-studio/snapshot";
import Upload from "@/components/dashboard-v2/resume-studio/upload";
import AiAnalysis from "@/components/dashboard-v2/resume-studio/ai-analysis";
import AtsBreakdown from "@/components/dashboard-v2/resume-studio/ats-breakdown";
import ResumePreview from "@/components/dashboard-v2/resume-studio/resume-preview";
import AiSuggestions from "@/components/dashboard-v2/resume-studio/ai-suggestions";
import KeywordOptimizer from "@/components/dashboard-v2/resume-studio/keyword-optimizer";
import MissingSkills from "@/components/dashboard-v2/resume-studio/missing-skills";
import AiRewrite from "@/components/dashboard-v2/resume-studio/ai-rewrite";
import VersionHistory from "@/components/dashboard-v2/resume-studio/version-history";
import RecentActivity from "@/components/dashboard-v2/resume-studio/recent-activity";
import RecruiterTips from "@/components/dashboard-v2/resume-studio/recruiter-tips";
import ExportActions from "@/components/dashboard-v2/resume-studio/export-actions";

export default function ResumeStudioPage() {
  return (
    <DashboardLayout>
      <Header />

      <div className="p-4 sm:p-6 lg:p-8">
        <ResumeStudioHero />
        <Snapshot />
        <Upload />
        <AiAnalysis />

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AtsBreakdown />
          <KeywordOptimizer />
        </div>

        <ResumePreview />
        <AiSuggestions />
        <MissingSkills />
        <AiRewrite />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <VersionHistory />
          <RecentActivity />
        </div>

        <RecruiterTips />
        <ExportActions />
      </div>
    </DashboardLayout>
  );
}
