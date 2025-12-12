export interface Doctor {
  id: number;
  name: string;
  gender: 'male' | 'female';
  specialization: string;
  degrees: string[];
  experience: {
    total: number;
    asSpecialist: number;
  };
  registration: {
    number: string;
    council: string;
    year: number;
  };
  education: Education[];
  services: string[];
  hospital: Hospital;
  schedule: Schedule[];
  contact: Contact;
  consultationFee: number;
  imageUrl: string;
  description: string;
  qna?: QuestionAnswer[];
  featured?: boolean;
  rating: number;
}

export interface Education {
  degree: string;
  institution: string;
  year: number;
}

export interface Hospital {
  name: string;
  address: string;
  landmark: string;
  city: string;
  rating: number;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Schedule {
  day: string;
  timing: string;
}

export interface Contact {
  phone: string;
  email: string;
  whatsapp?: string; // Make it optional with '?'
}

export interface QuestionAnswer {
  question: string;
  answer: string;
}