# Personal Projects Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a homepage Personal Projects snippet grid and a dedicated `/projects` detail page.

**Architecture:** Store project metadata in one shared TypeScript module. Render compact cards on the homepage and richer cards on the projects page from that same data. Register the new route in the existing React Router setup.

**Tech Stack:** React 18, TypeScript, Vite, React Router, Tailwind CSS, lucide-react, Vitest.

---

## File Structure

- Create `src/data/personalProjects.ts`: canonical project data and derived helpers.
- Create `src/components/cv/PersonalProjectsSection.tsx`: homepage teaser grid between Experience and Education.
- Create `src/pages/Projects.tsx`: dedicated detail page.
- Create `src/data/personalProjects.test.ts`: data integrity tests for route/card rendering assumptions.
- Modify `src/pages/Index.tsx`: insert the section.
- Modify `src/App.tsx`: add `/projects`.
- Modify `src/components/cv/Navbar.tsx`: add Projects nav item and support route-aware navigation.

## Tasks

### Task 1: Shared Project Data

**Files:**
- Create: `src/data/personalProjects.ts`
- Test: `src/data/personalProjects.test.ts`

- [ ] **Step 1: Write the failing data integrity test**

Create tests that assert all 9 requested projects are present, every project has a summary and stack tags, featured projects exist for the homepage, and CGE has a real local-analysis description instead of an unavailable fallback.

- [ ] **Step 2: Run the focused test**

Run: `npm run test -- src/data/personalProjects.test.ts`

Expected: fail because the data module does not exist.

- [ ] **Step 3: Implement the data module**

Define `PersonalProject`, `personalProjects`, `featuredPersonalProjects`, and `projectCount` with data for CGE, SemanticIR, HelpAI, Genesis Protocol, Genesis Chat, Dolar Tomorrow, Advanced HTTP Request Interceptor, AutoInvoice, and Meeting Copilot.

- [ ] **Step 4: Run the focused test again**

Run: `npm run test -- src/data/personalProjects.test.ts`

Expected: pass.

### Task 2: Homepage Section

**Files:**
- Create: `src/components/cv/PersonalProjectsSection.tsx`
- Modify: `src/pages/Index.tsx`

- [ ] **Step 1: Build `PersonalProjectsSection`**

Render `featuredPersonalProjects` as a responsive grid with project name, category, short summary, stack tags, and GitHub/details actions. Use existing `SectionHeading`, `useScrollAnimation`, Tailwind card styling, and lucide icons.

- [ ] **Step 2: Insert section**

Place `PersonalProjectsSection` after `ExperienceSection` and before `EducationSection`.

- [ ] **Step 3: Build check**

Run: `npm run build`

Expected: TypeScript and Vite build pass.

### Task 3: Projects Detail Page And Navigation

**Files:**
- Create: `src/pages/Projects.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/cv/Navbar.tsx`

- [ ] **Step 1: Build `/projects` page**

Render all projects with richer copy: overview, technical focus, why it matters, stack tags, GitHub link, and homepage link when present.

- [ ] **Step 2: Add route**

Register `<Route path="/projects" element={<Projects />} />` inside the existing basename-aware router.

- [ ] **Step 3: Update navigation**

Add Projects to the navbar. On the homepage it scrolls to `#projects`; from other routes it navigates to `/#projects`.

- [ ] **Step 4: Verify full app**

Run: `npm run test`, `npm run build`, and a local Vite server. Verify the homepage grid and `/projects` route visually.
