import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto cuesta una Lipoescultura en dólares?",
    answer:
      "El rango de una Lipoescultura Vaser 360 (espalda, abdomen y cintura) oscila entre $3,500 y $5,500 USD. Este precio incluye honorarios médicos, anestesia, sala de cirugía, faja postquirúrgica y póliza de complicaciones. El presupuesto final se determina en la valoración presencial según el volumen de grasa y las zonas a tratar.",
  },
  {
    question: "¿Cuántos días debo quedarme en Bogotá?",
    answer:
      "Recomendamos una estancia mínima de 12 a 15 días en Bogotá. Esto permite realizar los controles postoperatorios, retiro de puntos y asegurar que puedas viajar en avión sin riesgo de complicaciones como trombos. Durante tu estadía, estarás en contacto permanente con nuestro equipo médico.",
  },
  {
    question: "¿Incluyen los masajes postoperatorios?",
    answer:
      "Sí, nuestros paquetes incluyen entre 3 y 5 sesiones de drenaje linfático postoperatorio en nuestro consultorio. Estos masajes son fundamentales para una óptima recuperación y resultados en la lipoescultura. Si necesitas sesiones adicionales, las coordinamos a precio preferencial.",
  },
  {
    question: "¿Qué es la póliza de seguridad?",
    answer:
      "La Póliza de Complicaciones es un seguro obligatorio en Colombia que cubre gastos médicos adicionales en caso de cualquier eventualidad postquirúrgica. Esta póliza está incluida en todos nuestros presupuestos y te brinda tranquilidad total durante tu proceso de recuperación.",
  },
  {
    question: "¿Hacen videoconsulta antes de viajar?",
    answer:
      "¡Por supuesto! Para pacientes fuera de Bogotá o del exterior, realizamos una primera valoración por videollamada totalmente gratuita. En esta consulta evaluamos tu caso, resolvemos dudas y te damos un presupuesto aproximado antes de que planifiques tu viaje.",
  },
  {
    question: "¿Aceptan tarjetas de crédito internacionales?",
    answer:
      "Sí, aceptamos múltiples formas de pago: efectivo (USD o COP), tarjetas de crédito internacionales (Visa, MasterCard, American Express), transferencias SWIFT, Zelle y transferencias a Bancolombia. También ofrecemos opciones de financiamiento para pacientes que califiquen.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-custom px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
            Dudas Frecuentes de Nuestros Pacientes
          </h2>
          <p className="text-muted-foreground text-lg">
            Resolvemos las preguntas más comunes sobre nuestros procedimientos y
            servicios
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-soft"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Tienes más preguntas? Estamos aquí para ayudarte
          </p>
          <a href="#contacto" className="btn-primary inline-block">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
