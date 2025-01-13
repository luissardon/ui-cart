import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

export type HeroBannerProps<
  M extends React.ElementType = "img",
  L extends React.ElementType = "a"
> = Omit<React.ComponentProps<"div">, "content"> &
  Partial<{
    // Content
    content: Partial<{
      title: string;
      subtitle: string;
      description: string;
    }>;
    // Custom styles
    bgColor: string;
    color: string;
    fullWidth: boolean;
    headingType: "hero" | "inline";
    textAlign: "left" | "center" | "right";
    // Custom components
    LinkComponent: L;
    MediaComponent: M;
    mediaProps: React.ComponentPropsWithoutRef<M>;
    linkProps: React.ComponentPropsWithoutRef<L>;
  }>;

export function HeroBanner({
  content,
  bgColor,
  color,
  fullWidth,
  headingType,
  textAlign,
  MediaComponent = "img",
  LinkComponent = "a",
  mediaProps,
  linkProps,
  ...props
}: HeroBannerProps) {
  const isInlineType = headingType === "inline";
  const Title = isInlineType ? "h1" : "div";
  const Subtitle = isInlineType ? "h2" : "div";
  const Description = isInlineType ? "p" : "div";

  return (
    <section
      {...props}
      className={cn(
        "max-h-screen overflow-hidden flex justify-center content-center items-center relative",
        !bgColor && "bg-muted",
        !color && "text-muted-foreground",
        fullWidth ? "w-full" : "max-w-screen-xl mx-auto",
        props.className
      )}
      style={{
        backgroundColor: bgColor ?? "",
        color: color ?? "",
        ...props.style,
      }}
    >
      {mediaProps && (
        <MediaComponent
          {...mediaProps}
          className={cn(
            "object-cover w-full h-full md:min-h-96",
            mediaProps.className
          )}
          style={{
            aspectRatio: `${mediaProps.width}/${mediaProps.height}`,
            ...mediaProps.style,
          }}
        />
      )}

      <div className="absolute pt-12 px-8 pb-4 md:pt-24 md:px-16 md:pb-8 w-full h-full flex justify-center items-center">
        <div
          className={cn(
            "container flex flex-col gap-3 md:gap-6 drop-shadow-lg",
            textAlign === "left" && "items-start",
            textAlign === "center" && "items-center",
            textAlign === "right" && "items-end"
          )}
        >
          {content?.subtitle && (
            <Subtitle className="text-sm">{content?.subtitle}</Subtitle>
          )}

          {content?.title && (
            <Title className="text-4xl md:text-6xl">{content?.title}</Title>
          )}

          {content?.description && (
            <Description className="text-md md:text-lg">
              {content?.description}
            </Description>
          )}

          {linkProps && (
            <Button
              asChild
              variant="secondary"
              className={cn("px-8 py-6 text-base")}
            >
              <LinkComponent {...linkProps} />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
