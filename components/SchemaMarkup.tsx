
import React from 'react';
import { CLINIC_INFO } from '../constants';

const SchemaMarkup: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": CLINIC_INFO.name,
    "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    "@id": "",
    "url": window.location.origin,
    "telephone": CLINIC_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hakim Dad Road near Bilal Masjid",
      "addressLocality": "Sohan, Islamabad",
      "postalCode": "44000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": CLINIC_INFO.location.lat,
      "longitude": CLINIC_INFO.location.lng
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default SchemaMarkup;
