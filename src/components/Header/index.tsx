// Dependencies
import Link from "next/link";

// Components
import { Button } from "../ui/Button";
import { BlurFade } from "../ui/magicui/blur-fade";

export function Header() {
  return (
    <BlurFade duration={1} className="fixed left-0 top-0 z-50 w-full">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-16 xl:max-w-[1380px] w-screen items-center justify-between sm:px-6 lg:px-8 px-8">
          {/* Logo / Branding */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-[var(--color-primary-500)]"
            >
              Jus<span className="text-[var(--color-primary-900)]">Instant</span>
            </Link>
          </div>

          {/* Navegação */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "#features", label: "Recursos" },
              { href: "#how-it-works", label: "Como Funciona" },
              { href: "#pricing", label: "Preços" },
              { href: "#testimonials", label: "Depoimentos" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-neutral-700 hover:text-[var(--color-primary-600)] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Ações */}
          <div className="flex items-center space-x-4">
            <Button variant="primary" aria-label="Começar consulta jurídica">
              Começar Agora
            </Button>
          </div>
        </div>
      </header>
    </BlurFade>
  );
}
