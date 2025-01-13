"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { components } from "@/__registry__";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: keyof typeof components;
  hideCode?: boolean;
  align?: "start" | "center" | "end";
  shouldExpand?: boolean;
}

export function ComponentPreview({ name }: ComponentPreviewProps) {
  const Preview = React.useMemo(() => {
    const Component = components[name].component;

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <React.Suspense
      fallback={
        <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </div>
      }
    >
      {Preview}
    </React.Suspense>
  );
}
