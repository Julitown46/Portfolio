"use client"

import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-card">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Experiencia y Educación
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-foreground">Ingeniero de Software en Prácticas</CardTitle>
                  <CardDescription className="text-base font-semibold text-accent mt-1">Ebury</CardDescription>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-5" />
                      <span>Abril 2025 - Junio 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Málaga, España</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-pretty">
                    Desarrollé y mantuve características bacekend para aplicaciones de tecnología financiera usando
                    tecnologías web en un sistema legacy
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-pretty">
                    Colaboré con equipos multifuncionales en un entorno ágil SCRUM para entregar soluciones de software
                    de alta calidad
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-pretty">
                    Analicé errores en Sentry para su posterior resolución en código
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-pretty">
                    Trabajé en un equipo en entorno internacional, teniendo que comunicarme de
                    forma eficiente en inglés
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-foreground">Chófer Uber</CardTitle>
                  <CardDescription className="text-base font-semibold text-accent mt-1">Moove Cars</CardDescription>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-5" />
                      <span>Julio 2023 - Septiembre 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Málaga, España</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-foreground">Albañil</CardTitle>
                  <CardDescription className="text-base font-semibold text-accent mt-1">Consjumo2011 S.L.</CardDescription>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-5" />
                      <span>Mayo 2022 - Septiembre 2022</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Málaga, España</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-foreground">Desarrollo de Aplicaciones Web (DAW)</CardTitle>
                  <CardDescription className="text-base font-semibold text-accent mt-1">
                    Ciclo Formativo de Grado Superior
                  </CardDescription>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>2022 - 2025</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Málaga, España</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span className="text-pretty">
                    Formación integral en desarrollo web FullStack cubriendo tecnologías frontend y backend
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span className="text-pretty">
                    Aprendí diseño de bases de datos, administración de servidores y estrategias de despliegue
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span className="text-pretty">
                    Colaboré con mis compañeros a implementar unas mejores practicas y desallorar mejor nuestro código
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-foreground">Ingenieria de Sistemas Electrónicos</CardTitle>
                  <CardDescription className="text-base font-semibold text-accent mt-2">
                    Grado Universitario (No completado)
                  </CardDescription>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>2020 - 2022</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Málaga, España</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span className="text-pretty">
                    Aprendí los fundamentos de C++ y fue mi motivación a aprender a programar
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span className="text-pretty">
                    Entendí mis puntos fuertes y debiles para seguir desarrollando mi carrera personal
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
