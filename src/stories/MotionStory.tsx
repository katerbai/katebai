import { useState } from "react";
import { StoryLayout, StoryBlock, TokenRow } from "./StoryLayout";
import { Button } from "@/components/ui/button";

function AnimBox({ className, label }: { className: string; label: string }) {
  const [key, setKey] = useState(0);
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        key={key}
        className={`h-16 w-16 rounded-xl bg-primary flex items-center justify-center text-primary-foreground text-xs font-medium ${className}`}
      >
        {label}
      </div>
      <Button size="sm" variant="outline" onClick={() => setKey((k) => k + 1)}>
        Replay
      </Button>
    </div>
  );
}

export default function MotionStory() {
  return (
    <StoryLayout
      title="Motion"
      description="Entrance animations, hover transitions, and the smooth cubic-bezier timing used throughout the system."
    >
      <StoryBlock title="Fade Up animations" description="animate-fade-up and its staggered delay variants. Used for hero and section entrance.">
        <AnimBox className="animate-fade-up" label="fadeUp" />
        <AnimBox className="animate-fade-up-delay-1" label="+0.1s" />
        <AnimBox className="animate-fade-up-delay-2" label="+0.2s" />
      </StoryBlock>

      <StoryBlock title="Card hover — card-interactive" description="translateY(-4px) lift + shadow bloom + border-primary/30 + glow overlay. Transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1).">
        <div className="card-interactive group p-6 w-full max-w-xs cursor-pointer">
          <p className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">Hover me</p>
          <p className="text-sm text-muted-foreground mt-1">Card lifts 4px with glow</p>
        </div>
      </StoryBlock>

      <StoryBlock title="Nav link underline" description="Width animates from 0 → 100% on hover via CSS transition (duration-300). The ::after pseudo-element is a 1px bg-primary line.">
        <div className="flex gap-8 py-4">
          {["Work", "About", "Contact", "Resume"].map((label) => (
            <span key={label} className="nav-link text-sm font-medium cursor-pointer">
              {label}
            </span>
          ))}
        </div>
      </StoryBlock>

      <StoryBlock title="Button hover — arrow circle" description="On group-hover: border-primary bg-primary text-primary-foreground. transition-all duration-300.">
        <div className="group flex items-center gap-4 cursor-pointer">
          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            Hover this row
          </span>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
        </div>
      </StoryBlock>

      <StoryBlock title="Back-to-top button hover" description="Scales to 1.1 and transitions to bg-primary text-primary-foreground with shadow-primary/30. hover:scale-110.">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-card/80 backdrop-blur-md border border-border/50 text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 shadow-lg hover:shadow-primary/30"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 15-6-6-6 6"/></svg>
        </button>
      </StoryBlock>

      <StoryBlock title="Timing tokens" description="Custom transition and animation values from the design tokens.">
        <div className="w-full space-y-2">
          <TokenRow label="--transition-smooth" value="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)" description="Card hover, interactive elements" />
          <TokenRow label="animate-fade-in" value="fade-in 0.5s ease-out forwards" description="Section entrance" />
          <TokenRow label="animate-accordion-down" value="0.2s ease-out" description="Accordion open" />
          <TokenRow label="duration-300" value="300ms" description="Nav links, button transitions" />
          <TokenRow label="duration-500" value="500ms" description="Card glow overlay opacity" />
        </div>
      </StoryBlock>
    </StoryLayout>
  );
}
