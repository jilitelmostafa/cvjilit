
export interface Experience {
  period: string;
  company: string;
  role: string;
  description: string[];
  ref?: string;
}

export interface Education {
  period: string;
  title: string;
  institution: string;
  details?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  icon: string;
}

export interface Training {
  period: string;
  title: string;
  institution: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
}
