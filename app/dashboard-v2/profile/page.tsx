import DashboardLayout from "@/components/dashboard-v2/layout/dashboard-layout";
import Header from "@/components/dashboard-v2/header/header";
import ProfileHero from "@/components/dashboard-v2/profile/hero";
import ProfileOverview from "@/components/dashboard-v2/profile/profile-overview";
import CareerSnapshot from "@/components/dashboard-v2/profile/snapshot";
import AboutMe from "@/components/dashboard-v2/profile/about";
import Education from "@/components/dashboard-v2/profile/education";
import Skills from "@/components/dashboard-v2/profile/skills";
import Projects from "@/components/dashboard-v2/profile/projects";
import Experience from "@/components/dashboard-v2/profile/experience";
import Certifications from "@/components/dashboard-v2/profile/certifications";
import Achievements from "@/components/dashboard-v2/profile/achievements";
import SocialProfiles from "@/components/dashboard-v2/profile/social-profiles";
import CareerGoals from "@/components/dashboard-v2/profile/career-goals";
import AiInsights from "@/components/dashboard-v2/profile/ai-insights";
import RecentActivity from "@/components/dashboard-v2/profile/recent-activity";
import AccountStatistics from "@/components/dashboard-v2/profile/account-statistics";
import QuickActions from "@/components/dashboard-v2/profile/quick-actions";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <Header />

      <div className="p-4 sm:p-6 lg:p-8">
        <ProfileHero />
        <ProfileOverview />
        <CareerSnapshot />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <SocialProfiles />
        <CareerGoals />
        <AiInsights />
        <RecentActivity />
        <AccountStatistics />
        <QuickActions />
      </div>
    </DashboardLayout>
  );
}
