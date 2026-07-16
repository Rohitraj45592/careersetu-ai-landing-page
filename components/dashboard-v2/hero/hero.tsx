import HeroStats from "./hero-stats";
import ProfileOrbitAvatar from "./profile-orbit-avatar";

export default function Hero() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[32px] lg:p-8">
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
        {/* Left */}
        <div>
          <span className="text-sm font-medium text-neutral-500">
            Career Twin
          </span>

          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Your AI Career Twin
            <br className="hidden sm:block" />
            {" "}is working
            <span className="text-neutral-400"> for you.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-neutral-600 sm:text-lg">
            CareerSetu AI analyzed your progress and found new
            opportunities based on your profile.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <button className="rounded-2xl bg-black px-5 py-3 text-white sm:px-6">
              Continue Journey
            </button>

            <button className="rounded-2xl border border-neutral-300 px-5 py-3 sm:px-6">
              View Roadmap
            </button>
          </div>
          <HeroStats />
        </div>
        <div
          className="relative flex h-full min-h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-neutral-50 bg-cover bg-center sm:min-h-[380px] lg:min-h-[460px] lg:rounded-[24px]"
          style={{ backgroundImage: "url(/images/dashboard/mountain-backdrop.png)" }}
        >
          <ProfileOrbitAvatar />
        </div>
      </div>
    </section>
  );
}
