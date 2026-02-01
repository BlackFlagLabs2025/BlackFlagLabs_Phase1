/* Terms.jsx */
import { useEffect } from "react";
import useScrollReveal from '../hooks/useScrollReveal';
import CyberControlPanel from '../components/UI/CyberControlPanel';
import { usePreferencesStore } from '../store/preferencesStore';

export default function TermsOfService() {
  const language = usePreferencesStore((s) => s.language);
  const setLanguage = usePreferencesStore((s) => s.setLanguage);
  const theme = usePreferencesStore((s) => s.theme);

  // Apply theme on mount and when it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll reveal animation
  useScrollReveal();

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: November 2025",
      sections: [
        {
          title: "1. Agreement to Terms",
          content: [
            "By accessing and using Black Flag Labs's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.",
            "We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes acceptance of those changes."
          ]
        },
        {
          title: "2. Services Description",
          content: [
            "Black Flag Labs provides professional web development services including but not limited to:",
            "• Website design and development\n• Web application development\n• E-commerce solutions\n• API integrations\n• Maintenance and support\n• SEO optimization",
            "All services are provided on a project basis or through subscription packages as outlined in our service agreements."
          ]
        },
        {
          title: "3. Project Scope & Changes",
          content: [
            "The scope of work for each project will be defined in a separate project agreement or statement of work (SOW). Any changes to the agreed scope must be documented and approved in writing by both parties.",
            "Changes to project scope may result in additional fees and timeline adjustments. We will provide estimates for any scope changes before implementation."
          ]
        },
        {
          title: "4. Payment Terms",
          content: [
            "Payment terms are specified in your project agreement. Typically, we require:",
            "• Initial deposit (25-50%) upon project commencement\n• Milestone payments as outlined in the project agreement\n• Final payment upon project completion and delivery",
            "Deposits are non-refundable. Payment must be made via approved methods (bank transfer, PayPal, Stripe). Late payments may incur additional fees and project delays."
          ]
        },
        {
          title: "5. Client Responsibilities",
          content: [
            "Clients are responsible for:",
            "• Providing accurate and timely information, content, and materials\n• Timely feedback and approvals\n• Maintaining access credentials for third-party services\n• Compliance with applicable laws and regulations\n• Ensuring you have rights to all content provided",
            "Delays caused by missing client materials or feedback may result in project timeline extensions."
          ]
        },
        {
          title: "6. Intellectual Property",
          content: [
            "Upon full payment, clients receive ownership of the final delivered work product (website, application, etc.). Black Flag Labs retains rights to:",
            "• Reusable code components and frameworks\n• Development methodologies and processes\n• Use completed projects in our portfolio (unless otherwise agreed)",
            "Clients grant Black Flag Labs permission to showcase completed work for marketing purposes unless a non-disclosure agreement states otherwise."
          ]
        },
        {
          title: "7. Confidentiality",
          content: [
            "We maintain strict confidentiality regarding all client information and project details. We will not disclose any confidential information without prior written consent, except as required by law.",
            "Both parties agree to protect any proprietary or confidential information shared during the project engagement."
          ]
        },
        {
          title: "8. Warranties & Limitations",
          content: [
            "We warrant that services will be performed professionally and in accordance with industry standards. However, we do not guarantee:",
            "• Specific SEO rankings or traffic results\n• Compatibility with all future browser or platform updates\n• Uninterrupted operation of third-party services\n• Specific business outcomes or revenue",
            "TO THE MAXIMUM EXTENT PERMITTED BY LAW, BLACK FLAG STUDIO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES."
          ]
        },
        {
          title: "9. Project Delivery & Acceptance",
          content: [
            "Projects are delivered through our agreed channels (staging servers, GitHub, etc.). Clients have a review period (typically 7-14 days) to report any issues.",
            "Final acceptance is deemed to occur when:",
            "• Client provides written approval\n• Client begins using the deliverable in production\n• Review period expires without reported issues",
            "Minor fixes during the review period are included. Major changes constitute scope changes and may incur additional fees."
          ]
        },
        {
          title: "10. Maintenance & Support",
          content: [
            "Post-launch support terms are defined in separate maintenance agreements. Unless otherwise agreed:",
            "• Bug fixes related to our development are provided for 30 days post-launch\n• Feature additions and content updates require separate agreements\n• Third-party service issues are outside our support scope",
            "Ongoing maintenance packages are available on monthly or annual subscription basis."
          ]
        },
        {
          title: "11. Termination",
          content: [
            "Either party may terminate the agreement with written notice if:",
            "• The other party breaches these terms and fails to cure within 14 days\n• The other party becomes insolvent or bankrupt",
            "Upon termination:",
            "• Client pays for all work completed to date\n• Black Flag Labs delivers all completed work\n• Deposits and milestone payments are non-refundable\n• Both parties return or destroy confidential information"
          ]
        },
        {
          title: "12. Force Majeure",
          content: [
            "Neither party shall be liable for delays or failures due to circumstances beyond reasonable control, including but not limited to natural disasters, war, pandemics, power outages, or internet service disruptions.",
            "We will make reasonable efforts to minimize any delays and will notify you promptly of any force majeure events."
          ]
        },
        {
          title: "13. Governing Law",
          content: [
            "These Terms shall be governed by and construed in accordance with the laws of Honduras, without regard to its conflict of law provisions.",
            "Any disputes arising from these terms shall be resolved through good faith negotiation first, followed by mediation, and finally through arbitration if necessary."
          ]
        },
        {
          title: "14. Indemnification",
          content: [
            "Client agrees to indemnify and hold Black Flag Labs harmless from any claims, damages, or expenses (including legal fees) arising from:",
            "• Client's use of delivered work\n• Content provided by client\n• Client's breach of these terms\n• Infringement of third-party rights by client-provided materials"
          ]
        },
        {
          title: "15. Entire Agreement",
          content: [
            "These Terms of Service, together with any project agreements and statements of work, constitute the entire agreement between the parties and supersede all prior understandings and agreements.",
            "Any modifications must be made in writing and signed by authorized representatives of both parties."
          ]
        }
      ],
      contact: {
        title: "Questions About These Terms?",
        description: "If you have any questions about our Terms of Service, please contact us at:",
        email: "blackflaglabs@outlook.com"
      }
    },
    es: {
      title: "Términos de Servicio",
      lastUpdated: "Última Actualización: Noviembre 2025",
      sections: [
        {
          title: "1. Acuerdo de Términos",
          content: [
            "Al acceder y usar los servicios de Black Flag Labs, usted acepta estar sujeto a estos Términos de Servicio y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar nuestros servicios.",
            "Nos reservamos el derecho de modificar estos términos en cualquier momento. Su uso continuo de nuestros servicios después de cualquier cambio constituye la aceptación de esos cambios."
          ]
        },
        {
          title: "2. Descripción de Servicios",
          content: [
            "Black Flag Labs proporciona servicios profesionales de desarrollo web que incluyen pero no se limitan a:",
            "• Diseño y desarrollo de sitios web\n• Desarrollo de aplicaciones web\n• Soluciones de comercio electrónico\n• Integraciones de API\n• Mantenimiento y soporte\n• Optimización SEO",
            "Todos los servicios se proporcionan por proyecto o a través de paquetes de suscripción como se describe en nuestros acuerdos de servicio."
          ]
        },
        {
          title: "3. Alcance del Proyecto y Cambios",
          content: [
            "El alcance del trabajo para cada proyecto se definirá en un acuerdo de proyecto separado o declaración de trabajo (SOW). Cualquier cambio al alcance acordado debe ser documentado y aprobado por escrito por ambas partes.",
            "Los cambios en el alcance del proyecto pueden resultar en tarifas adicionales y ajustes de cronograma. Proporcionaremos estimaciones para cualquier cambio de alcance antes de la implementación."
          ]
        },
        {
          title: "4. Términos de Pago",
          content: [
            "Los términos de pago se especifican en su acuerdo de proyecto. Típicamente, requerimos:",
            "• Depósito inicial (25-50%) al inicio del proyecto\n• Pagos por hitos según lo descrito en el acuerdo del proyecto\n• Pago final al completar y entregar el proyecto",
            "Los depósitos no son reembolsables. El pago debe realizarse a través de métodos aprobados (transferencia bancaria, PayPal, Stripe). Los pagos tardíos pueden incurrir en tarifas adicionales y retrasos del proyecto."
          ]
        },
        {
          title: "5. Responsabilidades del Cliente",
          content: [
            "Los clientes son responsables de:",
            "• Proporcionar información, contenido y materiales precisos y oportunos\n• Retroalimentación y aprobaciones oportunas\n• Mantener credenciales de acceso para servicios de terceros\n• Cumplimiento de leyes y regulaciones aplicables\n• Asegurar que tienen derechos sobre todo el contenido proporcionado",
            "Los retrasos causados por falta de materiales o retroalimentación del cliente pueden resultar en extensiones del cronograma del proyecto."
          ]
        },
        {
          title: "6. Propiedad Intelectual",
          content: [
            "Al completar el pago, los clientes reciben la propiedad del producto de trabajo final entregado (sitio web, aplicación, etc.). Black Flag Labs retiene los derechos sobre:",
            "• Componentes de código y marcos reutilizables\n• Metodologías y procesos de desarrollo\n• Uso de proyectos completados en nuestro portafolio (a menos que se acuerde lo contrario)",
            "Los clientes otorgan permiso a Black Flag Labs para mostrar el trabajo completado con fines de marketing a menos que un acuerdo de confidencialidad establezca lo contrario."
          ]
        },
        {
          title: "7. Confidencialidad",
          content: [
            "Mantenemos estricta confidencialidad con respecto a toda la información del cliente y detalles del proyecto. No divulgaremos ninguna información confidencial sin consentimiento previo por escrito, excepto cuando lo exija la ley.",
            "Ambas partes acuerdan proteger cualquier información propietaria o confidencial compartida durante el compromiso del proyecto."
          ]
        },
        {
          title: "8. Garantías y Limitaciones",
          content: [
            "Garantizamos que los servicios se realizarán profesionalmente y de acuerdo con los estándares de la industria. Sin embargo, no garantizamos:",
            "• Rankings SEO específicos o resultados de tráfico\n• Compatibilidad con todas las actualizaciones futuras de navegadores o plataformas\n• Operación ininterrumpida de servicios de terceros\n• Resultados comerciales o ingresos específicos",
            "EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, BLACK FLAG STUDIO NO SERÁ RESPONSABLE DE NINGÚN DAÑO INDIRECTO, INCIDENTAL, ESPECIAL O CONSECUENTE."
          ]
        },
        {
          title: "9. Entrega y Aceptación del Proyecto",
          content: [
            "Los proyectos se entregan a través de nuestros canales acordados (servidores de prueba, GitHub, etc.). Los clientes tienen un período de revisión (típicamente 7-14 días) para reportar cualquier problema.",
            "La aceptación final se considera que ocurre cuando:",
            "• El cliente proporciona aprobación por escrito\n• El cliente comienza a usar el entregable en producción\n• El período de revisión expira sin problemas reportados",
            "Las correcciones menores durante el período de revisión están incluidas. Los cambios mayores constituyen cambios de alcance y pueden incurrir en tarifas adicionales."
          ]
        },
        {
          title: "10. Mantenimiento y Soporte",
          content: [
            "Los términos de soporte post-lanzamiento se definen en acuerdos de mantenimiento separados. A menos que se acuerde lo contrario:",
            "• Las correcciones de errores relacionadas con nuestro desarrollo se proporcionan durante 30 días post-lanzamiento\n• Las adiciones de características y actualizaciones de contenido requieren acuerdos separados\n• Los problemas de servicios de terceros están fuera de nuestro alcance de soporte",
            "Los paquetes de mantenimiento continuo están disponibles en suscripción mensual o anual."
          ]
        },
        {
          title: "11. Terminación",
          content: [
            "Cualquiera de las partes puede terminar el acuerdo con aviso por escrito si:",
            "• La otra parte incumple estos términos y no lo soluciona en 14 días\n• La otra parte se vuelve insolvente o en bancarrota",
            "Al terminar:",
            "• El cliente paga por todo el trabajo completado hasta la fecha\n• Black Flag Labs entrega todo el trabajo completado\n• Los depósitos y pagos de hitos no son reembolsables\n• Ambas partes devuelven o destruyen la información confidencial"
          ]
        },
        {
          title: "12. Fuerza Mayor",
          content: [
            "Ninguna de las partes será responsable por retrasos o fallas debido a circunstancias fuera del control razonable, incluyendo pero no limitado a desastres naturales, guerra, pandemias, cortes de energía o interrupciones del servicio de internet.",
            "Haremos esfuerzos razonables para minimizar cualquier retraso y le notificaremos prontamente de cualquier evento de fuerza mayor."
          ]
        },
        {
          title: "13. Ley Aplicable",
          content: [
            "Estos Términos se regirán e interpretarán de acuerdo con las leyes de Honduras, sin tener en cuenta sus disposiciones sobre conflictos de leyes.",
            "Cualquier disputa que surja de estos términos se resolverá primero a través de negociación de buena fe, seguido de mediación y finalmente a través de arbitraje si es necesario."
          ]
        },
        {
          title: "14. Indemnización",
          content: [
            "El cliente acepta indemnizar y mantener indemne a Black Flag Labs de cualquier reclamo, daño o gasto (incluyendo honorarios legales) que surja de:",
            "• Uso del trabajo entregado por parte del cliente\n• Contenido proporcionado por el cliente\n• Incumplimiento de estos términos por parte del cliente\n• Infracción de derechos de terceros por materiales proporcionados por el cliente"
          ]
        },
        {
          title: "15. Acuerdo Completo",
          content: [
            "Estos Términos de Servicio, junto con cualquier acuerdo de proyecto y declaraciones de trabajo, constituyen el acuerdo completo entre las partes y reemplazan todos los entendimientos y acuerdos previos.",
            "Cualquier modificación debe hacerse por escrito y firmada por representantes autorizados de ambas partes."
          ]
        }
      ],
      contact: {
        title: "¿Preguntas Sobre Estos Términos?",
        description: "Si tiene alguna pregunta sobre nuestros Términos de Servicio, contáctenos en:",
        email: "blackflaglabs@outlook.com"
      }
    }
  };

  const t = content[language];

  return (
    <>
      <CyberControlPanel />
      <div className="min-h-screen py-24 px-6">
        <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-sm opacity-60">{t.lastUpdated}</p>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-center mb-12 scroll-reveal">
          <div className="inline-flex rounded-xl border-2 border-border p-1.5 bg-surface/90 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setLanguage("en")}
              className={`px-5 py-2.5 rounded-lg text-sm font-black transition-all duration-300 ${
                language === "en"
                  ? "bg-gradient-to-r from-gradient-start to-gradient-end text-white shadow-xl scale-105"
                  : "text-fg-secondary/60 hover:text-fg hover:bg-accent/10 hover:scale-102"
              }`}
            >
              EN
            </button>
            <div className="w-px h-6 bg-border"></div>
            <button
              onClick={() => setLanguage("es")}
              className={`px-5 py-2.5 rounded-lg text-sm font-black transition-all duration-300 ${
                language === "es"
                  ? "bg-gradient-to-r from-gradient-start to-gradient-end text-white shadow-xl scale-105"
                  : "text-fg-secondary/60 hover:text-fg hover:bg-accent/10 hover:scale-102"
              }`}
            >
              ES
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {t.sections.map((section, index) => (
            <div key={index} className="scroll-reveal card">
              <h2 className="text-2xl font-bold mb-4 text-accent">
                {section.title}
              </h2>
              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="mb-4 text-fg-secondary leading-relaxed whitespace-pre-line"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center scroll-reveal card bg-gradient-to-r from-gradient-start/10 to-gradient-end/10">
          <h3 className="text-2xl font-bold mb-4">{t.contact.title}</h3>
          <p className="mb-4 opacity-80">{t.contact.description}</p>
          <a
            href={`mailto:${t.contact.email}`}
            className="text-accent hover:underline font-semibold"
          >
            {t.contact.email}
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a href="/" className="btn btn-secondary">
            {language === "en" ? "Back to Home" : "Volver al Inicio"}
          </a>
        </div>
      </div>
    </div>
    </>
  );
}