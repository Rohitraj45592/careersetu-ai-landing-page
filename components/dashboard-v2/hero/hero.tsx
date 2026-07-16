import HeroStats from "./hero-stats";
import ProfileOrbitAvatar from "./profile-orbit-avatar";

export default function Hero() {
  return (
    <section className="rounded-[32px] border border-neutral-200 bg-white p-8">
      <div className="grid grid-cols-[1.2fr_1fr] gap-10 items-stretch">
        {/* Left */}
        <div>
          <span className="text-sm font-medium text-neutral-500">
            Career Twin
          </span>

          <h1 className="mt-3 text-5xl font-bold leading-tight">
            Your AI Career Twin
            <br />
            is working
            <span className="text-neutral-400"> for you.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            CareerSetu AI analyzed your progress and found new
            opportunities based on your profile.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-2xl bg-black px-6 py-3 text-white">
              Continue Journey
            </button>

            <button className="rounded-2xl border border-neutral-300 px-6 py-3">
              View Roadmap
            </button>
          </div>
          <HeroStats />
        </div>
        <div
          className="relative flex h-full min-h-[460px] items-center justify-center overflow-hidden rounded-[24px] bg-neutral-50 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/dashboard/mountain-backdrop.png)" }}
        >
          <ProfileOrbitAvatar />
        </div>
      </div>
    </section>
  );
}