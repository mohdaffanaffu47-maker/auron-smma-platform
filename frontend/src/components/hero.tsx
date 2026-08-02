"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, TrendingUp, Eye, Zap, Play, CheckCircle2, Star, MapPin, Building2 } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onOpenConsultation: () => void;
}

export function Hero({ onOpenAudit, onOpenConsultation }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Radial Background Glows */}
      <div className="bg-glow-orb-1 top-10 left-1/2 -translate-x-1/2" />
      <div className="bg-glow-orb-2 top-40 right-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & High-Converting CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-indigo-500/10">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                AI-Powered Local Business Growth
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Hyderabad, Telangana
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Transform Your Local Brand into a <span className="text-gradient-vibrant">Market Leader.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Auron Media Marketing builds high-converting content, 24×7 automation systems, speed-optimized websites, and hyper-local paid ad campaigns for local businesses — clinics, salons, gyms, restaurants, and retail stores.
            </motion.p>

            {/* CTA Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto btn-glow text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-white flex items-center justify-center gap-3 group shadow-xl"
              >
                <Sparkles className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform" />
                Claim Free Growth Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-xl text-gray-200 glass-panel hover:bg-white/10 border border-white/15 transition-all flex items-center justify-center gap-2 group"
              >
                <Play className="w-4 h-4 text-indigo-400 fill-indigo-400/20" />
                Book Strategy Call
              </button>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 font-medium"
            >
              <div className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Founder: Mohammed Bilal
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Clinics, Salons, Gyms, Dining & Retail
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Complete Portal & AI Systems
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Live Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Glow behind Card */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-2xl animate-pulse-slow" />

            <div className="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
              {/* Header inside Preview Card */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-semibold text-gray-400 ml-2">
                    Auron Media Performance
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold flex items-center gap-1">
                  <Zap className="w-3 h-3" /> VERIFIED RESULTS
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                  <div className="text-xs text-gray-400 flex items-center justify-between">
                    Organic Reach
                    <Eye className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-black text-white">17,00,000+</div>
                  <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 17 Lakhs+ Views
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                  <div className="text-xs text-gray-400 flex items-center justify-between">
                    Success Rate
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <div className="text-2xl font-black text-white">79%</div>
                  <div className="text-[11px] text-indigo-300 font-semibold">
                    Client Conversion Rate
                  </div>
                </div>
              </div>

              {/* Local Business Categories */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Target Business Categories
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" /> Medical & Clinics
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-400" /> Salons & Wellness
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Gyms & Fitness
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-200 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" /> Dining & Retail
                  </div>
                </div>
              </div>

              {/* Founder quote banner */}
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-xs shrink-0">
                  MB
                </div>
                <div className="text-xs">
                  <div className="text-white font-semibold">Mohammed Bilal — Founder</div>
                  <div className="text-gray-400">"Empowering Hyderabad local businesses with AI growth systems."</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Trust Metrics Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-1 glass-panel p-6 rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-extrabold text-white">12+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Local Clients Served</div>
          </div>
          <div className="space-y-1 glass-panel p-6 rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient-vibrant">17,00,000+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">17 Lakhs+ Organic Reach</div>
          </div>
          <div className="space-y-1 glass-panel p-6 rounded-2xl border border-white/10">
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient-gold">79%</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Proven Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
