export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin';
  ariaLabel: string;
}

export interface InterestItem {
  title: string;
  description: string;
}

export interface AboutData {
  heading: string;
  subheading: string;
  paragraphs: string[];
  interests: string[];
}

export type ProficiencyLevel = 'Comfortable' | 'Working With' | 'Exploring';

export type SkillCategory =
  | 'All'
  | 'Programming Languages'
  | 'Frontend Development'
  | 'Backend Development'
  | 'Databases'
  | 'Development Tools';

export interface SkillItem {
  id: string;
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  description: string;
  proficiency: ProficiencyLevel;
  needsReview?: boolean;
}

export interface SkillsData {
  eyebrow: string;
  heading: string;
  description: string;
  categories: SkillCategory[];
  items: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  featured: boolean;
  status: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProjectsData {
  eyebrow: string;
  heading: string;
  description: string;
  items: ProjectItem[];
}

export interface ExperienceData {
  eyebrow: string;
  heading: string;
  description: string;
  emptyState: {
    title: string;
    description: string;
  };
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  expectedGraduation: string;
}

export interface EducationData {
  eyebrow: string;
  heading: string;
  item: EducationItem;
}

export interface AchievementCategory {
  id: string;
  number: string;
  title: string;
  status: string;
}

export interface AchievementsData {
  eyebrow: string;
  heading: string;
  subtitle: string;
  categories: AchievementCategory[];
}

export interface GithubActivityData {
  eyebrow: string;
  heading: string;
  description: string;
  profileUrl: string;
  username: string;
}

export interface CodingProfileItem {
  id: string;
  name: string;
  url: string;
  handle: string;
  iconType: 'leetcode' | 'hackerrank' | 'codechef' | 'codeforces';
}

export interface CodingProfilesData {
  eyebrow: string;
  heading: string;
  description: string;
  profiles: CodingProfileItem[];
}

export interface ResumeData {
  eyebrow: string;
  heading: string;
  description: string;
  fileUrl: string | null;
  placeholderMessage: string;
}

export interface ContactData {
  eyebrow: string;
  heading: string;
  description: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface ProfileData {
  fullName: string;
  displayName: string;
  brandLogo: string;
  headlinePrimary: string;
  headlineSecondary: string;
  degree: string;
  college: string;
  graduationYear: string;
  bio: string;
  about: AboutData;
  skills: SkillsData;
  projects: ProjectsData;
  experience: ExperienceData;
  education: EducationData;
  achievements: AchievementsData;
  githubActivity: GithubActivityData;
  codingProfiles: CodingProfilesData;
  resume: ResumeData;
  contact: ContactData;
  socials: SocialLink[];
  navItems: NavItem[];
}
