import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Weather App",
    description:
      "Aplicação de previsão do tempo com API de clima em tempo real",
    image: "https://portfolio-v2-beryl-psi.vercel.app/weather_app.png",
    tags: ["React", "API", "CSS"],
    liveUrl: "https://weather-app-ivory-eight-25.vercel.app/",
    githubUrl: "https://github.com/igormtt/Weather-app",
  },
  {
    title: "You Flix",
    description: "Plataforma de streaming de vídeos inspirada no YouTube",
    image: "https://portfolio-v2-beryl-psi.vercel.app/you_flix.png",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://you-flix-app.vercel.app/",
    githubUrl: "https://github.com/igormtt/youFlix-app",
  },
  {
    title: "To-do List",
    description: "Gerenciador de tarefas com funcionalidades CRUD completas",
    image: "https://portfolio-v2-beryl-psi.vercel.app/todo_list.png",
    tags: ["React", "TypeScript", "LocalStorage"],
    liveUrl: "https://to-do-react-sooty.vercel.app/",
    githubUrl: "https://github.com/igormtt/todo-app",
  },
  {
    title: "Ignite Coffee",
    description: "E-commerce de café com carrinho e checkout",
    image: "https://portfolio-v2-beryl-psi.vercel.app/igniteCoffee.png",
    tags: ["React", "TypeScript", "Styled Components"],
    liveUrl: "https://ignite-coffee-three.vercel.app/",
    githubUrl: "https://github.com/igormtt/ignite-coffee",
  },
  {
    title: "Ignite Feed",
    description: "Feed de posts com interações de likes e comentários",
    image: "https://portfolio-v2-beryl-psi.vercel.app/ignite-feed.png",
    tags: ["React", "CSS Modules", "TypeScript"],
    liveUrl: "https://ignite-feed-psi-orcin.vercel.app/",
    githubUrl: "https://github.com/igormtt/ignite-feed",
  },
  {
    title: "GitHub Blog",
    description: "Blog integrado com a API do GitHub para exibir issues",
    image: "https://portfolio-v2-beryl-psi.vercel.app/github-blog.png",
    tags: ["React", "GitHub API", "TypeScript"],
    liveUrl: "https://github-blog-ee2p.vercel.app/",
    githubUrl: "https://github.com/igormtt/github-blog",
  },
];

const freelancers = [
  {
    title: "Arantes & Resende",
    description: "Site institucional para escritório de advocacia",
    image: "https://portfolio-v2-beryl-psi.vercel.app/Arantes&Resende.png",
    tags: ["Next.js", "Tailwind", "SEO"],
    liveUrl: "https://arantesresende.com.br/",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Meu trabalho
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            Projetos <span className="text-gradient">Recentes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:glow-subtle hover:-translate-y-2 opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <Button variant="social" size="icon" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver projeto"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="social" size="icon" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver código"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Freelancers Section */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl font-bold">
            Trabalhos <span className="text-gradient">Freelancer</span>
          </h3>
        </div>

        <div className="max-w-lg mx-auto">
          {freelancers.map((project) => (
            <a
              key={project.title}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:glow-subtle block"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-semibold text-lg">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
