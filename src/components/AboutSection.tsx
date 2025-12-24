import { Code2, GraduationCap, Briefcase, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "Desenvolvimento completo de aplicações web modernas",
  },
  {
    icon: GraduationCap,
    title: "ADS",
    description: "Cursando Análise e Desenvolvimento de Sistemas",
  },
  {
    icon: Briefcase,
    title: "Experiência",
    description: "Projetos pessoais e freelancers desde 2022",
  },
  {
    icon: Target,
    title: "Foco",
    description: "Sempre buscando novas tecnologias e desafios",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Conheça mais
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Olá! Meu nome é <span className="text-primary font-semibold">Igor Motta</span>, 
              e sou desenvolvedor Full Stack com foco em criar soluções web modernas e eficientes. 
              Minha jornada na programação começou em Junho de 2022, quando decidi me aprofundar 
              no mundo do desenvolvimento.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Atualmente, estou cursando Análise e Desenvolvimento de Sistemas, 
              enquanto continuo aprimorando minhas habilidades em tecnologias como 
              React, Node.js, TypeScript, e explorando o universo cloud com AWS.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Minha paixão está em transformar ideias em código funcional e elegante, 
              sempre priorizando a experiência do usuário e as melhores práticas de desenvolvimento.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-subtle hover:-translate-y-1 opacity-0 animate-slide-up stagger-${index + 1}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
