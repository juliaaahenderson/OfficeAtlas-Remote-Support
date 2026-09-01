"use client";

import { useState } from "react";
import RemoteSupportHero from "./RemoteSupportHero";
import QuickSupportNav from "./QuickSupportNav";
import WhatWeHelp from "./WhatWeHelp";
import OfficeAppSupport from "./OfficeAppSupport";
import HowItWorksTimeline from "./HowItWorksTimeline";
import CommonProblemsList from "./CommonProblemsList";
import FeatureHighlightSection from "./FeatureHighlightSection";
import WhyOfficeAtlasTrust from "./WhyOfficeAtlasTrust";
import ExistingResourcesLinks from "./ExistingResourcesLinks";
import RemoteSupportFAQ from "./RemoteSupportFAQ";
import FinalCTA from "./FinalCTA";
import RemoteSupportModal from "./RemoteSupportModal";

export default function RemoteSupportHomepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState<string | undefined>(undefined);

  const handleOpenModal = (topic?: string) => {
    setModalTopic(topic);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex-1 flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <RemoteSupportHero onOpenSupportModal={handleOpenModal} />

      {/* 2. Quick Support Navigation */}
      <QuickSupportNav onSelectCategory={handleOpenModal} />

      {/* 3. What Can We Help You With? */}
      <WhatWeHelp />

      {/* 4. Office Application Support */}
      <OfficeAppSupport />

      {/* 5. How Remote Support Works */}
      <HowItWorksTimeline />

      {/* 6. Common Office Problems */}
      <CommonProblemsList />

      {/* 7. Remote Support Feature Section */}
      <FeatureHighlightSection />

      {/* 8. Why OfficeAtlas */}
      <WhyOfficeAtlasTrust />

      {/* 9. Quick Links to Existing OfficeAtlas Content */}
      <ExistingResourcesLinks />

      {/* 10. FAQ Accordion */}
      <RemoteSupportFAQ />

      {/* 11. Final CTA */}
      <FinalCTA onOpenSupportModal={handleOpenModal} />

      {/* Interactive Remote Support Modal (Displays "Connect to Support Agent" Client Download Overlay on Click) */}
      <RemoteSupportModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialTopic={modalTopic}
      />
    </main>
  );
}
