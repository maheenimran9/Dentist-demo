
import { ClinicDetails, Service, Testimonial, FAQItem } from './types';

export const CLINIC_INFO: ClinicDetails = {
  name: "Al-Awan Dental Clinic & Dental Laboratory",
  address: "Hakim Dad Road near Bilal Masjid opposite Malik Sohaib Car Parking, Sohan Islamabad 44000",
  doctor: "Dr. Nazir Ahmad Malik",
  ceo: "Malik Abdur Rehman Awan",
  phone: "+92 000 000 0000", // Placeholder
  email: "info@alawandental.com",
  location: {
    lat: 33.6738,
    lng: 73.1095
  }
};

export const SERVICES: Service[] = [
  {
    id: "general",
    title: "General Dentistry",
    description: "Foundational oral health care focused on prevention, early diagnosis, and maintenance of teeth and gums.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Early detection of decay and periodontal disease",
      "Professional-grade removal of calculus and bacterial plaque",
      "Comprehensive oral cancer screening and risk assessment",
      "Preservation of natural tooth structure through preventive care"
    ],
    duration: "45 - 60 minutes",
    precare: "Ensure you have a list of any current medications. Avoid heavy meals 1 hour before cleaning to prevent discomfort.",
    aftercare: "Refrain from consuming highly acidic or staining foods for 2 hours. Resume normal brushing and flossing twice daily."
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Advanced surgical replacement of missing teeth using biocompatible titanium posts and custom-milled crowns.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Prevents progressive jawbone resorption (bone loss)",
      "Restores 100% of natural biting and chewing force",
      "Eliminates the need to modify adjacent healthy teeth",
      "Provides a permanent, non-slip alternative to dentures"
    ],
    duration: "60 - 120 minutes per stage",
    precare: "Requires digital X-rays or CBCT scans. Patients on blood thinners must consult their physician before the procedure.",
    aftercare: "Stick to a liquid or soft-food diet for 7 days. Apply cold compresses to manage swelling. Do not use straws or smoke for 2 weeks."
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Professional-grade chemical brightening using safe, high-concentration bleaching agents for immediate results.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Penetrates deep extrinsic and intrinsic enamel stains",
      "Visible results of 5-8 shades lighter in a single session",
      "Safe, controlled application prevents gum irritation",
      "Long-lasting brightness with minimal sensitivity"
    ],
    duration: "60 - 90 minutes",
    precare: "A professional scaling and polishing is required 7 days prior to ensure the whitening gel reaches the enamel surface evenly.",
    aftercare: "Follow the 'White Diet' (avoid coffee, tea, turmeric, red wine) for 48 hours. Use a sensitivity-reducing toothpaste if needed."
  },
  {
    id: "braces",
    title: "Braces & Orthodontics",
    description: "Correction of malocclusions and tooth misalignment using traditional or ceramic orthodontic systems.",
    image: "https://images.unsplash.com/photo-1593054941019-21b5b4e72365?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Corrects overcrowded teeth and irregular spacing",
      "Resolves overbites, underbites, and crossbites",
      "Improves long-term jaw joint (TMJ) health and function",
      "Enhances overall facial symmetry and profile"
    ],
    duration: "45 mins (Initial) / 20 mins (Adjustments)",
    precare: "Complete dental hygiene checkup is mandatory. Any existing cavities must be filled before appliance placement.",
    aftercare: "Clean around brackets after every meal. Avoid sticky candies and hard nuts. Wear elastics as directed for progress."
  },
  {
    id: "rootcanal",
    title: "Root Canal Treatment",
    description: "Precision endodontic therapy to eliminate infection within the tooth pulp and save the natural tooth.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Immediate relief from acute dental pain and pressure",
      "Eliminates the need for tooth extraction",
      "Prevents the spread of abscess and infection to the jawbone",
      "Maintains natural alignment by preventing tooth shifting"
    ],
    duration: "60 - 90 minutes",
    precare: "Take prescribed antibiotics if an infection is active. Eat a normal meal unless conscious sedation is requested.",
    aftercare: "Avoid biting on the treated tooth until a final crown is placed. Expect mild sensitivity for 3-5 days; manage with Ibuprofen."
  },
  {
    id: "lab",
    title: "Dental Lab Services",
    description: "Bespoke fabrication of prosthetic appliances including zirconia crowns, flexible dentures, and cast partials.",
    image: "https://images.unsplash.com/photo-1598256991794-2791ac4d6d6a?auto=format&fit=crop&q=80&w=800",
    benefits: [
      "Direct communication between dentist and technician for 100% accuracy",
      "Use of premium, medical-grade Zirconia and biocompatible resins",
      "Significantly reduced turnaround time for emergency repairs",
      "Superior aesthetics through custom shade-matching on-site"
    ],
    duration: "15 - 30 minutes (Impressions)",
    precare: "Our clinicians will prepare the target teeth and take high-precision digital or traditional impressions.",
    aftercare: "New appliances may require a 48-hour adjustment period. Schedule a follow-up if you experience any pressure points."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmad Khalid",
    location: "Islamabad",
    quote: "Highly professional experience. Dr. Nazir explained everything clearly, and the lab work for my crown was perfect and fits comfortably.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t2",
    name: "Sara Ali",
    location: "Rawalpindi",
    quote: "The best dental clinic in Sohan. Very clean facility and the staff is very welcoming. My braces treatment is showing visible results already.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t3",
    name: "Usman Khan",
    location: "Islamabad",
    quote: "Efficient and painless root canal. I was very nervous but the team made me feel at ease. The modern equipment is really impressive.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Do I need an appointment, or can I walk in?",
    answer: "While we do accommodate walk-ins for emergencies, we highly recommend booking an appointment in advance to ensure minimal waiting time and the dedicated attention of our clinical team."
  },
  {
    id: "faq2",
    question: "What makes your dental laboratory services unique?",
    answer: "We feature a full-scale in-house dental laboratory led by Senior Technician Malik Abdur Rehman Awan. This allows for direct communication between the dentist and the lab, resulting in faster turnarounds and significantly more accurate color matching for crowns and bridges."
  },
  {
    id: "faq3",
    question: "Is dental treatment painful?",
    answer: "At Al-Awan Dental, we prioritize patient comfort. We use modern local anesthesia techniques and advanced equipment to ensure that most procedures, including root canals and extractions, are virtually painless."
  },
  {
    id: "faq4",
    question: "How often should I visit for a checkup?",
    answer: "For optimal oral health, we recommend a professional cleaning and checkup every six months. This allows us to detect potential issues early before they become complex and expensive to treat."
  },
  {
    id: "faq5",
    question: "Do you offer emergency dental care?",
    answer: "Yes, we provide urgent dental care for patients experiencing severe pain, tooth fractures, or infections. Please call our clinic immediately if you have a dental emergency."
  },
  {
    id: "faq6",
    question: "What are your payment and pricing policies?",
    answer: "We strive to offer high-quality care at competitive and transparent prices. We provide detailed cost estimates before starting any treatment. Payments are generally accepted at the time of service."
  }
];
