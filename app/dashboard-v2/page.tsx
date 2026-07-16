import DashboardLayout from "@/components/dashboard-v2/layout/dashboard-layout";
import Header from "@/components/dashboard-v2/header/header";
import Hero from "@/components/dashboard-v2/hero/hero";
import CommandBar from "@/components/dashboard-v2/command-bar/command-bar";
import StatusStrip from "@/components/dashboard-v2/status/status-strip";
import CareerHealth from "@/components/dashboard-v2/career-health/career-health";
import JobsSection from "@/components/dashboard-v2/jobs/jobs-section";
import Roadmap from "@/components/dashboard-v2/roadmap/roadmap";
import Activity from "@/components/dashboard-v2/activity/activity";
import Progress from "@/components/dashboard-v2/progress/progress";




export default function DashboardV2Page() {
  return (
    <DashboardLayout>
      <Header />

      <div className="p-4 sm:p-6 lg:p-8">
        <Hero />
        <StatusStrip />
        <CommandBar />
        <CareerHealth />
        <JobsSection />
        <Roadmap />
        <Activity />
        <Progress />
      </div>
    </DashboardLayout>
  );
}