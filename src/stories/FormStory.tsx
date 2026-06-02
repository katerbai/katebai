import { useState } from "react";
import { StoryLayout, StoryBlock } from "./StoryLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function FormStory() {
  const [sliderVal, setSliderVal] = useState([60]);
  const [progress] = useState(72);
  const [checked, setChecked] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <StoryLayout
      title="Form Inputs"
      description="All form controls inherit the system's border, ring, and radius tokens. Focus rings always use --ring (the primary pink)."
    >
      <StoryBlock title="Text Inputs" code={`<Input placeholder="Enter text" />\n<Input type="password" placeholder="Password" />\n<Input disabled value="Disabled" />\n<Input className="border-destructive" placeholder="Error state" />`}>
        <div className="w-full max-w-sm space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="input-default">Default</Label>
            <Input id="input-default" placeholder="Enter text…" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="input-pw">Password</Label>
            <Input id="input-pw" type="password" placeholder="Password" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="input-disabled">Disabled</Label>
            <Input id="input-disabled" disabled value="Disabled input" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="input-error" className="text-destructive">Error state</Label>
            <Input id="input-error" className="border-destructive" placeholder="Error" />
            <p className="text-xs text-destructive">This field is required.</p>
          </div>
        </div>
      </StoryBlock>

      <StoryBlock title="Textarea">
        <div className="w-full max-w-sm space-y-1.5">
          <Label htmlFor="ta">Message</Label>
          <Textarea id="ta" placeholder="Type your message here…" rows={4} />
        </div>
      </StoryBlock>

      <StoryBlock title="Select">
        <div className="w-full max-w-xs space-y-1.5">
          <Label>Project type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a type…" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="design-system">Design System</SelectItem>
              <SelectItem value="product">Product Design</SelectItem>
              <SelectItem value="brand">Branding</SelectItem>
              <SelectItem value="research">Research</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </StoryBlock>

      <StoryBlock title="Checkbox & Switch">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Checkbox
              id="cb1"
              checked={checked}
              onCheckedChange={(v) => setChecked(!!v)}
            />
            <Label htmlFor="cb1">Accessibility compliant</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="cb2" defaultChecked />
            <Label htmlFor="cb2">Design token usage</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="cb3" disabled />
            <Label htmlFor="cb3" className="text-muted-foreground">Disabled checkbox</Label>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <Switch
              id="sw1"
              checked={switchOn}
              onCheckedChange={setSwitchOn}
            />
            <Label htmlFor="sw1">{switchOn ? "Dark mode enabled" : "Dark mode disabled"}</Label>
          </div>
        </div>
      </StoryBlock>

      <StoryBlock title="Slider">
        <div className="w-full max-w-xs space-y-3">
          <Label>Component coverage — {sliderVal[0]}%</Label>
          <Slider value={sliderVal} onValueChange={setSliderVal} min={0} max={100} step={1} />
        </div>
      </StoryBlock>

      <StoryBlock title="Progress">
        <div className="w-full max-w-xs space-y-2">
          <div className="flex justify-between text-sm">
            <Label>Library completion</Label>
            <span className="text-muted-foreground font-mono text-xs">{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>
      </StoryBlock>

      <StoryBlock title="Password gate form" description="Used on locked project cards in the portfolio.">
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h2 className="font-serif text-xl font-semibold text-foreground">Password Required</h2>
              <p className="text-sm text-muted-foreground text-center">This project is protected. Enter the password to continue.</p>
              <form className="w-full space-y-3" onSubmit={(e) => e.preventDefault()}>
                <Input type="password" placeholder="Enter password" autoComplete="current-password" />
                <Button type="submit" className="w-full">Enter</Button>
              </form>
            </div>
          </div>
        </div>
      </StoryBlock>
    </StoryLayout>
  );
}
