import { describe, expect, it } from 'vitest';
import { skillCategories } from './SkillsSection';

describe('skillCategories', () => {
  it('reflects the AI skills used across the portfolio', () => {
    const aiSkills = skillCategories.find(
      (category) => category.title === 'AI / LLM Engineering',
    )?.skills.map((skill) => skill.name);

    expect(aiSkills).toEqual(
      expect.arrayContaining([
        'RAG / Context Retrieval',
        'LLM Integrations / OpenAI',
        'MCP / Tool Calling',
        'LangChain / AI Agents',
        'Prompt Engineering',
        'Machine Learning / Forecasting',
      ]),
    );
  });
});
