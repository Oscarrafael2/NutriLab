import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pt-20 pb-32 md:pt-32 md:pb-40">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Ciencia + Diversión = Salud</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl">
              Descubre el poder de la{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                nutrición saludable
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              NutriAventura es un taller interactivo diseñado para adolescentes que quieren aprender sobre alimentación
              saludable de forma divertida y científica.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="text-lg h-14 px-8 bg-primary hover:bg-primary/90">
                Inscríbete ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2 bg-transparent">
                Conoce más
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Adolescentes</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-accent">12</div>
                <div className="text-sm text-muted-foreground">Semanas</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 blur-3xl" />
            <div className="relative rounded-3xl bg-card p-8 shadow-2xl border-2 border-border">
              <Image
                src="/happy-teenagers-learning-about-nutrition-with-frui.jpg"
                alt="Adolescentes aprendiendo sobre nutrición"
                width={400}
                height={400}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
