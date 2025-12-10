"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Python", "Django", "Django REST Framework", "Java", "Spring Boot", "Node.js", "Fast API"],
    },
    {
      title: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "Angular", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "DevOps y Bases de Datos",
      skills: ["Docker", "Git", "PostgreSQL", "MySQL", "MongoDB", "Linux"],
    },
    {
      title: "Herramientas y Metodologías",
      skills: ["SCRUM", "Agile", "REST APIs", "GraphQL", "Pytest", "CI/CD", "Jira"],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Habilidades Técnicas
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
