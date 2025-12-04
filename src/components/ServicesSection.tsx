const services = [
  {
    icon: "body",
    title: "Cirugía Corporal",
    subtitle: "Lipo Vaser · Abdominoplastia",
    description:
      "Esculpe tu silueta con tecnología de última generación. Resultados naturales, recuperación rápida y mínimas cicatrices con nuestra técnica de Lipoescultura Vaser.",
  },
  {
    icon: "face",
    title: "Cirugía Facial",
    subtitle: "Rinoplastia Ultrasónica · Lifting",
    description:
      "Realza tu belleza natural con procedimientos faciales de precisión milimétrica. Especialistas en narices mestizas y caucásicas con resultados armónicos.",
  },
  {
    icon: "chest",
    title: "Cirugía de Pecho",
    subtitle: "Aumento · Levantamiento · Reducción",
    description:
      "Implantes de marcas premium (Motiva, Mentor). Recupera la confianza en tu cuerpo con técnicas que priorizan la naturalidad y tu bienestar.",
  },
  {
    icon: "travel",
    title: "Turismo Médico",
    subtitle: "Paquetes Todo Incluido",
    description:
      "Experiencia VIP para pacientes internacionales: transporte, alojamiento premium, acompañamiento 24/7 y seguimiento postoperatorio personalizado.",
  },
];

const ServiceIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    body: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    face: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        />
      </svg>
    ),
    chest: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
    travel: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
        />
      </svg>
    ),
  };
  return icons[type] || icons.body;
};

export default function ServicesSection() {
  return (
    <section id="procedimientos" className="section-padding bg-cream">
      <div className="container-custom px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
            Procedimientos Destacados
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnología de vanguardia y técnicas avanzadas para resultados
            excepcionales
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card-elevated group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent text-primary-foreground flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ServiceIcon type={service.icon} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                {service.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
              >
                Ver detalles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
