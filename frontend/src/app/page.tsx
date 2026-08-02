"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AuditModal } from "@/components/audit-modal";
import { LeadModal } from "@/components/lead-modal";
import { RoiCalculator } from "@/components/roi-calculator";
import { CaseStudies } from "@/components/case-studies";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function Home() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#060709] text-gray-100 selection:bg-indigo-500 selection:text-white">
      {/* Header Navbar */}
      <Navbar
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Hero Banner with High Conversion CTAs */}
      <Hero
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Services & Packages Section */}
      <Services
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Interactive Growth Projection Engine */}
      <RoiCalculator
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Proven Case Studies & Client Results */}
      <CaseStudies
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Testimonials & Global CTA Banner */}
      <Testimonials
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />

      <LeadModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </main>
  );
}
