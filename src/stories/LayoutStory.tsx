import { StoryLayout, StoryBlock, TokenRow } from "./StoryLayout";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const NAV_LINKS = [
  { label: "Work", active: true },
  { label: "About", active: false },
  { label: "Contact", active: false },
  { label: "Resume", active: false },
];

export default function LayoutStory() {
  return (
    <StoryLayout
      title="Layout & Nav"
      description="TopNav, layout landmarks, spacing scale, and the skip-link accessibility pattern."
    >
      <StoryBlock title="TopNav" description="Fixed glass header with KB monogram, nav links with underline-on-hover, and skip-to-main link as first focusable element.">
        <div className="w-full">
          <div className="glass rounded-2xl">
            <nav className="flex items-center justify-between px-6 py-4" aria-label="Main navigation">
              {/* KB logo — matches TopNav exactly */}
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  border: "2px solid transparent",
                  backgroundImage: "linear-gradient(hsl(var(--card)), hsl(var(--card))), linear-gradient(135deg, hsl(333, 71%, 50%), hsl(30, 80%, 60%))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
                aria-label="Kate Baillargeon — Home"
              >
                <span
                  className="text-sm font-semibold bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, hsl(333, 71%, 50%), hsl(30, 80%, 60%))" }}
                >
                  KB
                </span>
              </div>

              <ul className="flex items-center gap-8">
                {NAV_LINKS.map(({ label, active }) => (
                  <li key={label}>
                    <span
                      className={cn(
                        "nav-link text-sm font-medium",
                        active && "text-foreground after:w-full"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </StoryBlock>

      <StoryBlock title="Skip link" description="First focusable element — sr-only until focused. Press Tab to reveal it.">
        <div className="w-full max-w-sm">
          <p className="text-sm text-muted-foreground mb-3">Tab into this area to see the skip link appear:</p>
          <div className="relative rounded-xl border border-border overflow-hidden p-4">
            <a
              href="#"
              className="sr-only focus:not-sr-only focus:relative focus:block focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:mb-3"
              onClick={(e) => e.preventDefault()}
            >
              Skip to main content
            </a>
            <p className="text-sm text-muted-foreground">Page content starts here…</p>
          </div>
        </div>
      </StoryBlock>

      <StoryBlock title="Layout Landmarks" description="Semantic HTML structure used across every page.">
        <div className="w-full max-w-md font-mono text-sm space-y-1">
          {[
            { el: "<header>", desc: "TopNav — fixed, glass effect" },
            { el: "  <nav>", desc: "Main navigation" },
            { el: "</header>", desc: "" },
            { el: '<main id="main-content">', desc: "Page content" },
            { el: "  <h1>", desc: "Hero heading (font-serif, bold)" },
            { el: "  <section>", desc: "Content sections" },
            { el: "</main>", desc: "" },
            { el: "<footer>", desc: "Copyright + social icons" },
            { el: "</footer>", desc: "" },
          ].map(({ el, desc }, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-primary">{el}</span>
              {desc && <span className="text-muted-foreground text-xs self-end">← {desc}</span>}
            </div>
          ))}
        </div>
      </StoryBlock>

      <StoryBlock title="Spacing Scale" description="Consistent vertical rhythm used across all pages.">
        <div className="w-full space-y-2">
          <TokenRow label="Page sections" value="space-y-12 or space-y-16" description="Between major sections" />
          <TokenRow label="Card padding" value="p-6 md:p-8" description="ProjectCard and interactive cards" />
          <TokenRow label="Section title to content" value="mb-4" description="After .section-title" />
          <TokenRow label="Between paragraphs" value="mt-4" description="Body prose spacing" />
          <TokenRow label="Bullet list items" value="space-y-3" description="ul.space-y-3" />
          <TokenRow label="Container padding" value="px-6 py-4" description="TopNav inner nav" />
        </div>
      </StoryBlock>

      <StoryBlock title="Responsive Breakpoints">
        <div className="w-full space-y-2">
          <TokenRow label="Default (mobile-first)" value="0px+" description="Base styles, mobile layout" />
          <TokenRow label="md" value="768px" description="Tablet — two-column grids, larger text" />
          <TokenRow label="lg" value="1024px" description="Desktop — full layouts" />
          <TokenRow label="container 2xl" value="1400px" description="Max width for container" />
        </div>
      </StoryBlock>

      <StoryBlock title="Back to Top button" description=".btn-back-top — fixed bottom-right, glass, hover turns primary pink.">
        <div className="relative h-24 w-full max-w-xs rounded-xl border border-border bg-muted/30 overflow-hidden">
          <button
            className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-card/80 backdrop-blur-md border border-border/50 text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 shadow-lg hover:shadow-primary/30"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 15-6-6-6 6"/></svg>
          </button>
          <p className="absolute top-4 left-4 text-xs text-muted-foreground">Page content</p>
        </div>
      </StoryBlock>

      <StoryBlock title="Section title (.section-title)" description="text-sm font-medium uppercase tracking-widest text-primary mb-4 — used above every major section heading.">
        <div className="w-full max-w-sm space-y-6">
          <div>
            <p className="section-title">Featured Work</p>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Selected Projects</h2>
          </div>
          <Separator />
          <div>
            <p className="section-title">About</p>
            <h2 className="font-serif text-2xl font-semibold text-foreground">Kate Baillargeon</h2>
          </div>
        </div>
      </StoryBlock>
    </StoryLayout>
  );
}
