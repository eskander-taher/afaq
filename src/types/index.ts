export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  details?: {
    categories?: Array<{
      name: string;
      items: string[];
    }>;
    activities?: string[];
    shows?: string[];
    experiences?: string[];
    attractions?: string[];
    services?: string[];
  };
}

export interface TestimonialType {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface StatType {
  id: number;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface DestinationType {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface NavLinkType {
  id: number;
  label: string;
  href: string;
}