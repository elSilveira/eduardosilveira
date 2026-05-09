# Personal Projects Design

## Goal

Add a visible Personal Projects area to the portfolio without making the CV homepage too dense. The homepage will show a compact project grid between Experience and Education, while a dedicated projects page will carry deeper explanations for each project.

## Scope

Include the following repositories:

- `https://github.com/elSilveira/cge`
- `https://github.com/elSilveira/semanticir`
- `https://github.com/elSilveira/helpai`
- `https://github.com/elSilveira/genesis-protocol`
- `https://github.com/elSilveira/genesis-chat`
- `https://github.com/elSilveira/dolarotomorrow`
- `https://github.com/elSilveira/advanced-http-request-interceptor`
- `https://github.com/elSilveira/autoinvoice`
- `https://github.com/elSilveira/meeting-copilot`

CGE details are available from the local project at `/home/duzitz/source/cge`. It is a Capability Graph Engine for measuring human capability convergence and role/candidate matching, with FastAPI APIs, graph traversal, source-aware matching, resume/LinkedIn/GitHub analysis, authentication, quotas, Docker deployment, and a broad Python test suite.

## Architecture

Project content will live in one shared data module so the homepage snippets and detail page use the same source of truth. The data model will include name, repository URL, optional homepage URL, status, category, summary, detailed description, technical focus, impact, stack tags, and featured flag.

The homepage will import this data into a new `PersonalProjectsSection` component. The dedicated route will use a new `Projects` page registered in the existing React Router setup at `/projects`.

## Homepage Section

Place `PersonalProjectsSection` between `ExperienceSection` and `EducationSection`. The section will use the existing `SectionHeading`, scroll animation hook, dark card styling, and tag language already used by Experience and Skills.

The grid will show concise snippets: project name, category/status, one-line summary, a small set of stack tags, a GitHub link, and a detail link. A section-level CTA will navigate to `/projects`.

## Projects Page

The `/projects` page will provide stronger understanding for each project. Each card will explain:

- what the project is
- the technical focus
- why it matters
- primary technologies
- GitHub and homepage links when available

The page will include a simple top navigation action back to the homepage and should preserve the existing visual identity.

## Navigation

Add Projects to the navbar. On the homepage it scrolls to `#projects`. From the dedicated page, the primary navigation back to projects should use the portfolio base path and project anchor.

## Error Handling

For unavailable repositories, render a disabled-looking status badge and avoid implying that the GitHub link has verified source details. Keep the URL visible as requested.

## Testing And Verification

Run the existing test/build checks after implementation. Start the local Vite app and verify the homepage section and `/projects` route visually on desktop and mobile-sized viewports.
