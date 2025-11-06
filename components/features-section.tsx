import { Card, CardContent } from "@/components/ui/card"
import { Apple, Brain, Users, Zap, Heart, Trophy } from "lucide-react"

const features = [
  {
    icon: Apple,
    title: "Nutrición Práctica",
    description: "Aprende a elegir alimentos saludables y crear menús balanceados para tu día a día.",
    color: "text-secondary",
  },
  {
    icon: Brain,
    title: "Ciencia Divertida",
    description: "Descubre cómo funciona tu cuerpo y por qué la nutrición es clave para tu desarrollo.",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Talleres Grupales",
    description: "Comparte experiencias con otros adolescentes y aprende en un ambiente colaborativo.",
    color: "text-accent",
  },
  {
    icon: Zap,
    title: "Energía y Rendimiento",
    description: "Optimiza tu energía para estudiar, hacer deporte y disfrutar tus actividades favoritas.",
    color: "text-chart-4",
  },
  {
    icon: Heart,
    title: "Hábitos Saludables",
    description: "Desarrolla rutinas que te acompañarán toda la vida y mejora tu bienestar integral.",
    color: "text-destructive",
  },
  {
    icon: Trophy,
    title: "Logros Reales",
    description: "Establece metas alcanzables y celebra tus avances en el camino hacia una vida más saludable.",
    color: "text-chart-5",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            ¿Qué aprenderás en <span className="text-primary">NutriAventura</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un programa completo diseñado específicamente para adolescentes como tú
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardContent className="p-8 space-y-4">
                <div
                  className={`inline-flex p-3 rounded-xl bg-muted group-hover:scale-110 transition-transform ${feature.color}`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
