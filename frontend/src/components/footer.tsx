"use client";

import Link from "next/link";
import { Sparkles, MapPin, Phone, Mail, Instagram, Youtube, User } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass-panel border-t border-white/10 pt-16 pb-12 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                AURON<span className="text-indigo-500">.MEDIA</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-xs">
              AI-Powered Local Business Growth Agency. Creating content, automation systems, high-converting websites, and paid campaigns for clinics, salons, gyms, restaurants, and retail.
            </p>
            <div className="space-y-1.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-indigo-400" />
                <span>Founder: <strong className="text-white">Mohammed Bilal</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/auron.mm"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-500/50 transition-all"
                title="@auron.mm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@AuronAIMarketing"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-500/50 transition-all"
                title="@AuronAIMarketing"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Contact & Support</div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:+918341164263" className="hover:text-white transition-colors">+91 83411 64263</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href="tel:+917702001163" className="hover:text-white transition-colors">+91 77020 01163</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <a href="mailto:auronbyai@gmail.com" className="hover:text-white transition-colors">auronbyai@gmail.com</a>
              </li>
              <li className="pt-2 text-gray-400">
                Instagram: <a href="https://instagram.com/auron.mm" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">@auron.mm</a>
              </li>
              <li className="text-gray-400">
                YouTube: <a href="https://youtube.com/@AuronAIMarketing" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">@AuronAIMarketing</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Growth Solutions</div>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-indigo-400 transition-colors">Social Media Content Creation</Link></li>
              <li><Link href="#services" className="hover:text-indigo-400 transition-colors">Business & WhatsApp Automation</Link></li>
              <li><Link href="#services" className="hover:text-indigo-400 transition-colors">High-Converting Websites</Link></li>
              <li><Link href="#services" className="hover:text-indigo-400 transition-colors">Performance Paid Ads</Link></li>
              <li><Link href="#services" className="hover:text-indigo-400 transition-colors">Organic GMB & Local SEO</Link></li>
            </ul>
          </div>

          {/* Client Portal Access */}
          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Client & Team Workflows</div>
            <div className="space-y-2 p-3.5 rounded-2xl bg-white/5 border border-white/5">
              <div className="text-white font-semibold text-[11px]">Multi-Role Portal Active</div>
              <p className="text-[10px] text-gray-400">
                Executive, Admin, Editor, Cameraman, & Founder Dashboards with Digital Signing & Intake Forms.
              </p>
              <Link
                href="/dashboard"
                className="inline-block mt-1 px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 text-[11px] font-bold"
              >
                Access Portal →
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>© {new Date().getFullYear()} Auron Media Marketing. Founded by Mohammed Bilal. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Hyderabad, Telangana</a>
            <a href="mailto:auronbyai@gmail.com" className="hover:text-gray-300">auronbyai@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
