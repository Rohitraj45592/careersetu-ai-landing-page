const skills = [
  { name: "Python", value: 88 },
  { name: "SQL", value: 68 },
  { name: "React", value: 80 },
  { name: "FastAPI", value: 45 },
  { name: "GenAI", value: 55 },
];

export default function LearningProgress() {
  return (
    <section className="mt-8 rounded-[24px] border border-neutral-200 bg-white p-5 sm:p-6 lg:rounded-[30px]">
      <h2 className="text-xl font-bold sm:text-2xl">Learning Progress</h2>

      <div className="mt-6 space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-neutral-500">{skill.value}%</span>
            </div>

            <div className="h-2 rounded-full bg-neutral-200">
              <div
                className="h-2 rounded-full bg-black transition-all duration-500"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
