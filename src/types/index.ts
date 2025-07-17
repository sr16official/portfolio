export interface Experience {
  company: string;
  role: string;
  duration: string;
  type: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  features?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  platform: string;
  count: string;
  description: string;
  link: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
}