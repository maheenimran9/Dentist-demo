
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  duration: string;
  precare: string;
  aftercare: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ClinicDetails {
  name: string;
  address: string;
  doctor: string;
  ceo: string;
  phone: string;
  email: string;
  location: {
    lat: number;
    lng: number;
  };
}
