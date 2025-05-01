export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  gallery: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  from: string;
  to: string;
  description: string;
}

export interface Experience {
  company: string;
  position: string;
  from: string;
  to: string;
  description: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
}