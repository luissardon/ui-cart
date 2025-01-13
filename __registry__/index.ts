import React from "react";

export const components = {
  "hero-banner": {
    name: "hero-banner",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: [
      {
        type: "registry:ui",
        content: `import { HeroBanner } from "@/components/ui/hero-banner"
 
export function HeroBannerDemo() {
  return <HeroBanner
    content={{
      title: "Title",
      subtitle: "Subtitle",
      description: "Description",
    }}
    mediaProps={{
      src: "https://images....ceUISpace.png",
    }}
    fullWidth
    headingType="hero"
    textAlign="center"
    bgColor="black"
    color="white"
  />
}`,
        path: "ui/hero-banner.tsx",
        target: "components/ui/hero-banner.tsx",
      },
    ],
    component: React.lazy(() => import("./preview/ui/hero-banner")),
  },
} as const;
