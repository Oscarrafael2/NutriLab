import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const modules = [
  {
    week: "Semanas 1-3",
    title: "Fundamentos de Nutrición",
    topics: [
      "Macronutrientes y micronutrientes",
      "Lectura de etiquetas nutricionales",
      "Grupos alimenticios y porciones",
      "Hidratación y su importancia",
    ],
  },
  {
    week: "Semanas 4-6",
    title: "Planificación de Comidas",
    topics: [
      "Creación de menús balanceados",
      "Snacks saludables para la escuela",
      "Comida rápida vs. comida saludable",
      "Cocina práctica y recetas fáciles",
    ],
  },
  {
    week: "Semanas 7-9",
    title: "Nutrición y Estilo de Vida",
    topics: [
      "Nutrición deportiva para adolescentes",
      "Manejo del estrés y alimentación emocional",
      "Sueño y su relación con la nutrición",
      "Mitos y verdades sobre dietas",
    ],
  },
  {
    week: "Semanas 10-12",
    title: "Proyecto Final",
    topics: [
      "Diseña tu plan nutricional personalizado",
      "Presentación de proyectos grupales",
      "Certificación NutriAventura",
      "Compromiso con hábitos saludables",
    ],
  },
]

export function ProgramSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Programa de <span className="text-secondary">12 Semanas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un viaje estructurado hacia una vida más saludable
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {modules.map((module, index) => (
            <Card key={index} className="border-2 hover:border-secondary/50 transition-all">
              <CardHeader className="space-y-2">
                <div className="text-sm font-semibold text-secondary uppercase tracking-wide">{module.week}</div>
                <CardTitle className="text-2xl">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
