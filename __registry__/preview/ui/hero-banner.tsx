"use client";

import { HeroBanner } from "@/registry/ui/hero-banner";

const HeroBannerPreview = (props: any) => {
  return (
    <HeroBanner
      content={{
        title: "Hero Banner",
        subtitle: "This is a hero banner",
        description: "This is a hero banner description",
      }}
      mediaProps={{
        src: "https://i.pinimg.com/1200x/14/d4/c9/14d4c9758f5a23d0680013561920bbb1.jpg",
      }}
      linkProps={{ children: "Get Started", href: "/get-started" }}
      fullWidth
      headingType="hero"
      textAlign="center"
      bgColor="black"
      color="white"
      {...props}
    />
  );
};

export default HeroBannerPreview;
