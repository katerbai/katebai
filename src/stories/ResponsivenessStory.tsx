import { StoryLayout, StoryBlock, TokenRow } from "./StoryLayout";

const BREAKPOINTS = [
  {
    label: "Mobile",
    range: "0 – 639px",
    prefix: "—",
    color: "bg-primary/15 border-primary/30",
    textColor: "text-primary",
    behaviors: [
      "Single-column layout throughout",
      "Sidebar hidden — hamburger menu opens a slide-in drawer",
      "StoryBlock inner padding: p-4",
      "Page container padding: px-4",
      "TopNav: gap-3, px-3 between links",
      "TokenRow HSL code stacks below label text",
      "Project Accent badge + HSL stack below company name",
    ],
  },
  {
    label: "sm",
    range: "640px+",
    prefix: "sm:",
    color: "bg-blue-500/10 border-blue-400/30",
    textColor: "text-blue-600 dark:text-blue-400",
    behaviors: [
      "TopNav links restored to full gap-8, px-6 spacing",
      "TokenRow HSL code moves to inline right-side column",
      "Project Accent badge + HSL restore to 240px right column",
      "StoryBlock inner padding: p-8",
      "Page container padding: px-8",
    ],
  },
  {
    label: "md",
    range: "768px+",
    prefix: "md:",
    color: "bg-green-500/10 border-green-400/30",
    textColor: "text-green-700 dark:text-green-400",
    behaviors: [
      "Sidebar always visible — no hamburger overlay",
      "Two-column grids unlock (md:grid-cols-2)",
      "ProjectCard grid: 1-col → 2-col",
      "Card padding: p-6 md:p-8",
    ],
  },
  {
    label: "lg",
    range: "1024px+",
    prefix: "lg:",
    color: "bg-purple-500/10 border-purple-400/30",
    textColor: "text-purple-700 dark:text-purple-400",
    behaviors: [
      "Full desktop layout with max-w-5xl (1024px) content area",
      "Three-column grids (lg:grid-cols-3)",
      "All spacing and type scales at their maximum values",
    ],
  },
];

const TYPE_ROWS = [
  { label: "Page title — h1 (font-serif bold)", mobile: "text-3xl · 30px", tablet: "text-3xl · 30px", desktop: "text-4xl · 36px" },
  { label: "Section heading — h2 (font-serif semibold)", mobile: "text-xl · 20px", tablet: "text-xl · 20px", desktop: "text-xl · 20px" },
  { label: "Body / description", mobile: "text-base · 16px", tablet: "text-base · 16px", desktop: "text-lg · 18px" },
  { label: "Muted / subtitle text", mobile: "text-sm · 14px", tablet: "text-sm · 14px", desktop: "text-lg · 18px" },
  { label: "Token labels / code", mobile: "text-xs · 12px", tablet: "text-xs · 12px", desktop: "text-sm · 14px" },
  { label: "Section overline (.section-title)", mobile: "text-sm · 14px", tablet: "text-sm · 14px", desktop: "text-sm · 14px" },
];

export default function ResponsivenessStory() {
  return (
    <StoryLayout
      title="Responsiveness"
      description="How layout, spacing, and typography adapt across mobile (0px), sm (640px), md (768px), and lg (1024px) breakpoints."
    >
      {/* Breakpoint visual bar */}
      <StoryBlock title="Breakpoint Scale" description="Visual representation of the four breakpoints used across the system.">
        <div className="w-full space-y-3">
          <div className="flex w-full rounded-xl overflow-hidden border border-border/50 h-10 text-xs font-mono">
            <div className="flex items-center justify-center border-r border-border/50 bg-primary/15 text-primary font-medium" style={{ width: "25%" }}>
              0px
            </div>
            <div className="flex items-center justify-center border-r border-border/50 bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium" style={{ width: "20%" }}>
              640px
            </div>
            <div className="flex items-center justify-center border-r border-border/50 bg-green-500/10 text-green-700 dark:text-green-400 font-medium" style={{ width: "25%" }}>
              768px
            </div>
            <div className="flex items-center justify-center bg-purple-500/10 text-purple-700 dark:text-purple-400 font-medium flex-1">
              1024px+
            </div>
          </div>
          <div className="flex w-full text-xs font-medium" style={{ gap: 0 }}>
            <div className="text-primary" style={{ width: "25%" }}>Mobile</div>
            <div className="text-blue-600 dark:text-blue-400" style={{ width: "20%" }}>sm</div>
            <div className="text-green-700 dark:text-green-400" style={{ width: "25%" }}>md</div>
            <div className="text-purple-700 dark:text-purple-400 flex-1">lg</div>
          </div>
        </div>
      </StoryBlock>

      {/* Per-breakpoint behavior */}
      <StoryBlock title="Layout Behavior Per Breakpoint" description="What changes at each breakpoint and which components are affected.">
        <div className="w-full space-y-4">
          {BREAKPOINTS.map((bp) => (
            <div key={bp.label} className={`rounded-xl border p-5 ${bp.color}`}>
              <div className="flex items-center gap-3 mb-3">
                <code className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white/50 dark:bg-black/20 ${bp.textColor}`}>
                  {bp.prefix}
                </code>
                <span className={`text-sm font-semibold ${bp.textColor}`}>{bp.label}</span>
                <span className="text-xs text-muted-foreground font-mono ml-auto">{bp.range}</span>
              </div>
              <ul className="space-y-1.5">
                {bp.behaviors.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${bp.textColor.replace("text-", "bg-")}`} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </StoryBlock>

      {/* Typography scaling */}
      <StoryBlock title="Typography Scaling" description="How type sizes shift from mobile to desktop. Most sizes hold constant; the page title and body text are the primary scaling points.">
        <div className="w-full space-y-2">
          {/* Header row */}
          <div className="flex items-center gap-4 px-5 py-2 rounded-xl bg-muted/40">
            <p className="flex-1 min-w-0 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Element</p>
            <div className="hidden sm:flex items-center gap-4 flex-shrink-0 w-[420px]">
              <span className="w-[130px] text-xs font-semibold text-primary uppercase tracking-wide">Mobile</span>
              <span className="w-[130px] text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">sm / md</span>
              <span className="w-[130px] text-xs font-semibold text-purple-700 dark:text-purple-400 uppercase tracking-wide">lg+</span>
            </div>
          </div>
          {TYPE_ROWS.map((row) => (
            <div key={row.label} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card px-5 py-3">
              <p className="flex-1 min-w-0 text-sm font-medium text-foreground">{row.label}</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 flex-shrink-0 sm:w-[420px]">
                <code className="w-full sm:w-[130px] font-mono text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full whitespace-nowrap">{row.mobile}</code>
                <code className="w-full sm:w-[130px] font-mono text-xs bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full whitespace-nowrap">{row.tablet}</code>
                <code className="w-full sm:w-[130px] font-mono text-xs bg-purple-500/10 text-purple-700 dark:text-purple-400 px-2.5 py-1 rounded-full whitespace-nowrap">{row.desktop}</code>
              </div>
            </div>
          ))}
        </div>
      </StoryBlock>

      {/* Live type samples */}
      <StoryBlock title="Live Type Samples" description="These samples show actual rendered sizes — resize your browser to see them adapt.">
        <div className="w-full space-y-6">
          <div>
            <p className="section-title mb-2">Page Title (h1)</p>
            <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Kate Baillargeon
            </h1>
            <p className="text-xs font-mono text-muted-foreground mt-1">text-3xl → lg:text-4xl</p>
          </div>
          <div>
            <p className="section-title mb-2">Section Heading (h2)</p>
            <h2 className="font-serif text-xl font-semibold text-foreground">
              Selected Projects
            </h2>
            <p className="text-xs font-mono text-muted-foreground mt-1">text-xl (constant)</p>
          </div>
          <div>
            <p className="section-title mb-2">Body Text</p>
            <p className="text-base lg:text-lg text-foreground max-w-prose">
              Design systems documentation with live examples for each component, token, and pattern used across the portfolio site.
            </p>
            <p className="text-xs font-mono text-muted-foreground mt-1">text-base → lg:text-lg</p>
          </div>
          <div>
            <p className="section-title mb-2">Muted / Description</p>
            <p className="text-sm lg:text-lg text-muted-foreground max-w-prose">
              All color values are defined as HSL CSS custom properties. Never use raw color values.
            </p>
            <p className="text-xs font-mono text-muted-foreground mt-1">text-sm → lg:text-lg</p>
          </div>

          {/* Static reference breakdown */}
          <div className="border-t border-border/50 pt-6 space-y-3">
            <p className="text-sm font-semibold text-foreground">Static reference</p>
            {[
              { element: "h1 — page title",        mobile: "text-3xl · 30px", desktop: "text-4xl · 36px",  changes: true },
              { element: "h2 — section heading",   mobile: "text-xl · 20px",  desktop: "text-xl · 20px",   changes: false },
              { element: "Body text",               mobile: "text-base · 16px",desktop: "text-lg · 18px",   changes: true },
              { element: "Muted / description",     mobile: "text-sm · 14px",  desktop: "text-lg · 18px",   changes: true },
              { element: "Labels / code",           mobile: "text-xs · 12px",  desktop: "text-sm · 14px",   changes: true },
              { element: "Section overline",        mobile: "text-sm · 14px",  desktop: "text-sm · 14px",   changes: false },
            ].map(({ element, mobile, desktop, changes }) => (
              <div key={element} className="flex items-start gap-3 rounded-xl border border-border/50 bg-card px-4 py-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{element}</p>
                  <div className="mt-1.5 flex flex-wrap gap-2 items-center">
                    <code className="font-mono text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{mobile}</code>
                    {changes ? (
                      <>
                        <span className="text-xs text-muted-foreground">→ lg:</span>
                        <code className="font-mono text-xs bg-purple-500/10 text-purple-700 dark:text-purple-400 px-2 py-0.5 rounded-full">{desktop}</code>
                      </>
                    ) : (
                      <span className="text-xs text-muted-foreground">constant across all breakpoints</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StoryBlock>

      {/* Spacing token changes */}
      <StoryBlock title="Responsive Spacing Tokens" description="Padding and gap values that change across breakpoints.">
        <div className="w-full space-y-2">
          <TokenRow label="Page container horizontal" value="px-4 sm:px-8" description="StoryLayout outer padding" />
          <TokenRow label="StoryBlock inner" value="p-4 sm:p-8" description="Canvas area padding" />
          <TokenRow label="TopNav links gap" value="gap-3 sm:gap-8" description="Space between nav items" />
          <TokenRow label="TopNav container" value="px-3 sm:px-6" description="Nav horizontal padding" />
          <TokenRow label="Card padding" value="p-6 md:p-8" description="ProjectCard and interactive cards" />
          <TokenRow label="Project Accent column" value="hidden sm:flex w-[240px]" description="Badge + HSL right-side column" />
        </div>
      </StoryBlock>
    </StoryLayout>
  );
}
