# Jay Shrivastava — Personal Portfolio

## Goal

Build a premium personal portfolio for Jay Shrivastava, a Frontend Engineer
with 3+ years of experience building production-grade React and TypeScript
applications.

The portfolio has two purposes:

1. Present Jay professionally for Senior Frontend / SDE2 opportunities.
2. Provide an optional freelance mode that can be enabled or disabled.

Freelancing is secondary to the professional engineering profile.

## Positioning

Primary positioning:

"Frontend Engineer building scalable, production-grade web applications."

Core technologies:

- React
- TypeScript
- JavaScript
- Next.js
- GraphQL
- Design Systems
- Enterprise application architecture

Do NOT position Jay as a generic "web developer".

## Website Sections

### Hero

Include:

- Strong headline
- Short professional summary
- Technology/engineering focus
- Primary CTA: View Work
- Secondary CTA: Contact Me

When freelance mode is enabled, the secondary CTA can become:
"Start a Project"

### About

Explain Jay's engineering background and focus on building maintainable,
scalable frontend applications.

Avoid generic phrases such as:
- passionate developer
- coding enthusiast
- turning coffee into code
- lifelong learner

### Experience

Show professional experience with emphasis on engineering impact.

Current role:
Intellicar

Previous experience should be represented using information from Jay's
resume without inventing achievements.

Do not expose confidential company information.

### Selected Work

Highlight meaningful engineering work.

Each project should contain:

- Name
- Description
- Problem/context
- Engineering contribution
- Technologies
- Relevant outcomes where information is available

Avoid fake metrics.

### Skills

Organize skills by category instead of displaying a giant icon wall.

Categories:

Frontend
Architecture
Data & APIs
Testing & Quality
Backend
Tools

Backend skills should be presented honestly as an expanding skill area,
not exaggerated as years of professional backend experience.

### Freelance Mode

The website must support a global freelance availability state.

When enabled:

- Show "Available for selected freelance projects"
- Show freelance CTA
- Show freelance services section

When disabled:

- Do not show the freelance CTA prominently
- Do not show the freelance services section
- Portfolio should still look completely intentional

The freelance mode must eventually be controlled from an admin interface
without requiring a code change or redeployment.

For the MVP, use a temporary configuration value.

### Contact

Provide a professional contact section.

Include:

- Email
- LinkedIn
- GitHub
- Freelance enquiry CTA when freelance mode is enabled

Do not expose unnecessary personal information.

## Freelance Services

When freelance mode is enabled, position services around:

- Business websites
- Admin dashboards
- Internal tools
- Data-heavy web applications
- SaaS applications
- Full-stack web applications

The messaging should emphasize engineering and complete product delivery,
not cheap website development.

## Design Direction

The design should feel:

- Premium
- Minimal
- Technical
- Modern
- Confident
- Professional

Avoid:

- Generic developer portfolio templates
- Excessive gradients
- Excessive glassmorphism
- Skill percentage bars
- Huge walls of text
- Excessive animations
- Cartoon developer illustrations

Use strong typography, whitespace, hierarchy and subtle motion.

The portfolio should feel appropriate for someone targeting strong
product companies as well as serious freelance clients.

## Technical Requirements

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui where useful
- Server Components by default
- Client Components only when interaction requires them
- Responsive design
- Accessible semantic HTML
- SEO metadata
- OpenGraph metadata
- sitemap
- robots.txt

Do not introduce unnecessary libraries.

## Architecture

Use a clean feature-oriented structure.

Prefer:

src/
  app/
  components/
  features/
  lib/
  data/
  types/

Keep content/data separate from presentation where practical.

Avoid creating a large abstraction layer before it is needed.

## Important

Do not implement the database, authentication or admin panel yet.

First build the complete portfolio UI and establish the visual language.

After the UI is approved, we will add:

1. PostgreSQL
2. Prisma
3. Contact submissions
4. Admin authentication
5. Content management
6. Freelance ON/OFF control
7. Production deployment
