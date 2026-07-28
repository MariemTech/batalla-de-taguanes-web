export interface NavItem {
  label: string;
  href: string;
}

export interface EducationalLevel {
  id: string;
  name: string;
  ageRange: string;
  badge: string;
  description: string;
  ratio: string;
  objectives: string[];
  keyActivities: string[];
  color: {
    bg: string;
    border: string;
    text: string;
    pill: string;
  };
  iconName: string;
}

export interface MethodologyPillar {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights: string[];
  bgAccent: string;
}

export interface RecrearteWorkshop {
  id: string;
  title: string;
  subtitle: string;
  age: string;
  description: string;
  tags: string[];
  colorTheme: {
    bg: string;
    border: string;
    accent: string;
  };
  icon: string;
}

export interface Specialist {
  role: string;
  title: string;
  description: string;
  focusArea: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  yearsInCenter: string;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'admision' | 'pedagogia' | 'seguridad' | 'servicios';
}

export interface VisitBookingData {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  selectedDate: string;
  selectedTimeSlot: string;
  notes?: string;
}
