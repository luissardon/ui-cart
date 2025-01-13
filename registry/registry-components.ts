import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "hero-banner",
    type: "registry:ui",
    registryDependencies: ["button"],
    files: ["ui/hero-banner.tsx"],
  },
];
