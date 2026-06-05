import { StoryLayout, StoryBlock } from "./StoryLayout";
import { Badge } from "@/components/ui/badge";

const PROJECT_COLORS = [
  { label: "Verizon", color: "hsl(0, 85%, 55%)", year: "March 2025 - Present" },
  { label: "American Express", color: "hsl(210, 100%, 45%)", year: "2024" },
  { label: "MetLife", color: "hsl(210, 100%, 35%)", year: "2023" },
  { label: "Fidelity", color: "hsl(145, 63%, 40%)", year: "2022–2023" },
  { label: "Johnson & Johnson", color: "hsl(0, 75%, 50%)", year: "2022" },
  { label: "Third Summit", color: "hsl(280, 60%, 50%)", year: "2021" },
];

const TAGS = ["Design Systems", "Accessibility", "Figma Advocate", "Component Building", "Storybook", "AI", "Documentation", "Branding", "Implementation", "Mentorship"];

export default function BadgeStory() {
  return (
    <StoryLayout
      title="Badge & Tags"
      description="Three distinct badge patterns: the Badge component for status, pill tags for skills, and per-project year badges."
    >
      <StoryBlock title="Badge component — variants" code={`<Badge>Default</Badge>\n<Badge variant="secondary">Secondary</Badge>\n<Badge variant="outline">Outline</Badge>\n<Badge variant="destructive">Destructive</Badge>`}>
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </StoryBlock>

      <StoryBlock
        title="Skill Tags — Project cards & detail pages"
        description="bg-primary text-primary-foreground rounded-full. The global standard for tagging skills and disciplines."
        code={`<span className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">\n  Design Systems\n</span>`}
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {TAGS.map((tag) => (
            <span key={tag} className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </StoryBlock>

      <StoryBlock
        title="Skill Tags — Card surface (muted variant)"
        description="On project cards, tags use a subtle muted style with a border."
        code={`<span className="rounded-full border border-border/50 bg-secondary/10 px-3 py-1 text-xs text-muted-foreground">\n  Design Systems\n</span>`}
      >
        <div className="flex flex-wrap gap-2 justify-center">
          {TAGS.slice(0, 6).map((tag) => (
            <span key={tag} className="rounded-full border border-border/50 bg-secondary/10 px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
          <button className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary hover:bg-primary/20 transition-colors cursor-pointer">
            +4 more
          </button>
        </div>
      </StoryBlock>

      <StoryBlock
        title="Year Badge — Per-project color"
        description="Dynamic per-project coloring using the project's HSL color at 12% opacity fill, with matching border and text."
        code={`style={{\n  backgroundColor: color.replace('hsl(', 'hsla(').replace(')', ', 0.12)'),\n  color: color,\n  borderColor: color\n}}`}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {PROJECT_COLORS.map(({ label, color, year }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border border-solid"
              style={{
                backgroundColor: color.replace("hsl(", "hsla(").replace(")", ", 0.12)"),
                color,
                borderColor: color,
              }}
              title={label}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
              {year}
            </span>
          ))}
        </div>
      </StoryBlock>

      <StoryBlock title="About page — Expertise tags" description="Expertise tags on the About page use bg-primary text-primary-foreground — the same pink pill style as all other skill tags across the site.">
        <div className="w-full">
          <p className="section-title mb-3">Expertise</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Design Systems", "Component Libraries", "Design Thinking", "Figma",
              "React Components", "Accessibility", "Documentation", "Design Ops",
              "User Research", "Prototyping", "Mentorship and Connection"
            ].map((tag) => (
              <span key={tag} className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </StoryBlock>
    </StoryLayout>
  );
}
