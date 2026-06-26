export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "SmileCare Dental",
    description: "Professional dental clinic in Algiers offering cleaning, whitening, implants, orthodontics, and more.",
    url: "https://smilecare-dental.com",
    email: "3iikStudio@proton.me",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Algiers",
      addressCountry: "DZ",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "À quelle fréquence dois-je consulter le dentiste ?",
        acceptedAnswer: { "@type": "Answer", text: "Nous recommandons une visite de contrôle tous les 6 mois." },
      },
      {
        "@type": "Question",
        name: "Le blanchiment dentaire est-il douloureux ?",
        acceptedAnswer: { "@type": "Answer", text: "Le blanchiment professionnel est généralement indolore." },
      },
      {
        "@type": "Question",
        name: "Proposez-vous des soins d'urgence ?",
        acceptedAnswer: { "@type": "Answer", text: "Oui, nous réservons des créneaux d'urgence chaque jour." },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
