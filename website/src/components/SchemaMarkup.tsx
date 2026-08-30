import { siteData } from '../data';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GroceryStore",
    "name": siteData.businessName,
    "telephone": siteData.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opp. Football Ground, Dwaraka Vihar",
      "addressLocality": "Jagjeetpur, Haridwar",
      "addressRegion": "Uttarakhand",
      "postalCode": "249404",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "06:00",
        "closes": "23:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
