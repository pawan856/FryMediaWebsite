export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  companyUrl?: string;
  image?: string;
  published: boolean;
}

export interface ClientLogo {
  name: string;
  src: string;
  alt: string;
  approved: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  url?: string;
  verified: boolean;
}

/** These collections remain empty until relationships, permissions, or credentials are verified. */
export const testimonials: Testimonial[] = [];
export const clientLogos: ClientLogo[] = [];
export const certifications: Certification[] = [];