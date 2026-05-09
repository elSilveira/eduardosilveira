export interface SkillCategory {
  title: string;
  skills: Array<{ name: string; level: number }>;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'TypeScript', level: 95 },
      { name: 'Python', level: 60 },
      { name: 'SQL', level: 80 },
      { name: 'C#', level: 70 },
      { name: 'Dart', level: 65 },
      { name: 'HTML5 / CSS3 / SASS', level: 95 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js (13/14)', level: 92 },
      { name: 'Redux / Zustand / Zod', level: 88 },
      { name: 'Angular / RxJS / NgRx', level: 90 },
      { name: 'Vue.js', level: 65 },
      { name: 'Tailwind CSS / SASS', level: 90 },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'REST API Design', level: 88 },
      { name: 'GraphQL', level: 82 },
      { name: '.NET Core', level: 70 },
      { name: 'Backend Services & Integrations', level: 84 },
    ],
  },
  {
    title: 'AI / LLM Engineering',
    skills: [
      { name: 'RAG / Context Retrieval', level: 84 },
      { name: 'LLM Integrations / OpenAI', level: 84 },
      { name: 'MCP / Tool Calling', level: 80 },
      { name: 'LangChain / AI Agents', level: 78 },
      { name: 'Prompt Engineering', level: 84 },
      { name: 'Machine Learning / Forecasting', level: 72 },
    ],
  },
  {
    title: 'Data, Cloud & Mobile',
    skills: [
      { name: 'PostgreSQL / MySQL', level: 80 },
      { name: 'MongoDB / Data Modeling', level: 74 },
      { name: 'AWS S3 / Lambda / API Gateway', level: 75 },
      { name: 'Docker / Firebase', level: 72 },
      { name: 'React Native / Flutter / Ionic', level: 78 },
    ],
  },
  {
    title: 'Quality & Workflow',
    skills: [
      { name: 'Git / CI/CD', level: 90 },
      { name: 'Jest / Cypress', level: 85 },
      { name: 'ESLint / Prettier', level: 88 },
      { name: 'Performance Optimization', level: 86 },
      { name: 'AI-Assisted Development', level: 86 },
    ],
  },
];
