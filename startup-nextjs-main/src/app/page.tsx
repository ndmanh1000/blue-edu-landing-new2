import AboutSectionOne from "@/components/About/AboutSectionOne";

import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Story from "@/components/Story";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blue Edu - LMS gọn nhẹ + AI siêu tốc cho giáo viên thời đại mới",
  description: "Blue Edu - LMS gọn nhẹ + AI siêu tốc cho giáo viên thời đại mới",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <Story />
      <Pricing />
      <Testimonials />
      <Blog />

    </>
  );
}
