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
        src: "https://images.contentstack.io/v3/assets/bltd2fcd5ec0e630d61/blt9759a290b94c2ad3/66a944dd610c418351420b45/CommerceUISpace.png",
      }}
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
