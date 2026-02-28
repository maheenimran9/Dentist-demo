
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

// Added React import to satisfy React.FC type definition
const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Al-Awan Dental Clinic`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default SEO;
