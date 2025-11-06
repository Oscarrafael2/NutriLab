"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Image src="/nutrilab-logo.png" alt="NutriLab" width={180} height={60} className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="#programa" className="text-foreground hover:text-primary transition-colors font-medium">
              Programa
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors font-medium">
              Beneficios
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90">Inscríbete</Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t">
            <a href="#inicio" className="block text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="#programa" className="block text-foreground hover:text-primary transition-colors font-medium">
              Programa
            </a>
            <a href="#beneficios" className="block text-foreground hover:text-primary transition-colors font-medium">
              Beneficios
            </a>
            <a href="#contacto" className="block text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90">Inscríbete</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
