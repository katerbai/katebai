import { StoryLayout, StoryBlock, TokenRow } from "./StoryLayout";

const TOKENS = [
  { label: "--background", value: "hsl(240 4% 95%)", swatch: "hsl(240, 4%, 95%)", description: "Page background" },
  { label: "--foreground", value: "hsl(240 5% 10%)", swatch: "hsl(240, 5%, 10%)", description: "Primary text" },
  { label: "--primary", value: "hsl(333 71% 50%)", swatch: "hsl(333, 71%, 50%)", description: "Hot pink accent — icons, active states, links" },
  { label: "--primary-foreground", value: "hsl(327 73% 97%)", swatch: "hsl(327, 73%, 97%)", description: "Text on primary backgrounds" },
  { label: "--secondary", value: "hsl(240 5% 33%)", swatch: "hsl(240, 5%, 33%)", description: "Card/section backgrounds" },
  { label: "--muted", value: "hsl(240 4% 83%)", swatch: "hsl(240, 4%, 83%)", description: "Subtle backgrounds" },
  { label: "--muted-foreground", value: "hsl(240 5% 10%)", swatch: "hsl(240, 5%, 10%)", description: "Body text, descriptions" },
  { label: "--border", value: "hsl(240 4% 83%)", swatch: "hsl(240, 4%, 83%)", description: "Borders, dividers" },
  { label: "--accent", value: "hsl(355 100% 97%)", swatch: "hsl(355, 100%, 97%)", description: "Hover states" },
  { label: "--destructive", value: "hsl(0 72% 50%)", swatch: "hsl(0, 72%, 50%)", description: "Error / destructive actions" },
  { label: "--card", value: "hsl(0 0% 98%)", swatch: "hsl(0, 0%, 98%)", description: "Card surface" },
  { label: "--ring", value: "hsl(333 71% 50%)", swatch: "hsl(333, 71%, 50%)", description: "Focus ring" },
];

const PROJECT_COLORS = [
  { label: "Verizon", value: "hsl(0, 85%, 55%)", swatch: "hsl(0, 85%, 55%)" },
  { label: "American Express", value: "hsl(210, 100%, 45%)", swatch: "hsl(210, 100%, 45%)" },
  { label: "MetLife", value: "hsl(210, 100%, 35%)", swatch: "hsl(210, 100%, 35%)" },
  { label: "Fidelity", value: "hsl(145, 63%, 40%)", swatch: "hsl(145, 63%, 40%)" },
  { label: "Johnson & Johnson", value: "hsl(0, 75%, 50%)", swatch: "hsl(0, 75%, 50%)" },
  { label: "AJ Madison", value: "hsl(220, 70%, 50%)", swatch: "hsl(220, 70%, 50%)" },
  { label: "Third Summit", value: "hsl(280, 60%, 50%)", swatch: "hsl(280, 60%, 50%)" },
];

export default function ColorsStory() {
  return (
    <StoryLayout
      title="Colors"
      description="All color values are defined as HSL CSS custom properties. Never use raw color values — always use semantic tokens."
    >
      <StoryBlock title="Primary Palette" description="The hot-pink primary is the defining accent of this system.">
        <div className="w-full">
          <div className="flex h-24 overflow-hidden rounded-2xl border border-border/30 shadow-sm">
            {[
              { bg: "hsl(333, 71%, 90%)", label: "50" },
              { bg: "hsl(333, 71%, 80%)", label: "100" },
              { bg: "hsl(333, 71%, 70%)", label: "200" },
              { bg: "hsl(333, 71%, 60%)", label: "300" },
              { bg: "hsl(333, 71%, 50%)", label: "DEFAULT" },
              { bg: "hsl(333, 71%, 40%)", label: "600" },
              { bg: "hsl(333, 71%, 30%)", label: "700" },
              { bg: "hsl(333, 71%, 20%)", label: "800" },
              { bg: "hsl(333, 71%, 10%)", label: "900" },
            ].map((s) => (
              <div key={s.label} className="flex flex-1 flex-col items-center justify-end pb-2" style={{ background: s.bg }}>
                <span className="text-[10px] font-mono font-medium" style={{ color: parseInt(s.label) < 300 ? "#4a1a2e" : "white", mixBlendMode: "multiply" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </StoryBlock>

      <StoryBlock title="Semantic Tokens" description="All tokens with their HSL values and intended usage.">
        <div className="w-full space-y-2">
          {TOKENS.map((t) => (
            <TokenRow key={t.label} {...t} />
          ))}
        </div>
      </StoryBlock>

      <StoryBlock title="Project Accent Colors" description="Per-project colors stored in projects.ts as HSL strings. Used for the year badge with 12% opacity fill.">
        <div className="w-full space-y-2">
          {PROJECT_COLORS.map((c) => (
            <div key={c.label} className="flex items-center gap-4 rounded-xl border border-border/50 bg-card px-5 py-3">
              <div className="h-10 w-10 flex-shrink-0 rounded-full" style={{ background: c.swatch }} />
              <p className="flex-1 text-sm font-medium text-foreground">{c.label}</p>
              <span
                className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-medium border border-solid"
                style={{
                  backgroundColor: c.swatch.replace("hsl(", "hsla(").replace(")", ", 0.12)"),
                  color: c.swatch,
                  borderColor: c.swatch,
                }}
              >
                2024
              </span>
              <code className="flex-shrink-0 font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full">{c.value}</code>
            </div>
          ))}
        </div>
      </StoryBlock>

      <StoryBlock
        title="Usage Rules"
        description="Governing principles for color usage across the system."
      >
        <div className="w-full">
          <ul className="space-y-3 text-lg text-muted-foreground">
            {[
              "Never use raw color values (text-white, bg-black) in components.",
              "Always use semantic tokens: text-foreground, bg-background, text-primary, etc.",
              "Project-specific accent colors are stored in projects.ts as HSL strings.",
              "Dark mode: all tokens have both light and dark values in index.css.",
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
