export interface ProjectCaseStudy {
  overview: {
    background: string;
    target: string;
    nature: string;
    period: string;
    myRole: string;
  };
  problem: {
    statement: string;
    whyItMatters: string;
  };
  myContribution: string[];
  designProcess: {
    step: string;
    title: string;
    description: string;
    keyDecisions?: string[];
  }[];
  deliverables: string[];
  limitationsAndReflection: {
    simulatedOrUnverified: string[];
    futureImprovements: string[];
  };
}

export interface Project {
  id: string;
  title: string;
  englishTitle: string;
  category: string;
  typeCategory: 'AI Applications' | 'Product Design' | 'Business Analysis';
  projectGroup: 'featured' | 'more';
  isCompleted: boolean;
  nature: string;
  natureNote?: string;
  subtitle: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  pdfPath?: string;
  authors?: string;
  imagePath: string;
  badgeText: string;
  type: 'live-demo' | 'document-study';
  caseStudy: ProjectCaseStudy;
}

export interface SkillCategory {
  title: string;
  englishTitle: string;
  description: string;
  skills: {
    name: string;
    detail: string;
  }[];
}

export interface EducationItem {
  institution: string;
  englishInstitution: string;
  degree: string;
  period: string;
  status: string;
  note?: string;
  focus: string[];
}

export interface InternshipItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectExperienceSummaryItem {
  id?: string;
  title: string;
  period: string;
  role: string;
  summary: string;
  linkToProjectId?: string;
}

export interface ResumeData {
  name: string;
  englishName: string;
  targetRoles: string[];
  email: string;
  github: string;
  githubUsername: string;
  resumePdfPath?: string;
  education: EducationItem[];
  internships: InternshipItem[];
  projectExperienceSummaries: ProjectExperienceSummaryItem[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export type NavTab = 'home' | 'projects' | 'about' | 'resume' | 'contact';
