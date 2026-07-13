export default function Progress() {
  const skills = [
    { name: "React.js", value: 85 },
    { name: "System Design", value: 72 },
    { name: "SQL", value: 68 },
    { name: "Java", value: 60 },
  ];

  const points = [
    { x: 20, y: 120 },
    { x: 90, y: 95 },
    { x: 160, y: 100 },
    { x: 230, y: 70 },
    { x: 300, y: 82 },
    { x: 370, y: 55 },
  ];

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <section className="mt-10 grid grid-cols-2 gap-6">

      {/* Weekly Progress */}

      <div className="rounded-[30px] border border-neutral-200 bg-white p-8">

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Weekly Progress
          </h2>

          <button className="text-sm text-neutral-500 hover:text-black">
            View Analytics →
          </button>
        </div>

        <svg
          viewBox="0 0 400 150"
          className="w-full"
        >
          {/* Grid */}

          {[30, 60, 90, 120].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="400"
              y2={y}
              stroke="#E5E5E5"
            />
          ))}

          {/* Line */}

          <path
            d={path}
            fill="none"
            stroke="black"
            strokeWidth="3"
          />

          {/* Points */}

          {points.map((p) => (
            <circle
              key={p.x}
              cx={p.x}
              cy={p.y}
              r="5"
              fill="black"
            />
          ))}
        </svg>

        <div className="mt-6 flex justify-between text-sm text-neutral-500">
          <span>May 6</span>
          <span>May 13</span>
          <span>May 20</span>
          <span>May 27</span>
          <span>Jun 3</span>
          <span>Jun 10</span>
        </div>

      </div>

      {/* Skill Progress */}

      <div className="rounded-[30px] border border-neutral-200 bg-white p-8">

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Skill Progress
          </h2>

          <button className="text-sm text-neutral-500 hover:text-black">
            View All →
          </button>
        </div>

        <div className="space-y-7">

          {skills.map((skill) => (
            <div key={skill.name}>

              <div className="mb-2 flex justify-between">

                <span className="font-medium">
                  {skill.name}
                </span>

                <span className="text-sm text-neutral-500">
                  {skill.value}%
                </span>

              </div>

              <div className="h-2 rounded-full bg-neutral-200">

                <div
                  className="h-2 rounded-full bg-black transition-all duration-500"
                  style={{
                    width: `${skill.value}%`,
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}