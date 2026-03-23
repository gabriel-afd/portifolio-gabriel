export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Project {
  name: string;
  description: string;
  icon: string;
  image: string;
  observation: string,
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  group: string;
  skills: Skill[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Education {
  period: string;
  course: string;
  institution: string;
  status: string;
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string;
}
