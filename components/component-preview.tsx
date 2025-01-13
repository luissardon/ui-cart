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

export function ComponentPreview({
  name,
  className,
  align = "center",
  shouldExpand = false,
  hideCode = false,
  ...props
}: ComponentPreviewProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const files = components[name].files;

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

  const Code = () => (
    <pre className="text-sm text-muted-foreground w-full">
      {files.map((file) => {
        return (
          <code className="block" key={file.path}>
            {file.content}
          </code>
        );
      })}
    </pre>
  );

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          {!hideCode && (
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Code
              </TabsTrigger>
            </TabsList>
          )}
        </div>
        <TabsContent
          value="preview"
          className={cn(isExpanded && "h-full", "relative rounded-md border")}
        >
          {shouldExpand && (
            <>
              {!isExpanded && (
                <div className="absolute bottom-0 right-0 left-0 w-full h-[200px] bg-gradient-to-t from-background to-transparent z-[19]"></div>
              )}
              <Button
                variant="outline"
                className="absolute right-1/2 translate-x-1/2 bottom-5 z-[20]"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {!isExpanded ? "Expand" : "Collapse"}
              </Button>
            </>
          )}

          <div
            className={cn(
              "preview flex min-h-[480px] w-full justify-center p-5",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              }
            )}
          >
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
          </div>
        </TabsContent>
        <TabsContent
          value="code"
          className={cn(
            !isExpanded && "h-[480px] overflow-auto",
            "relative rounded-md border"
          )}
        >
          <div className={cn("preview flex min-h-[350px] w-full p-5")}>
            <Code />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
