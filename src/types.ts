export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge?: string;
  features: string[];
}

export interface RoomItem {
  id: string;
  title: string;
  capacity: string;
  description: string;
  image: string;
  amenities: string[];
  priceNote: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'admission' | 'care' | 'pricing' | 'visits';
}

export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  email: string;
  address: string;
  district: string;
  city: string;
  postalCode: string;
  domain: string;
  startingPrice: string;
  bannerActive: boolean;
  bannerText: string;
}

export interface RoutineItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}
