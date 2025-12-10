"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Vortex } from "@/components/ui/vortex"

export function Hero() {
  return (
    <Vortex
      backgroundColor="black"
      className="flex items-center justify-center min-h-screen"
      containerClassName="min-h-screen"
      particleCount={500}
      baseHue={220}
      baseSpeed={0.1}
      rangeSpeed={1}
      baseRadius={1}
      rangeRadius={2}
      rangeY={200}
    >
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="animate-fade-in">
          <p className="text-sm md:text-base text-white mb-4 font-mono">Hola Mundo!, soy</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent text-balance">
            Julián Moreno Cuenca
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-6">Desarrollador Web Fullstack</p>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-8 text-pretty">
             Titulado en Desarrollo de Aplicaciones Web, con experiencia práctica en Python, Django y JavaScript, y una sólida base académica en Java y Angular. Ubicado en
            Málaga, España 🇪🇸
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50">
              <a href="#contact">Contáctame</a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" asChild className="hover:text-primary">
              <a href="https://github.com/Julitown46" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary">
              <a
                href="https://www.linkedin.com/in/julian-moreno-1408b133a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary">
              <a href="mailto:morenojulian4502@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </a>
      </div>
    </Vortex>
  )
}
