import { cn } from "@/lib/utils";

interface StoryLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function StoryLayout({ title, description, children }: StoryLayoutProps) {
  return (
    <div className="mx-auto max-w-5xl px-8 py-10">
      <div className="mb-10 border-b border-border/50 pb-6">
        <p className="section-title">Component</p>
        <h1 className="font-serif text-4xl font-bold text-foreground">{title}</h1>
        {description && (
          <p className="mt-3 text-lg text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="space-y-12">{children}</div>
    </div>
  );
}

interface StoryBlockProps {
  title: string;
  description?: string;
  code?: string;
  children: React.ReactNode;
  canvas?: "light" | "dark" | "auto" | "checkered";
}

export function StoryBlock({ title, description, code, children, canvas = "auto" }: StoryBlockProps) {
  return (
    <section>
      <h2 className="font-serif text-xl font-semibold text-foreground mb-1">{title}</h2>
      {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
      <div
        className={cn(
          "rounded-2xl border border-border/50 overflow-hidden",
          canvas === "checkered" && "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjBmMGYwIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmMGYwZjAiLz48L3N2Zz4=')]"
        )}
      >
        <div className="flex min-h-[120px] flex-wrap items-center justify-center gap-4 p-8">
          {children}
        </div>
        {code && (
          <div className="border-t border-border/50 bg-muted/30 px-6 py-4">
            <pre className="font-mono text-xs text-muted-foreground overflow-x-auto">{code}</pre>
          </div>
        )}
      </div>
    </section>
  );
}

interface TokenRowProps {
  label: string;
  value: string;
  swatch?: string;
  description?: string;
}

export function TokenRow({ label, value, swatch, description }: TokenRowProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-card px-5 py-3">
      {swatch && (
        <div
          className="h-10 w-10 flex-shrink-0 rounded-lg border border-border/30 shadow-sm"
          style={{ background: swatch }}
        />
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
        <code className="mt-1.5 inline-block sm:hidden font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full">
          {value}
        </code>
      </div>
      <code className="hidden sm:block flex-shrink-0 font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full">
        {value}
      </code>
    </div>
  );
}
