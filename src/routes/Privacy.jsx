/* Privacy.jsx */
import { useEffect } from "react";
import useScrollReveal from '../hooks/useScrollReveal';
import CyberControlPanel from '../components/UI/CyberControlPanel';
import { usePreferencesStore } from '../store/preferencesStore';

export default function PrivacyPolicy() {
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
      title: "Privacy Policy",
      lastUpdated: "Last Updated: November 2025",
      intro: "At Black Flag Labs, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.",
      sections: [
        {
          title: "1. Information We Collect",
          content: [
            "We collect information that you provide directly to us, including:",
            "• Personal Information: Name, email address, phone number, company name\n• Project Information: Project requirements, business details, feedback\n• Payment Information: Billing details, transaction history (processed securely through third-party payment processors)\n• Technical Information: IP address, browser type, device information, cookies",
            "We collect this information when you:",
            "• Fill out contact forms or request quotes\n• Subscribe to our newsletter or services\n• Communicate with us via email or chat\n• Use our website or services"
          ]
        },
        {
          title: "2. How We Use Your Information",
          content: [
            "We use the collected information for various purposes:",
            "• Service Delivery: To provide, maintain, and improve our services\n• Communication: To respond to inquiries, send updates, and provide customer support\n• Project Management: To manage projects, deliver work, and coordinate with clients\n• Marketing: To send newsletters, promotional materials, and service updates (with your consent)\n• Analytics: To understand how our website is used and improve user experience\n• Legal Compliance: To comply with legal obligations and protect our rights",
            "We will never sell your personal information to third parties."
          ]
        },
        {
          title: "3. Information Sharing and Disclosure",
          content: [
            "We may share your information in the following circumstances:",
            "• Service Providers: With trusted third-party vendors who assist in our operations (hosting providers, payment processors, email services)\n• Legal Requirements: When required by law, court order, or government regulation\n• Business Transfers: In connection with any merger, sale, or transfer of our business\n• Protection: To protect our rights, property, safety, or that of others",
            "All third-party service providers are contractually obligated to maintain the confidentiality and security of your information."
          ]
        },
        {
          title: "4. Data Security",
          content: [
            "We implement appropriate technical and organizational measures to protect your information:",
            "• SSL/TLS encryption for data transmission\n• Secure servers and databases\n• Access controls and authentication\n• Regular security audits and updates\n• Employee training on data protection",
            "However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security."
          ]
        },
        {
          title: "5. Cookies and Tracking Technologies",
          content: [
            "We use cookies and similar tracking technologies to enhance your experience:",
            "• Essential Cookies: Required for website functionality\n• Analytics Cookies: To understand website usage (Google Analytics)\n• Preference Cookies: To remember your settings and preferences",
            "You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.",
            "We use Google Analytics to analyze website traffic. You can opt-out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on."
          ]
        },
        {
          title: "6. Your Rights and Choices",
          content: [
            "You have the following rights regarding your personal information:",
            "• Access: Request a copy of your personal information\n• Correction: Update or correct inaccurate information\n• Deletion: Request deletion of your information (subject to legal obligations)\n• Opt-Out: Unsubscribe from marketing communications\n• Portability: Request your data in a portable format\n• Object: Object to certain processing of your information",
            "To exercise these rights, contact us at blackflaglabs@outlook.com. We will respond within 30 days."
          ]
        },
        {
          title: "7. Data Retention",
          content: [
            "We retain your information for as long as necessary to:",
            "• Fulfill the purposes outlined in this policy\n• Comply with legal, accounting, or reporting requirements\n• Resolve disputes and enforce agreements\n• Maintain business records",
            "Typically, we retain:",
            "• Client project data: For the duration of the project plus 3 years\n• Communication records: 5 years\n• Financial records: 7 years (for tax purposes)\n• Marketing data: Until you unsubscribe",
            "After the retention period, we securely delete or anonymize your information."
          ]
        },
        {
          title: "8. International Data Transfers",
          content: [
            "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place:",
            "• Standard contractual clauses\n• Adequacy decisions by relevant authorities\n• Your explicit consent where required",
            "We primarily operate in Honduras but may use service providers in other countries. All transfers comply with applicable data protection laws."
          ]
        },
        {
          title: "9. Children's Privacy",
          content: [
            "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.",
            "If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information."
          ]
        },
        {
          title: "10. Third-Party Links",
          content: [
            "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.",
            "We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only to information collected by Black Flag Labs."
          ]
        },
        {
          title: "11. Changes to This Privacy Policy",
          content: [
            "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated 'Last Updated' date.",
            "Significant changes will be communicated via email or prominent notice on our website. Your continued use of our services after changes constitutes acceptance of the updated policy."
          ]
        },
        {
          title: "12. Contact Us",
          content: [
            "If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:",
            "Email: blackflaglabs@outlook.com\nWebsite: www.blackflaglabs.dev\nAddress: Tegucigalpa, Honduras",
            "We are committed to resolving privacy concerns promptly and transparently."
          ]
        }
      ],
      gdpr: {
        title: "GDPR Compliance (EU Residents)",
        content: "If you are a resident of the European Union, you have additional rights under the General Data Protection Regulation (GDPR), including the right to lodge a complaint with a supervisory authority. We act as a data controller for the personal information we collect and process."
      },
      ccpa: {
        title: "CCPA Rights (California Residents)",
        content: "California residents have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell personal information."
      }
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última Actualización: Noviembre 2025",
      intro: "En Black Flag Labs, tomamos su privacidad en serio. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web o usa nuestros servicios.",
      sections: [
        {
          title: "1. Información que Recopilamos",
          content: [
            "Recopilamos información que usted nos proporciona directamente, incluyendo:",
            "• Información Personal: Nombre, dirección de correo electrónico, número de teléfono, nombre de la empresa\n• Información del Proyecto: Requisitos del proyecto, detalles comerciales, retroalimentación\n• Información de Pago: Detalles de facturación, historial de transacciones (procesado de forma segura a través de procesadores de pago de terceros)\n• Información Técnica: Dirección IP, tipo de navegador, información del dispositivo, cookies",
            "Recopilamos esta información cuando usted:",
            "• Completa formularios de contacto o solicita cotizaciones\n• Se suscribe a nuestro boletín o servicios\n• Se comunica con nosotros por correo electrónico o chat\n• Usa nuestro sitio web o servicios"
          ]
        },
        {
          title: "2. Cómo Usamos Su Información",
          content: [
            "Usamos la información recopilada para varios propósitos:",
            "• Prestación de Servicios: Para proporcionar, mantener y mejorar nuestros servicios\n• Comunicación: Para responder consultas, enviar actualizaciones y proporcionar soporte al cliente\n• Gestión de Proyectos: Para gestionar proyectos, entregar trabajo y coordinar con clientes\n• Marketing: Para enviar boletines, materiales promocionales y actualizaciones de servicios (con su consentimiento)\n• Análisis: Para entender cómo se usa nuestro sitio web y mejorar la experiencia del usuario\n• Cumplimiento Legal: Para cumplir con obligaciones legales y proteger nuestros derechos",
            "Nunca venderemos su información personal a terceros."
          ]
        },
        {
          title: "3. Compartir y Divulgar Información",
          content: [
            "Podemos compartir su información en las siguientes circunstancias:",
            "• Proveedores de Servicios: Con proveedores externos de confianza que ayudan en nuestras operaciones (proveedores de hosting, procesadores de pago, servicios de correo electrónico)\n• Requisitos Legales: Cuando lo requiera la ley, orden judicial o regulación gubernamental\n• Transferencias Comerciales: En conexión con cualquier fusión, venta o transferencia de nuestro negocio\n• Protección: Para proteger nuestros derechos, propiedad, seguridad o la de otros",
            "Todos los proveedores de servicios externos están obligados contractualmente a mantener la confidencialidad y seguridad de su información."
          ]
        },
        {
          title: "4. Seguridad de Datos",
          content: [
            "Implementamos medidas técnicas y organizativas apropiadas para proteger su información:",
            "• Cifrado SSL/TLS para transmisión de datos\n• Servidores y bases de datos seguros\n• Controles de acceso y autenticación\n• Auditorías y actualizaciones de seguridad regulares\n• Capacitación de empleados en protección de datos",
            "Sin embargo, ningún método de transmisión por internet es 100% seguro. Aunque nos esforzamos por proteger su información, no podemos garantizar seguridad absoluta."
          ]
        },
        {
          title: "5. Cookies y Tecnologías de Seguimiento",
          content: [
            "Usamos cookies y tecnologías de seguimiento similares para mejorar su experiencia:",
            "• Cookies Esenciales: Requeridas para la funcionalidad del sitio web\n• Cookies de Análisis: Para entender el uso del sitio web (Google Analytics)\n• Cookies de Preferencias: Para recordar sus configuraciones y preferencias",
            "Puede controlar las preferencias de cookies a través de la configuración de su navegador. Note que deshabilitar las cookies puede afectar la funcionalidad del sitio web.",
            "Usamos Google Analytics para analizar el tráfico del sitio web. Puede optar por no participar instalando el complemento de exclusión de Google Analytics para navegadores."
          ]
        },
        {
          title: "6. Sus Derechos y Opciones",
          content: [
            "Tiene los siguientes derechos con respecto a su información personal:",
            "• Acceso: Solicitar una copia de su información personal\n• Corrección: Actualizar o corregir información inexacta\n• Eliminación: Solicitar la eliminación de su información (sujeto a obligaciones legales)\n• Exclusión: Cancelar suscripción de comunicaciones de marketing\n• Portabilidad: Solicitar sus datos en formato portable\n• Objeción: Objetar cierto procesamiento de su información",
            "Para ejercer estos derechos, contáctenos en blackflaglabs@outlook.com. Responderemos dentro de 30 días."
          ]
        },
        {
          title: "7. Retención de Datos",
          content: [
            "Retenemos su información durante el tiempo necesario para:",
            "• Cumplir los propósitos descritos en esta política\n• Cumplir con requisitos legales, contables o de informes\n• Resolver disputas y hacer cumplir acuerdos\n• Mantener registros comerciales",
            "Típicamente, retenemos:",
            "• Datos de proyectos de clientes: Durante la duración del proyecto más 3 años\n• Registros de comunicación: 5 años\n• Registros financieros: 7 años (para propósitos fiscales)\n• Datos de marketing: Hasta que cancele la suscripción",
            "Después del período de retención, eliminamos o anonimizamos su información de forma segura."
          ]
        },
        {
          title: "8. Transferencias Internacionales de Datos",
          content: [
            "Su información puede ser transferida y procesada en países distintos al suyo. Nos aseguramos de que existan salvaguardas apropiadas:",
            "• Cláusulas contractuales estándar\n• Decisiones de adecuación por autoridades relevantes\n• Su consentimiento explícito cuando sea requerido",
            "Operamos principalmente en Honduras pero podemos usar proveedores de servicios en otros países. Todas las transferencias cumplen con las leyes de protección de datos aplicables."
          ]
        },
        {
          title: "9. Privacidad de Menores",
          content: [
            "Nuestros servicios no están dirigidos a individuos menores de 18 años. No recopilamos intencionalmente información personal de menores.",
            "Si cree que hemos recopilado información de un menor, contáctenos inmediatamente y tomaremos medidas para eliminar dicha información."
          ]
        },
        {
          title: "10. Enlaces de Terceros",
          content: [
            "Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios externos.",
            "Le recomendamos que revise las políticas de privacidad de cualquier sitio de terceros que visite. Esta Política de Privacidad se aplica solo a la información recopilada por Black Flag Labs."
          ]
        },
        {
          title: "11. Cambios a Esta Política de Privacidad",
          content: [
            "Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios se publicarán en esta página con una fecha de 'Última Actualización' actualizada.",
            "Los cambios significativos se comunicarán por correo electrónico o aviso destacado en nuestro sitio web. Su uso continuo de nuestros servicios después de los cambios constituye la aceptación de la política actualizada."
          ]
        },
        {
          title: "12. Contáctenos",
          content: [
            "Si tiene preguntas, inquietudes o solicitudes con respecto a esta Política de Privacidad o su información personal, contáctenos:",
            "Email: blackflaglabs@outlook.com\nSitio web: www.blackflaglabs.dev\nDirección: Tegucigalpa, Honduras",
            "Estamos comprometidos a resolver las preocupaciones de privacidad de manera rápida y transparente."
          ]
        }
      ],
      gdpr: {
        title: "Cumplimiento de GDPR (Residentes de la UE)",
        content: "Si es residente de la Unión Europea, tiene derechos adicionales bajo el Reglamento General de Protección de Datos (GDPR), incluido el derecho a presentar una queja ante una autoridad de supervisión. Actuamos como controlador de datos para la información personal que recopilamos y procesamos."
      },
      ccpa: {
        title: "Derechos CCPA (Residentes de California)",
        content: "Los residentes de California tienen derechos específicos bajo la Ley de Privacidad del Consumidor de California (CCPA), incluido el derecho a saber qué información personal se recopila, el derecho a eliminar información personal y el derecho a optar por no vender información personal. No vendemos información personal."
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

        {/* Intro */}
        <div className="mb-12 scroll-reveal card">
          <p className="text-lg leading-relaxed text-fg-secondary">
            {t.intro}
          </p>
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

        {/* GDPR & CCPA */}
        <div className="mt-12 space-y-6">
          <div className="scroll-reveal card bg-gradient-to-r from-gradient-start/10 to-gradient-end/10">
            <h3 className="text-xl font-bold mb-3 text-accent">
              {t.gdpr.title}
            </h3>
            <p className="text-fg-secondary leading-relaxed">
              {t.gdpr.content}
            </p>
          </div>

          <div className="scroll-reveal card bg-gradient-to-r from-gradient-start/10 to-gradient-end/10">
            <h3 className="text-xl font-bold mb-3 text-accent">
              {t.ccpa.title}
            </h3>
            <p className="text-fg-secondary leading-relaxed">
              {t.ccpa.content}
            </p>
          </div>
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