"use client"

import { Code2, Sparkles, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Desarrollador Full-Stack",
      description: "Experiencia en desarrollo frontend y backend con frameworks modernos",
    },
    {
      icon: Sparkles,
      title: "Código Limpio",
      description: "Escribiendo código mantenible, escalable y bien documentado",
    },
    {
      icon: Rocket,
      title: "Aprendizaje Rápido",
      description: "Siempre explorando nuevas tecnologías y mejores prácticas",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sobre mí
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

          <div className="prose prose-lg max-w-none mb-12 text-center">
            <p className="text-pretty leading-relaxed">
              Soy un desarrollador web FullStack junior enfocado en la búsqueda de nuevos horizontes a los que llegar
              usando las tecnologías más punteras. Mi experiencia técnica abarca{" "}
              <span className="text-foreground font-semibold">Python</span>,{" "}
              <span className="text-foreground font-semibold">Django</span>,{" "}
              <span className="text-foreground font-semibold">JavaScript</span>,{" "}
              <span className="text-foreground font-semibold">Java</span>, y frameworks como{" "}
              <span className="text-foreground font-semibold">Spring Boot</span>,{" "}
              <span className="text-foreground font-semibold">Angular</span> y{" "}
              <span className="text-foreground font-semibold">React</span>.
            </p>
            <p className="text-pretty leading-relaxed">
              En Octubre de 2025 comencé la aventura del emprendimiento con una{" "}
              <span className="text-foreground font-semibold">agencia de automatizaciones con Inteligencia Artificial </span> 
              que sigue en desarrollo habiendo conseguido ya dos ventas y sigo con el hambre y las ganas de aprender cosas nuevas cada día.
            </p>
            <p className="text-pretty leading-relaxed">
              En el ambito personal, soy un apasionado de los videojuegos, la música y las motos. Me gusta disfrutar y compartir con mi gente cercana.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card"
              >
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
