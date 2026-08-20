"use client";

import Hero from "@/components/Hero";
import EcosystemMap from "@/components/EcosystemMap";
import FeaturedGrid from "@/components/FeaturedGrid";
import Comparison from "@/components/Comparison";
import LearningPath from "@/components/LearningPath";
import ResearchInsights from "@/components/ResearchInsights";
import InstallationGuide from "@/components/InstallationGuide";
import LatestBlogs from "@/components/LatestBlogs";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
      <EcosystemMap />
      <FeaturedGrid />
      <Comparison />
      <LearningPath />
      <ResearchInsights />
      <InstallationGuide />
      <LatestBlogs />
      <Newsletter />
    </main>
  );
}
