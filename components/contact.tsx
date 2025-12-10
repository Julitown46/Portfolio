"use client"
import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "morenojulian4502@gmail.com",
      href: "mailto:morenojulian4502@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+34 684 349 897",
      href: "tel:+34684349897",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Málaga, España",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Julitown46",
      href: "https://github.com/Julitown46",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/julian-moreno-1408b133a",
      href: "https://www.linkedin.com/in/julian-moreno-1408b133a",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Contacto
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
        <p className="text-center max-w-2xl mx-auto mb-12 text-pretty">
          Actualmente estoy buscando nuevas oportunidades y me encantaría saber de ti. Si tienes alguna pregunta o
          simplemente quieres saludar, no dudes en contactarme.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-foreground">Información de Contacto</CardTitle>
              <CardDescription>Puedes contactarme a través de estos canales.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50">
              <a
                href="https://blobs.vusercontent.net/blob/CV%20Julian%20Moreno%20Cuenca-NjbORmKwmLa2zLlHEq3fgzTHnBKiPn.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Ver CV
              </a>
            </Button>
          </div>

          <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <p className="text-lg font-semibold mb-2 text-balance">¡Construyamos algo increíble juntos!</p>
              <p className="text-sm opacity-90 text-pretty">
                Me apasiona crear soluciones web innovadoras y siempre estoy emocionado por colaborar en proyectos
                interesantes.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Julián Moreno Cuenca. Construido con Next.js y Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
