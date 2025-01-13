"use client";

import Particles from "@/components/ui/particles";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Blocks,
  ChevronRight,
  Component,
  PlayIcon,
  Webhook,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-grow w-full bg-background relative flex items-center">
      <div className="w-full flex flex-col gap-5 h-full justify-center items-center px-4 md:px-0">
        <div className="bg-accent/50 rounded-full text-sm px-4 py-2 w-fit flex items-center gap-2">
          <Component className="size-4" /> Composable Components
          <ChevronRight className="size-4" />
        </div>

        <div className="text-center">
          {" "}
          <h1 className="text-5xl font-semibold tracking-tight">
            Library Built on top of{" "}
            <span className="text-transparent bg-gradient-to-t from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text font-bold">
              Shadcn
            </span>
          </h1>{" "}
          <p className="text-muted-foreground text-sm mt-2">
            Dive into custom-made composable components.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link
            href="/docs/hero-banner"
            className="bg-accent flex gap-1 items-center px-4 py-2 rounded-full text-sm hover:bg-accent/70"
          >
            Browse Components <ArrowTopRightIcon />
          </Link>
          <Link
            href="https://github.com/bwestwood11/ui-cart"
            className="bg-foreground justify-center flex gap-2 items-center text-background px-4 py-2 rounded-full text-sm hover:bg-foreground/70"
          >
            <GitHubLogoIcon />
            Visit Repo{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
