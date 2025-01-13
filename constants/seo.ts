import { Metadata } from "next";

export const SEO_METADATA = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "C3 UI - Get Access to UI Components",
    description:
      "C3 UI is a library of UI components and blocks that uses Shadcn CLI to deliver a seamless experience for developers.",
    url: "https://www.uicart.io",
    siteName: "UICart.io",
    locale: "en_US",
    type: "website",
  },
  category: "technology",
  generator: "Next.js",
  applicationName: "C3 UI",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Luis Sardon" }],
  creator: "Concord",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  verification: {},
} satisfies Metadata;
