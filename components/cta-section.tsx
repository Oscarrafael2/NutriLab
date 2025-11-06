"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { useState } from "react"

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xgvpgprk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-5" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary-foreground/20 bg-primary-foreground/95 backdrop-blur">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">
                  ¡Comienza tu <span className="text-primary">NutriAventura</span> hoy!
                </h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  Inscríbete ahora y recibe un kit de bienvenida gratuito con recetas y guías nutricionales
                </p>
              </div>

              {isSubmitted ? (
                <div className="max-w-md mx-auto text-center space-y-4 py-8">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-green-100">
                      <CheckCircle2 className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-green-600">¡Inscripción exitosa!</h3>
                  <p className="text-muted-foreground">
                    Gracias por inscribirte. Pronto recibirás un correo con más información sobre NutriAventura.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                    Inscribir a otra persona
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                  <Input type="text" name="nombre" placeholder="Tu nombre completo" className="h-12 text-lg" required />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    className="h-12 text-lg"
                    required
                  />
                  <Input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono de contacto"
                    className="h-12 text-lg"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Inscribirme ahora"}
                  </Button>
                </form>
              )}

              <div className="grid gap-6 md:grid-cols-3 pt-8 border-t">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium">info@nutrilab.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Teléfono</div>
                    <div className="font-medium">+52 999 381 4279</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Ubicación</div>
                    <div className="font-medium">Ticimul,Umán, Yucatán </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
