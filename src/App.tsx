import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Palette, Type, Square, Tag, LayoutGrid, MousePointer2,
  ToggleLeft, AlignLeft, Layers, Sliders, ChevronRight,
  Sun, Moon, Menu, X
} from "lucide-react";

import ColorsStory from "@/stories/ColorsStory";
import TypographyStory from "@/stories/TypographyStory";
import ButtonStory from "@/stories/ButtonStory";
import BadgeStory from "@/stories/BadgeStory";
import CardStory from "@/stories/CardStory";
import ProjectCardStory from "@/stories/ProjectCardStory";
import FormStory from "@/stories/FormStory";
import FeedbackStory from "@/stories/FeedbackStory";
import LayoutStory from "@/stories/LayoutStory";
import MotionStory from "@/stories/MotionStory";

const STORIES = [
  { id: "colors", label: "Colors", icon: Palette, component: ColorsStory },
  { id: "typography", label: "Typography", icon: Type, component: TypographyStory },
  { id: "buttons", label: "Button", icon: MousePointer2, component: ButtonStory },
  { id: "badges", label: "Badge & Tags", icon: Tag, component: BadgeStory },
  { id: "cards", label: "Card", icon: Square, component: CardStory },
  { id: "projectcard", label: "Project Card", icon: LayoutGrid, component: ProjectCardStory },
  { id: "forms", label: "Form Inputs", icon: AlignLeft, component: FormStory },
  { id: "feedback", label: "Feedback", icon: ToggleLeft, component: FeedbackStory },
  { id: "layout", label: "Layout & Nav", icon: Layers, component: LayoutStory },
  { id: "motion", label: "Motion", icon: Sliders, component: MotionStory },
];

export default function App() {
  const [active, setActive] = useState("colors");
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const activeStory = STORIES.find((s) => s.id === active) ?? STORIES[0];
  const ActiveStory = activeStory.component;

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border/50 bg-card transition-transform duration-300 md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo area */}
        <div className="flex items-center justify-between border-b border-border/50 px-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
              style={{
                backgroundImage: "linear-gradient(135deg, hsl(333, 71%, 50%), hsl(30, 80%, 60%))",
                color: "white",
              }}
            >
              KB
            </div>
            <div>
              <p className="font-serif text-sm font-semibold text-foreground">Design System</p>
              <p className="text-xs text-muted-foreground">Kate Baillargeon</p>
            </div>
          </div>
          <button
            className="rounded-md p-1 text-muted-foreground hover:text-foreground md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="section-title px-2 mb-3">Components</p>
          <ul className="space-y-0.5">
            {STORIES.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => { setActive(id); setSidebarOpen(false); }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    active === id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                  aria-current={active === id ? "page" : undefined}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  {label}
                  {active === id && <ChevronRight className="ml-auto h-3 w-3" />}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Dark mode toggle */}
        <div className="border-t border-border/50 px-5 py-4">
          <button
            onClick={() => setDark(!dark)}
            className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {dark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center gap-4 border-b border-border/50 bg-card/50 px-6 py-3">
          <button
            className="rounded-md p-1 text-muted-foreground hover:text-foreground md:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Kate Baillargeon</span>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-foreground">
              {activeStory.label}
            </span>
          </div>
        </header>

        {/* Story canvas */}
        <main className="flex-1 overflow-y-auto" id="main-content">
          <ActiveStory />
        </main>
      </div>
    </div>
  );
}
