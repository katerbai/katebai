import { StoryLayout, StoryBlock, TokenRow } from "./StoryLayout";

const SCALE = [
  { label: "H1 — Hero", tag: "h1", className: "font-serif font-bold text-4xl md:text-6xl", example: "Design with intention." },
  { label: "H2 — Section", tag: "h2", className: "font-serif text-2xl font-semibold", example: "Design Systems" },
  { label: "H3 — Card Title", tag: "h3", className: "font-serif text-xl font-semibold", example: "Component Overview" },
  { label: "Section Label", tag: "p", className: "section-title", example: "FEATURED WORK" },
  { label: "Body — Large", tag: "p", className: "text-lg leading-relaxed text-muted-foreground", example: "I build design systems that scale. My work spans enterprise, startup, and everything in between — always with accessibility and craft at the center." },
  { label: "Body — Base", tag: "p", className: "text-base text-muted-foreground", example: "Caption-level text used for descriptions, image captions, and secondary information. Never italic." },
  { label: "Nav Link", tag: "span", className: "nav-link text-sm font-medium", example: "Work" },
  { label: "Code / Mono", tag: "code", className: "font-mono text-sm bg-primary/10 text-primary px-2.5 py-1 rounded-full", example: "bg-primary text-primary-foreground" },
];

export default function TypographyStory() {
  return (
    <StoryLayout
      title="Typography"
      description="Two typefaces: Merriweather (serif) for all headings, Poppins (sans) for body, nav, labels, and UI text."
    >
      <StoryBlock title="Type Scale" description="Every text style in the system, from hero heading down to caption.">
        <div className="w-full space-y-8">
          {SCALE.map(({ label, className, example }) => (
            <div key={label} className="border-b border-border/30 pb-6 last:border-0 last:pb-0">
              <p className="mb-2 text-xs font-mono text-muted-foreground">{label}</p>
              <p className={className}>{example}</p>
            </div>
          ))}
        </div>
      </StoryBlock>

      <StoryBlock title="Font Families" description="Fonts loaded via Google Fonts in index.css.">
        <div className="w-full space-y-2">
          <TokenRow label="font-serif" value="Merriweather" description="H1 · H2 · H3 · All headings" />
          <TokenRow label="font-sans" value="Poppins" description="Body · Labels · Nav · UI text" />
          <TokenRow label="font-mono" value="JetBrains Mono" description="Code snippets · Token values" />
        </div>
      </StoryBlock>

      <StoryBlock title="Weights in Use">
        <div className="w-full space-y-4">
          {[
            { weight: "font-light", num: "300", example: "Light — rarely used" },
            { weight: "font-normal", num: "400", example: "Regular — body text, captions" },
            { weight: "font-medium", num: "500", example: "Medium — nav links, labels" },
            { weight: "font-semibold", num: "600", example: "Semibold — card titles, H2" },
            { weight: "font-bold", num: "700", example: "Bold — H1 hero heading" },
          ].map(({ weight, num, example }) => (
            <div key={weight} className="flex items-baseline gap-4">
              <span className="w-16 font-mono text-xs text-muted-foreground">{num}</span>
              <p className={`text-lg text-foreground ${weight}`}>{example}</p>
            </div>
          ))}
        </div>
      </StoryBlock>

      <StoryBlock title="text-gradient" description="Gradient text used on hero callouts.">
        <p className="font-serif text-5xl font-bold text-gradient">Portfolio.</p>
      </StoryBlock>
    </StoryLayout>
  );
}
