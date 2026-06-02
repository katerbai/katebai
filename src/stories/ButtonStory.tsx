import { StoryLayout, StoryBlock } from "./StoryLayout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Lock, Mail, Download } from "lucide-react";

export default function ButtonStory() {
  return (
    <StoryLayout
      title="Button"
      description="Built on CVA with six variants and four sizes. Icon-only buttons must have aria-label."
    >
      <StoryBlock title="Variants" code={`<Button variant="default">Primary</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="link">Link</Button>\n<Button variant="destructive">Destructive</Button>`}>
        <Button variant="default">Primary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </StoryBlock>

      <StoryBlock title="Sizes" code={`<Button size="sm">Small</Button>\n<Button size="default">Default</Button>\n<Button size="lg">Large</Button>`}>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </StoryBlock>

      <StoryBlock title="With Icons" description="Icons in buttons use the 16px size automatically via [&_svg]:size-4." code={`<Button><Mail /> Contact Me</Button>\n<Button variant="outline"><Download /> Resume</Button>`}>
        <Button><Mail /> Contact Me</Button>
        <Button variant="outline"><Download /> Resume</Button>
        <Button variant="secondary"><ArrowUpRight /> View Project</Button>
      </StoryBlock>

      <StoryBlock title="Icon-only" description="Always requires aria-label for accessibility." code={`<Button size="icon" aria-label="View project"><ArrowUpRight /></Button>`}>
        <Button size="icon" aria-label="View project"><ArrowUpRight /></Button>
        <Button size="icon" variant="outline" aria-label="View locked project"><Lock /></Button>
        <Button size="icon" variant="ghost" aria-label="Send email"><Mail /></Button>
      </StoryBlock>

      <StoryBlock title="States">
        <Button>Active</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
      </StoryBlock>

      <StoryBlock title="Project card arrow button" description="This circle button pattern appears on every project card.">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 text-muted-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowUpRight className="h-5 w-5" />
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground">
          <ArrowUpRight className="h-5 w-5" />
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 text-muted-foreground">
          <Lock className="h-4 w-4" />
        </div>
      </StoryBlock>
    </StoryLayout>
  );
}
