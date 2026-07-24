import DashboardLayout from "@/components/dashboard-v2/layout/dashboard-layout";
import Header from "@/components/dashboard-v2/header/header";
import SettingsHero from "@/components/dashboard-v2/settings/hero";
import AccountSettings from "@/components/dashboard-v2/settings/account-settings";
import Preferences from "@/components/dashboard-v2/settings/preferences";
import NotificationSettings from "@/components/dashboard-v2/settings/notifications";
import PrivacySettings from "@/components/dashboard-v2/settings/privacy";
import Security from "@/components/dashboard-v2/settings/security";
import ConnectedAccounts from "@/components/dashboard-v2/settings/connected-accounts";
import AiPreferences from "@/components/dashboard-v2/settings/ai-preferences";
import DashboardPreferences from "@/components/dashboard-v2/settings/dashboard-preferences";
import DataStorage from "@/components/dashboard-v2/settings/data-storage";
import ActivityLog from "@/components/dashboard-v2/settings/activity-log";
import Appearance from "@/components/dashboard-v2/settings/appearance";
import HelpSupport from "@/components/dashboard-v2/settings/help-support";
import About from "@/components/dashboard-v2/settings/about";
import DangerZone from "@/components/dashboard-v2/settings/danger-zone";
import QuickNavigation from "@/components/dashboard-v2/settings/quick-navigation";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <Header />

      <div className="p-4 sm:p-6 lg:p-8">
        <SettingsHero />
        <AccountSettings />
        <Preferences />
        <NotificationSettings />
        <PrivacySettings />
        <Security />
        <ConnectedAccounts />
        <AiPreferences />
        <DashboardPreferences />
        <DataStorage />
        <ActivityLog />
        <Appearance />
        <HelpSupport />
        <About />
        <DangerZone />
        <QuickNavigation />
      </div>
    </DashboardLayout>
  );
}
