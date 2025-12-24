import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Download, Linkedin, Github, MessageCircle } from "lucide-react";

const roles = [
  "Desenvolvedor Full Stack",
  "Especialista React",
  "Backend Node.js",
  "Entusiasta TypeScript",
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="opacity-0 animate-slide-up stagger-1">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Bem-vindo ao meu portfólio
              </span>
            </div>

            <h1 className="opacity-0 animate-slide-up stagger-2 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Olá, me chamo <span className="text-gradient">Igor Motta</span>
            </h1>

            <div className="opacity-0 animate-slide-up stagger-3 h-12">
              <p className="text-xl md:text-2xl text-muted-foreground">
                E sou{" "}
                <span className="text-primary font-semibold">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>

            <p className="opacity-0 animate-slide-up stagger-4 text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Desde Junho de 2022 estou aprimorando minhas habilidades em
              JavaScript, TypeScript, React, Node, MySQL, MongoDB, Next e Nest.
              Atualmente, estou expandindo meus conhecimentos em AWS.
            </p>

            <div className="opacity-0 animate-slide-up stagger-5 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="/Igor Motta.pdf" download>
                  <Download className="mr-2" />
                  Baixar CV
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Entre em contato</a>
              </Button>
            </div>

            <div className="opacity-0 animate-slide-up stagger-6 flex gap-4 justify-center lg:justify-start pt-4">
              <Button variant="social" size="iconLg" asChild>
                <a
                  href="https://www.linkedin.com/in/igor-motta-9588b4215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="social" size="iconLg" asChild>
                <a
                  href="https://github.com/igormtt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="social" size="iconLg" asChild>
                <a
                  href="https://wa.me/5521996587072"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Avatar/Image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow scale-110" />
              <div className="relative w-80 h-80 rounded-full glass-strong overflow-hidden border-2 border-primary/30 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                  <img className="block mx-auto my-auto" src="/Me.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
