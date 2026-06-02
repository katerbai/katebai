import { StoryLayout, StoryBlock } from "./StoryLayout";
import { Skeleton } from "@/components/ui/skeleton";
import { Toggle } from "@/components/ui/toggle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bold, Italic, Underline } from "lucide-react";

export default function FeedbackStory() {
  return (
    <StoryLayout
      title="Feedback"
      description="Skeleton loaders, toggles, accordions, and other feedback / disclosure components."
    >
      <StoryBlock title="Skeleton" description="Used while content is loading. Inherits border-radius from the system.">
        <div className="w-full max-w-sm space-y-4">
          <div className="flex items-start gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <Skeleton className="h-24 w-full rounded-xl" />
        </div>
      </StoryBlock>

      <StoryBlock title="Project card skeleton" description="Skeleton of a ProjectCard while data loads.">
        <div className="card-interactive p-6 md:p-8 w-full max-w-xl">
          <div className="flex items-start justify-between">
            <div className="flex-1 space-y-3">
              <Skeleton className="h-7 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <Skeleton className="ml-4 h-10 w-10 flex-shrink-0 rounded-full" />
          </div>
          <div className="mt-4 flex gap-2">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        </div>
      </StoryBlock>

      <StoryBlock title="Toggle" description="Single-state toggle buttons for formatting, filters, etc.">
        <div className="flex gap-2">
          <Toggle aria-label="Bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
        <div className="flex gap-2">
          <Toggle defaultPressed aria-label="Bold (active)">
            <Bold className="h-4 w-4" />
          </Toggle>
          <span className="text-xs text-muted-foreground self-center">Active state</span>
        </div>
      </StoryBlock>

      <StoryBlock title="Accordion" description="Used for FAQs, design decisions, and expandable case study sections.">
        <div className="w-full max-w-xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="challenge">
              <AccordionTrigger className="font-serif text-base font-semibold">The Challenge</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                I was hired onto the Conversational AI Design Team as their dedicated design system resource. With legacy bugs in a partially custom-coded library, rapid prioritization was essential.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="approach">
              <AccordionTrigger className="font-serif text-base font-semibold">The Approach</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                I led a team-wide audit of the last year and a half of work, resulting in a complete Figma audit file and a Google Sheet with 513 lines of screenshots categorized by team and intent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="impact">
              <AccordionTrigger className="font-serif text-base font-semibold">The Impact</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                The audit flourished as a searchable repository to share with stakeholders cross-functionally and became the onboarding document for the rapid-hire team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </StoryBlock>

      <StoryBlock title="Bullet List — Global Standard" description="All bullet lists must use this exact pattern: w-3 h-3 rounded-full bg-primary, flex items-start gap-3, mt-1.5 for vertical alignment.">
        <div className="w-full max-w-xl">
          <ul className="space-y-3 text-lg text-muted-foreground">
            {[
              "Dot size: w-3 h-3 (12×12px) — never smaller, never larger",
              "Shape: rounded-full bg-primary",
              "Alignment: flex items-start gap-3, dot uses mt-1.5",
              "Flex-shrink: Always flex-shrink-0 to prevent collapse",
            ].map((rule) => (
              <li key={rule} className="flex items-start gap-3">
                <span className="inline-block w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
                {rule}
              </li>
            ))}
          </ul>
          <p className="mt-6 mb-2 text-sm font-medium text-foreground">Sub-bullets (indented, bg-primary/60):</p>
          <ul className="space-y-2 text-base text-muted-foreground">
            <li className="flex items-start gap-3 ml-6">
              <span className="inline-block w-3 h-3 rounded-full bg-primary/60 flex-shrink-0 mt-1.5" aria-hidden="true" />
              Sub-bullet uses ml-6 on the li and bg-primary/60 on the dot
            </li>
            <li className="flex items-start gap-3 ml-6">
              <span className="inline-block w-3 h-3 rounded-full bg-primary/60 flex-shrink-0 mt-1.5" aria-hidden="true" />
              Same gap and alignment rules apply
            </li>
          </ul>
        </div>
      </StoryBlock>
    </StoryLayout>
  );
}
