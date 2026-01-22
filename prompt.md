# How to Prompt Claude to Build TailShell Website

## Overview
You have two key files:
1. **tailshell-project-plan.md** - Comprehensive 15,000+ word specification (rename to `project_spec.md`)
2. **Claude.md** - Condensed developer reference (6,000 words)

This guide shows you exactly how to prompt Claude to build your project.

---

## Scenario 1: Starting Fresh (Recommended)

### Initial Prompt

```
I need you to build a Next.js website for TailShell. Please read the Claude.md file first to understand all requirements, then set up the project and start building.

The Claude.md file contains:
- Complete design system (colors, typography, spacing)
- All 7 sections with exact copy
- Technical specifications
- Component architecture

Start by:
1. Reading Claude.md thoroughly
2. Setting up the Next.js project with all dependencies
3. Configuring Tailwind with our custom colors
4. Installing shadcn/ui components we need
5. Creating the project structure

After setup, ask me which section to build first, or proceed with the Hero section.
```

### Why This Works
- ✅ Gives Claude the **focused reference** (Claude.md)
- ✅ Clear **starting point** (setup)
- ✅ Lets Claude **ask questions** if needed
- ✅ Establishes **iterative workflow**

---

## Scenario 2: Building Section by Section

### Prompt Template

```
I want to build the [SECTION NAME] section of the TailShell website.

Please reference Claude.md for:
- The exact copy and content
- Design specifications (colors, spacing, typography)
- Component requirements
- Animation specs

Build the complete [SECTION NAME] section including:
- The component file
- All styling with Tailwind
- Scroll animations with Framer Motion
- Responsive design (mobile + desktop)
- Any sub-components needed

When done, show me the code and explain key decisions.
```

### Example - Building Hero Section

```
I want to build the Hero section of the TailShell website.

Please reference Claude.md - specifically the "Section 1: Hero Section" part.

Build the Hero.tsx component including:
- Full viewport height background
- Video background (autoplay, muted, loop)
- Text overlay with gradient
- Headline: "Protect. Perform. Anywhere."
- Subheadline and two CTA buttons
- Framer Motion entrance animations
- Responsive design

Use the exact copy from Claude.md and follow the design system (colors, typography, spacing).
```

---

## Scenario 3: Full Build in One Go (Advanced)

### Prompt for Experienced Developers

```
Build the complete TailShell website based on Claude.md.

Read Claude.md thoroughly, then build all sections in order:
1. Project setup (Next.js + Tailwind + shadcn/ui + Framer Motion)
2. Navigation component (sticky, transparent → solid)
3. Hero section (video background, CTAs)
4. Use Cases section (5-card grid with accent colors)
5. Product Details section (split layout, specs)
6. Why Vendors section (6-benefit cards)
7. Testimonials section (3 testimonials)
8. Contact section (form with validation)
9. Footer

For each section:
- Use exact copy from Claude.md
- Follow design system (colors, typography, spacing)
- Implement animations (scroll-triggered, hover effects)
- Make fully responsive

Create all files, configure everything, and let me know when complete.
```

### When to Use This
- You're experienced with Next.js/React
- You want to review/refine after full build
- You trust Claude to make minor decisions
- You can debug issues if they arise

---

## Scenario 4: Need More Context

### When You Need the Full Spec

```
I need you to build [SPECIFIC FEATURE], but I need you to understand the full project context first.

Please read these files in order:
1. Claude.md - for immediate specifications
2. tailshell-project-plan.md - for comprehensive context and rationale

Then build [SPECIFIC FEATURE] with full understanding of:
- Overall design philosophy (Apple-inspired minimalism)
- Target audience (B2B vendors)
- Project goals
- Future enhancements

Ask me any questions before starting.
```

### Example

```
I need you to build the contact form with advanced validation.

Read both Claude.md and tailshell-project-plan.md to understand:
- Why we're using React Hook Form + Zod
- The vendor inquiry workflow
- Form field requirements
- Success/error state handling
- Future backend integration plans

Then build the Contact.tsx component with all validation, states, and styling.
```

---

## Scenario 5: Debugging or Refinement

### Prompt for Fixes

```
I have an issue with [SPECIFIC COMPONENT/FEATURE].

Please reference Claude.md to check:
- What the expected behavior is
- Design specifications
- Animation requirements

Current issue: [DESCRIBE PROBLEM]

Review the code and fix it to match the specifications in Claude.md.
```

### Example

```
The Use Cases section isn't displaying the accent colors correctly.

Please reference Claude.md - specifically the "Use Cases Section" part where it defines:
- Outdoor: #2D5016 (Forest Green)
- Stadium: #0066CC (Vibrant Blue)
- Golf: #4A7C59 (Golf Green)
- Airport: #5E6AD2 (Modern Indigo)
- Versatile: #6B7280 (Neutral Gray)

Each card should have an accent color border on hover. Fix the implementation.
```

---

## Scenario 6: Adding New Features (Post-MVP)

### Prompt Template

```
I want to add [NEW FEATURE] to the TailShell website.

First, read Claude.md to understand the current design system and architecture.

Then, review tailshell-project-plan.md section 9 "Future Enhancements" to see if this feature is planned.

Design and implement [NEW FEATURE] in a way that:
- Matches the existing design system (colors, typography, animations)
- Follows the Apple-inspired aesthetic
- Integrates seamlessly with current sections
- Maintains performance standards

Show me the plan before implementing.
```

---

## Best Practices for Prompting

### ✅ DO:

1. **Always reference the file**
   ```
   "Please read Claude.md first..."
   "Reference the Use Cases section in Claude.md..."
   ```

2. **Be specific about what to build**
   ```
   "Build the Hero.tsx component with video background"
   NOT just "build the hero section"
   ```

3. **Mention design requirements**
   ```
   "Follow the design system: colors, typography, spacing from Claude.md"
   ```

4. **Request explanations**
   ```
   "When done, explain key decisions you made"
   ```

5. **Build iteratively**
   ```
   Start with setup → Build section by section → Refine
   ```

### ❌ DON'T:

1. **Assume Claude remembers**
   - Always reference the file, even in follow-ups

2. **Give vague instructions**
   - ❌ "Make it look good"
   - ✅ "Use the Forest Green accent color (#2D5016) on hover"

3. **Skip the design system**
   - Always mention following the colors/typography from Claude.md

4. **Build everything at once without experience**
   - Start with one section, verify it works, then continue

---

## Recommended Workflow

### Phase 1: Setup
```
Read Claude.md and set up the Next.js project with:
- Tailwind configured with custom colors
- shadcn/ui components installed
- Framer Motion added
- Project structure created

Show me the setup when complete.
```

### Phase 2: Navigation & Layout
```
Build the Navigation and Footer components based on Claude.md specs.

Navigation:
- Sticky, transparent → solid on scroll
- Smooth scroll to sections

Footer:
- Dark background, 3 columns
- Social icons (no hrefs yet)
```

### Phase 3: Build Sections (One at a Time)
```
Build the Hero section based on Claude.md.
[repeat for each section]
```

### Phase 4: Polish
```
Add all animations, responsive design, and accessibility features from Claude.md.
```

### Phase 5: Deploy
```
Help me deploy to Vercel and verify everything works.
```

---

## Quick Reference Prompts

### Setup
```
Read Claude.md and set up the TailShell Next.js project with all dependencies.
```

### Build a Section
```
Build the [Section Name] section from Claude.md with exact copy and styling.
```

### Fix an Issue
```
The [component] isn't working. Reference Claude.md and fix it.
```

### Add Animation
```
Add scroll-triggered animations to [section] per Claude.md animation specs.
```

### Make Responsive
```
Make [component] responsive following Claude.md breakpoints and mobile specs.
```

### Deploy
```
Help me deploy this to Vercel. Check Claude.md for deployment requirements.
```

---

## File Decision Matrix

| Situation | Use Claude.md | Use project_spec.md | Use Both |
|-----------|---------------|---------------------|----------|
| Quick build | ✅ | ❌ | ❌ |
| Need exact specs | ✅ | ❌ | ❌ |
| Need rationale | ❌ | ✅ | ❌ |
| Complex feature | ❌ | ❌ | ✅ |
| Bug fixing | ✅ | ❌ | ❌ |
| Future planning | ❌ | ✅ | ❌ |
| Full context | ❌ | ❌ | ✅ |

---

## Sample Complete Session

### Message 1 (You):
```
I want to build the TailShell website. Please read Claude.md first to understand all requirements, then set up the Next.js project.

Start with:
1. Project initialization
2. Installing dependencies (Next.js, Tailwind, shadcn/ui, Framer Motion, React Hook Form, Zod)
3. Configuring Tailwind with our custom colors
4. Creating the folder structure
5. Installing the shadcn/ui components we need

Let me know when setup is complete.
```

### Message 2 (After setup):
```
Great! Now build the Navigation component based on Claude.md specifications:
- Sticky header
- Transparent initially, solid white background after 100px scroll
- Logo on left, menu items on right
- Smooth scroll to sections
- Mobile hamburger menu
- Use the exact menu items from Claude.md
```

### Message 3:
```
Perfect! Now build the Hero section with:
- Full viewport height
- Video background (I'll provide the video file later, use a placeholder)
- Text overlay with dark gradient
- Exact copy from Claude.md
- Two CTA buttons
- Fade-in animation on load
```

### Continue for each section...

---

## Pro Tips

### 1. Start Small
Don't ask Claude to build everything at once. Build section by section.

### 2. Verify as You Go
After each section, test it in the browser before moving to the next.

### 3. Reference Specific Parts
Instead of "read Claude.md", say "read the Hero Section part of Claude.md"

### 4. Keep Context
In follow-up messages, remind Claude: "Continuing with the TailShell project from Claude.md..."

### 5. Ask for Code Review
After a section is built, ask: "Review this against Claude.md - did we miss anything?"

### 6. Request File Updates
"Create the Hero.tsx file in components/sections/ with this code"

---

## Common Issues & Solutions

### Issue: Claude doesn't follow the exact copy
**Solution:**
```
You didn't use the exact headline from Claude.md. Please use:
"Protect. Perform. Anywhere."
exactly as specified.
```

### Issue: Colors are wrong
**Solution:**
```
The accent colors don't match Claude.md. Please use:
- Outdoor: #2D5016
- Stadium: #0066CC
[etc.]
Update the Tailwind config and components.
```

### Issue: Animation is too aggressive
**Solution:**
```
The animation should be subtle per Claude.md. Use:
duration: 0.6, ease: "easeOut", y: 30
Not the current settings.
```

### Issue: Missing responsive design
**Solution:**
```
This isn't responsive. Claude.md specifies mobile-first design with breakpoints at 640px, 768px, 1024px. Make it responsive.
```

---

## Final Recommendation

**Best Approach for Most Users:**

1. **Start with this prompt:**
```
I need to build the TailShell website. Please read Claude.md thoroughly to understand all requirements.

Then:
1. Set up the Next.js project with all dependencies
2. Configure Tailwind with our custom colors
3. Create the project structure
4. Ask me which section to build first

Claude.md contains everything you need: design system, all copy, technical specs, and component requirements.
```

2. **Build section by section**
3. **Reference Claude.md in every prompt**
4. **Test after each section**
5. **Use project_spec.md only when you need deeper context**

---

## Remember

- **Claude.md** = Your quick reference, build guide
- **project_spec.md** = Your comprehensive documentation, rationale, planning

Start with Claude.md, refer to project_spec.md when you need the "why" behind decisions.

**Happy building! 🚀**