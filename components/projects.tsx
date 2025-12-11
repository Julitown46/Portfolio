"use client"

import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "Hi-Tech Gym",
      description: "TFG dedicado a un gimnasio con reservas de pista de pádel desarrollada con Python y Angular",
      image: "images/hitechgym.png",
      tags: ["Django", "Python", "SQLite", "Angular", "CSS"],
      github: "https://github.com/Julitown46/Hi-Tech-Gym",
      demo: "https://github.com/Julitown46/Hi-Tech-Gym",
    },
    {
      title: "Wumind Website",
      description: "Landing para mi agencia de automatizaciones con Inteligencia Artificial",
      image: "images/wumindwebsite.png",
      tags: ["React", "V0", "Next.js", "Tailwind"],
      github: "https://github.com/Julitown46/wumind-website",
      demo: "https://wumindagency.com/",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-black">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Proyectos Destacados
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group bg-zinc-900 border-zinc-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-pretty">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </a>
                </Button>
                {project.demo && (
                  <Button size="sm" asChild className="flex-1 bg-primary hover:bg-primary/90">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
