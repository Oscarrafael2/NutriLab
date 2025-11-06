import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="space-y-4">
            <Image src="/nutrilab-logo.png" alt="NutriLab" width={160} height={53} className="h-10 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ciencia innovadora en nutrición para una vida más saludable
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1EzLAimDoS/" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Facebook className="h-5 w-5 text-primary" />
              </a>
              <a href="https://www.instagram.com/rebecasarai_20?igsh=MTlsbDN4bHVmYTcydg==" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a href="https://www.facebook.com/share/16xgeENwbc/" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Facebook  className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Programa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  NutriAventura
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Talleres
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Certificación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Recursos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre NutriLab
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 NutriLab. Todos los derechos reservados. Innovative Nutrition Science.</p>
        </div>
      </div>
    </footer>
  )
}
