"use client";

import { motion } from "framer-motion";
import { Sparkles, Video, Zap, MessageSquareCode, Globe, TrendingUp, Bot, CheckCircle2, ArrowRight, Star } from "lucide-react";

interface ServicesProps {
  onOpenAudit: () => void;
  onOpenConsultation: () => void;
}

export function Services({ onOpenAudit, onOpenConsultation }: ServicesProps) {
  const services = [
    {
      icon: Video,
      title: "Social Media Content Creation",
      description: "Short-form reels, real testimonial videos, educational/awareness content, brand creatives, and multiplatform content repurposing.",
      tag: "CONTENT & REELS",
    },
    {
      icon: MessageSquareCode,
      title: "Business & Marketing Automation",
      description: "24×7 WhatsApp auto-replies, automated lead follow-ups, appointment reminders, lead scoring, and custom CRM integration.",
      tag: "24x7 AUTOMATION",
    },
    {
      icon: Globe,
      title: "High-Converting Websites & Funnels",
      description: "Speed-optimized booking funnels, trust elements, case study sections, and local lead-capture layouts built to turn visitors into clients.",
      tag: "WEBSITES & LANDINGS",
    },
    {
      icon: Zap,
      title: "Performance Marketing (Paid Ads)",
      description: "Hyper-local Google Ads, 'Clinic near me' call campaigns, Meta (FB/IG) conversion ads, and automated retargeting funnels.",
      tag: "HIGH-ROAS ADS",
    },
    {
      icon: TrendingUp,
      title: "Organic Growth & SEO",
      description: "Google My Business (GMB) optimization, Instagram viral reels strategy, YouTube authority content, and treatment/keyword-based SEO.",
      tag: "LOCAL SEO & GMB",
    },
    {
      icon: Bot,
      title: "Strategy & AI Support",
      description: "Monthly roadmap & strategy calls, weekly performance dashboards, and 24×7 AI support & automation maintenance.",
      tag: "24/7 AI MAINTENANCE",
    },
  ];

  const packages = [
    {
      name: "Basic Plan",
      price: "₹12,999",
      period: "per month",
      popular: false,
      description: "Essential brand development, content scripting, shoots, and local SEO foundation for growing businesses.",
      features: [
        "Brand identity & messaging development",
        "1-on-1 Strategy consultation call",
        "Local SEO optimization & GMB setup",
        "Creative design, scripting & video shoots",
        "Weekly & monthly performance reporting",
        "Dedicated Content Specialist",
      ],
      cta: "Get Started with Basic",
    },
    {
      name: "Premium Plan",
      price: "₹18,999",
      period: "per month",
      popular: true,
      description: "Advanced growth package including paid ad management and conversion sales funnels for local market dominance.",
      features: [
        "Includes ALL Basic Plan features",
        "Advanced brand strategy & positioning",
        "₹4,999+ Paid Ad budget management",
        "Targeted social media ad campaigns",
        "Conversion sales funnels & lead capture",
        "WhatsApp & CRM automation triggers",
        "Weekly Strategy & Optimization Sync",
      ],
      cta: "Scale with Premium Plan",
    },
    {
      name: "Full Premium Suite Package",
      price: "₹49,999",
      period: "per month",
      popular: false,
      description: "Complete end-to-end agency replacement with 24/7 AI maintenance, custom site, paid ads & dedicated production team.",
      features: [
        "Full Content + Automation + Website Suite",
        "High-converting booking website included",
        "Omnichannel Paid Ads (Google & Meta)",
        "Dedicated Videographer & Camera Team",
        "24/7 AI Support & Automation Maintenance",
        "Priority Founder Direct Channel",
      ],
      cta: "Claim Full Suite Dominance",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
        {/* Core Services Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Key Services Offered
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              End-to-End <span className="text-gradient-vibrant">AI & Marketing Growth</span> Systems
            </h2>
            <p className="text-gray-300 text-sm">
              Custom-built for local clinics, salons, gyms, restaurants, and retail businesses in Hyderabad and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/10 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-white/5 text-indigo-300 text-[10px] font-bold tracking-wider">
                      {s.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">{s.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{s.description}</p>
                  </div>

                  <button
                    onClick={onOpenAudit}
                    className="pt-4 text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 group"
                  >
                    Request Audit <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing & Packages Section */}
        <div id="pricing" className="space-y-12 pt-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Transparent <span className="text-gradient">Pricing Packages</span>
            </h2>
            <p className="text-gray-300 text-sm">
              Predictable monthly investments designed for high local ROI with zero hidden charges.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative glass-panel rounded-3xl p-8 border flex flex-col justify-between ${
                  pkg.popular
                    ? "border-indigo-500/60 bg-gradient-to-b from-indigo-950/40 via-slate-900/80 to-slate-950/90 shadow-2xl shadow-indigo-500/20"
                    : "border-white/10"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-white" /> Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <p className="text-xs text-gray-400">{pkg.description}</p>
                  </div>

                  <div className="flex items-baseline gap-1 pb-4 border-b border-white/10">
                    <span className="text-4xl font-black text-white">{pkg.price}</span>
                    <span className="text-xs text-gray-400">{pkg.period}</span>
                  </div>

                  <ul className="space-y-3 text-xs text-gray-300">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider mt-8 flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? "btn-glow text-white shadow-xl"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
