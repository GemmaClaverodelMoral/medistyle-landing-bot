const footerLinks = [
  { href: "#", label: "Consentimiento Informado" },
  { href: "#", label: "Política de privacidad" },
  { href: "#", label: "Recomendaciones Pre-quirúrgicas" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div>
            <p className="text-lg font-display font-semibold text-background">
              Dr. Martínez | Plastic Surgery
            </p>
            <p className="text-sm text-background/60 mt-1">
              Clínica de Cirugía Plástica · Bogotá, Colombia
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-background/50">
            © {currentYear} Dr. Martínez Plastic Surgery. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-background/40 mt-2">
            Los resultados pueden variar. Las simulaciones son orientativas.
            Consulta siempre con tu cirujano.
          </p>
        </div>
      </div>
    </footer>
  );
}
