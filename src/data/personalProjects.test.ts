import { describe, expect, it } from 'vitest';
import {
  featuredPersonalProjects,
  personalProjects,
  projectCount,
} from './personalProjects';

const requestedSlugs = [
  'cge',
  'semanticir',
  'helpai',
  'genesis-protocol',
  'genesis-chat',
  'dolarotomorrow',
  'advanced-http-request-interceptor',
  'autoinvoice',
  'meeting-copilot',
];

describe('personalProjects', () => {
  it('contains every requested personal project exactly once', () => {
    expect(personalProjects.map((project) => project.slug).sort()).toEqual(
      requestedSlugs.sort(),
    );
    expect(projectCount).toBe(9);
  });

  it('has enough metadata to render homepage and detail cards', () => {
    for (const project of personalProjects) {
      expect(project.name.length).toBeGreaterThan(1);
      expect(project.summary.length).toBeGreaterThan(24);
      expect(project.detail.length).toBeGreaterThan(48);
      expect(project.technicalFocus.length).toBeGreaterThan(24);
      expect(project.impact.length).toBeGreaterThan(24);
      expect(project.tags.length).toBeGreaterThanOrEqual(3);
      expect(project.repositoryUrl).toMatch(/^https:\/\/github\.com\/elSilveira\//);
    }
  });

  it('uses local CGE analysis instead of a GitHub unavailable fallback', () => {
    const cge = personalProjects.find((project) => project.slug === 'cge');

    expect(cge?.summary).toContain('capability');
    expect(cge?.technicalFocus).toContain('FastAPI');
    expect(cge?.tags).toEqual(
      expect.arrayContaining(['Python', 'FastAPI', 'Graph Modeling']),
    );
    expect(cge?.status).toBe('Local analysis');
  });

  it('selects a focused subset for the homepage grid', () => {
    expect(featuredPersonalProjects.length).toBeGreaterThanOrEqual(6);
    expect(featuredPersonalProjects.length).toBeLessThan(personalProjects.length);
    expect(featuredPersonalProjects.every((project) => project.featured)).toBe(true);
  });

  it('places AI skills on the projects that actually demonstrate them', () => {
    const bySlug = Object.fromEntries(
      personalProjects.map((project) => [project.slug, project]),
    );

    expect(bySlug.semanticir.tags).toEqual(
      expect.arrayContaining([
        'RAG',
        'LLM',
        'MCP',
        'AI Agents',
        'Prompt Engineering',
      ]),
    );
    expect(bySlug.helpai.tags).toEqual(
      expect.arrayContaining(['LLM', 'Prompt Engineering', 'AI Agents']),
    );
    expect(bySlug.dolarotomorrow.tags).toEqual(
      expect.arrayContaining(['Machine Learning']),
    );
    expect(bySlug['meeting-copilot'].tags).toEqual(
      expect.arrayContaining(['LLM', 'Prompt Engineering']),
    );
  });
});
