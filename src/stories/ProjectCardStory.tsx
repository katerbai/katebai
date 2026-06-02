import { useState } from "react";
import { StoryLayout, StoryBlock } from "./StoryLayout";
import { ArrowUpRight, Lock } from "lucide-react";

interface MockProject {
  id: string;
  company: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
  color: string;
  locked?: boolean;
}

const PROJECTS: MockProject[] = [
  {
    id: "verizon",
    company: "Verizon",
    role: "Senior Design System Designer for Conversational AI",
    year: "March 2025 - Present",
    description: "Acting SME and design system specialist hired to support the evolution of the chat expansion pack design system library and any cross-functional team (design or development) using it!",
    tags: ["Design Systems", "Branding", "Accessibility", "Design System Lead", "Storybook", "Implementation", "AI", "Conversational", "Mentorship"],
    color: "hsl(0, 85%, 55%)",
  },
  {
    id: "american-express",
    company: "American Express",
    role: "Product Designer",
    year: "2024",
    description: "Rapid Build Emergency Hire to get an internal tooling project 4 months behind back on track.",
    tags: ["Internal Tool", "Component Libraries", "0-1", "Emergency Build", "Mentorship", "Prototyping"],
    color: "hsl(210, 100%, 45%)",
    locked: true,
  },
  {
    id: "metlife",
    company: "MetLife",
    role: "Global Design System Designer",
    year: "2023",
    description: "Transferred XD Global Design System into Figma, while also building out the global design system library.",
    tags: ["Global Design System", "Documentation and Governance", "Figma Transfer", "Design Ops", "Accessibility"],
    color: "hsl(210, 100%, 35%)",
  },
];

const MAX_VISIBLE_TAGS = 4;

function ProjectCardDemo({ project }: { project: MockProject }) {
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? project.tags : project.tags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenCount = project.tags.length - MAX_VISIBLE_TAGS;

  return (
    <article className="card-interactive group block p-6 md:p-8">
      <div className="relative z-10">
        <div className="cursor-pointer" role="link" tabIndex={0}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                {project.company}
              </h3>
              <p className="mb-4 text-muted-foreground">{project.role}</p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground/80">{project.description}</p>
              <div
                style={{
                  backgroundColor: project.color.replace("hsl(", "hsla(").replace(")", ", 0.12)"),
                  color: project.color,
                  borderColor: project.color,
                }}
                className="mb-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border border-solid"
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: project.color }} aria-hidden="true" />
                {project.year}
              </div>
            </div>
            <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground pointer-events-none" aria-hidden="true">
              {project.locked ? <Lock className="h-4 w-4" /> : <ArrowUpRight className="h-5 w-5" />}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {visibleTags.map((tag) => (
            <span key={tag} className="rounded-full border border-border/50 bg-secondary/10 px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
          {hiddenCount > 0 && !showAllTags && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setShowAllTags(true); }}
              className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary hover:bg-primary/20 transition-colors cursor-pointer"
            >
              +{hiddenCount} more
            </button>
          )}
          {showAllTags && hiddenCount > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setShowAllTags(false); }}
              className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary hover:bg-primary/20 transition-colors cursor-pointer"
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ProjectCardStory() {
  return (
    <StoryLayout
      title="Project Card"
      description="The core portfolio card. Hover to see the lift animation, glow, and pink border. Locked cards show a lock icon instead of the arrow."
    >
      <StoryBlock title="Default — Public project" description="Hover to see the card-interactive lift and glow.">
        <div className="w-full max-w-xl">
          <ProjectCardDemo project={PROJECTS[0]} />
        </div>
      </StoryBlock>

      <StoryBlock title="Locked — Password protected" description="requiresPassword=true replaces the arrow with a lock icon. Clicking opens a modal.">
        <div className="w-full max-w-xl">
          <ProjectCardDemo project={PROJECTS[1]} />
        </div>
      </StoryBlock>

      <StoryBlock title="All projects — List layout">
        <div className="w-full space-y-4">
          {PROJECTS.map((p) => (
            <ProjectCardDemo key={p.id} project={p} />
          ))}
        </div>
      </StoryBlock>

      <StoryBlock
        title="Anatomy"
        description="Every element and its spec."
      >
        <div className="w-full">
          <ul className="space-y-3 text-base text-muted-foreground">
            {[
              "Outer wrapper: article.card-interactive — gradient bg, shadow, lift-on-hover, pink glow",
              "Company name: font-serif text-2xl md:text-3xl — goes text-primary on group-hover",
              "Role: text-muted-foreground below company name",
              "Description: text-sm text-muted-foreground/80 — capped prose",
              "Year badge: per-project color at 12% opacity fill + matching border",
              "Arrow/Lock circle: border-border/50 → border-primary bg-primary text-primary-foreground on hover",
              "Tags: rounded-full border border-border/50 bg-secondary/10 — up to 4 visible, +N more button",
              "+N more button: border-primary/30 bg-primary/10 text-primary — expands inline",
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </StoryBlock>
    </StoryLayout>
  );
}
