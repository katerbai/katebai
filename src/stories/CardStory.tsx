import { StoryLayout, StoryBlock } from "./StoryLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CardStory() {
  return (
    <StoryLayout
      title="Card"
      description="Two card patterns: the base Card component for UI surfaces, and the card-interactive class for hoverable project/feature cards."
    >
      <StoryBlock title="Base Card" code={`<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Supporting description text.</CardDescription>\n  </CardHeader>\n  <CardContent>Content area</CardContent>\n  <CardFooter>Footer actions</CardFooter>\n</Card>`}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Supporting description text for this card.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Card content goes here. This area holds the primary information or actions.</p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm">Action</Button>
            <Button size="sm" variant="outline">Cancel</Button>
          </CardFooter>
        </Card>
      </StoryBlock>

      <StoryBlock title="card-interactive" description="The hoverable card with gradient background, lift animation, and pink glow on hover. Used for all project and feature cards.">
        <div className="card-interactive group p-6 md:p-8 w-full max-w-sm cursor-pointer">
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-3">Design Systems</Badge>
              <h3 className="font-serif text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                Verizon
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">Senior Design System Designer</p>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
            Acting SME and design system specialist hired to support the evolution of the chat expansion pack design system library.
          </p>
        </div>
      </StoryBlock>

      <StoryBlock title="Information Card — Specs callout" description="Used in case studies to highlight key metrics or callouts.">
        <Card className="w-full max-w-md">
          <CardHeader>
            <p className="section-title">Impact</p>
            <CardTitle className="font-serif text-xl">513 lines catalogued</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Separator />
            <p className="text-sm text-muted-foreground leading-relaxed">
              A complete Figma audit file and Google Sheet with 513 lines of screenshots categorized by team and intent.
            </p>
          </CardContent>
        </Card>
      </StoryBlock>

      <StoryBlock title="glass" description=".glass — bg-background/80 backdrop-blur-xl border border-border/50. Used for the fixed top nav.">
        <div className="glass rounded-2xl px-6 py-4 w-full max-w-sm">
          <p className="font-serif text-sm font-semibold">Kate Baillargeon</p>
          <p className="text-xs text-muted-foreground">Work · About · Contact · Resume</p>
        </div>
      </StoryBlock>
    </StoryLayout>
  );
}
