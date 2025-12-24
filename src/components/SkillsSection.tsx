// const skills = [
//   { name: "JavaScript", level: 90, color: "from-yellow-500 to-yellow-400" },
//   { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-400" },
//   { name: "React", level: 90, color: "from-cyan-500 to-cyan-400" },
//   { name: "Next.js", level: 75, color: "from-neutral-600 to-neutral-400" },
//   { name: "Node.js", level: 85, color: "from-green-600 to-green-400" },
//   { name: "NestJS", level: 70, color: "from-red-600 to-red-400" },
//   { name: "MySQL", level: 80, color: "from-blue-600 to-blue-500" },
//   { name: "MongoDB", level: 75, color: "from-green-700 to-green-500" },
//   { name: "AWS", level: 50, color: "from-orange-500 to-orange-400" },
//   { name: "Git", level: 85, color: "from-orange-600 to-red-500" },
//   { name: "Tailwind CSS", level: 90, color: "from-teal-500 to-cyan-400" },
//   { name: "Docker", level: 60, color: "from-blue-500 to-sky-400" },
// ];

const skills = [
  { name: "JavaScript", image: "/javascript.png" },
  { name: "TypeScript", image: "/typescript.png" },
  { name: "React", image: "/react.png" },
  { name: "Next.js", image: "/next.jpg" },
  { name: "Node.js", image: "/nodejs.svg" },
  { name: "NestJS", image: "/nest.svg" },
  { name: "MySQL", image: "/mysql.png" },
  { name: "MongoDB", image: "/mongo.png" },
  { name: "AWS", image: "/aws.jpg" },
  { name: "Git", image: "/git.png" },
  { name: "Tailwind CSS", image: "/tailwind.png" },
  { name: "Docker", image: "/docker.png" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Minhas competências
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            Skills & <span className="text-gradient">Tecnologias</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-subtle group opacity-0 animate-slide-up flex flex-col items-center gap-4`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-display font-semibold">{skill.name}</h3>
              </div>
              <div className="h-fit ">
                <img src={skill.image} width={50} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
