"use client";

import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import {
  Sparkles,
  TrendingUp,
  Eye,
  DollarSign,
  Users,
  Calendar as CalendarIcon,
  Zap,
  CheckCircle2,
  XCircle,
  Plus,
  Send,
  Loader2,
  LogOut,
  ChevronRight,
  Video,
  Bot,
  FileText,
  PenTool,
  CheckSquare,
  Clock,
  Camera,
  Shield,
  Briefcase,
  UserCheck,
  PhoneCall,
  CalendarCheck,
  Building2,
  Check
} from "lucide-react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  // Selected Dashboard Role View
  const [activeRole, setActiveRole] = useState<"founder" | "executive" | "admin" | "editor" | "cameraman">("founder");

  // Main Active Tab inside Portal
  const [activeTab, setActiveTab] = useState<"dashboard" | "intake" | "agreements" | "calendar" | "booking">("dashboard");

  // AI Content Generator State (FastAPI backed)
  const [topic, setTopic] = useState("Dental Clinic Implant Offer");
  const [platform, setPlatform] = useState("instagram");
  const [generating, setGenerating] = useState(false);
  const [aiOutput, setAiOutput] = useState<any>(null);

  // Intake Form State
  const [intakeData, setIntakeData] = useState({
    businessName: "",
    category: "clinic",
    contactPerson: "",
    phone: "",
    email: "",
    currentMonthlyRevenue: "₹2,00,000 - ₹5,00,000",
    primaryGoal: "Lead Generation & Appointments",
  });
  const [intakeSubmitted, setIntakeSubmitted] = useState(false);

  // Digital Signing State
  const [signedName, setSignedName] = useState("");
  const [isSigned, setIsSigned] = useState(false);

  // Booking System State
  const [selectedDate, setSelectedDate] = useState("2026-08-05");
  const [selectedTime, setSelectedTime] = useState("11:00 AM");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleGenerateContent = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);

    try {
      const res = await fetch("/api/generate-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, platform, tone: "viral" }),
      });
      const data = await res.json();
      setAiOutput(data);
    } catch (err) {
      console.error(err);
    } finally {
      setGenerating(false);
    }
  };

  const handleIntakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIntakeSubmitted(true);
  };

  const handleDigitalSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (signedName.trim()) {
      setIsSigned(true);
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#060709] text-gray-100 selection:bg-indigo-500">
      {/* Portal Top Bar */}
      <header className="glass-panel border-b border-white/10 px-4 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              AURON<span className="text-indigo-500">.PORTAL</span>
            </span>
          </Link>
          <span className="hidden sm:inline px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase">
            Auron Media Internal & Client Workflow
          </span>
        </div>

        {/* Role View Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 text-xs font-medium overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveRole("founder")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeRole === "founder"
                ? "bg-indigo-600 text-white font-bold shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Shield className="w-3.5 h-3.5" /> Founder
          </button>
          <button
            onClick={() => setActiveRole("executive")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeRole === "executive"
                ? "bg-indigo-600 text-white font-bold shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" /> Executive
          </button>
          <button
            onClick={() => setActiveRole("admin")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeRole === "admin"
                ? "bg-indigo-600 text-white font-bold shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" /> Admin
          </button>
          <button
            onClick={() => setActiveRole("editor")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeRole === "editor"
                ? "bg-indigo-600 text-white font-bold shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Video className="w-3.5 h-3.5" /> Editor
          </button>
          <button
            onClick={() => setActiveRole("cameraman")}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeRole === "cameraman"
                ? "bg-indigo-600 text-white font-bold shadow"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Camera className="w-3.5 h-3.5" /> Cameraman
          </button>
        </div>

        {/* User Auth Info */}
        <div className="flex items-center gap-4">
          {session ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right text-xs">
                <div className="font-bold text-white">{session.user?.name || "Client User"}</div>
                <div className="text-gray-400 text-[10px]">{session.user?.email}</div>
              </div>
              <img
                src={session.user?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"}
                alt="Avatar"
                className="w-9 h-9 rounded-full border border-indigo-500/50"
              />
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="p-2 rounded-xl bg-white/5 hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="btn-glow px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white"
            >
              Sign In With Google
            </button>
          )}
        </div>
      </header>

      {/* Main Navigation Sub-Bar */}
      <div className="bg-slate-950/60 border-b border-white/10 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-4 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
              activeTab === "dashboard"
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Zap className="w-4 h-4 text-indigo-400" />
            Active Role Workspace ({activeRole.toUpperCase()})
          </button>
          <button
            onClick={() => setActiveTab("intake")}
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
              activeTab === "intake"
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <FileText className="w-4 h-4 text-purple-400" />
            Client Intake & Strategy
          </button>
          <button
            onClick={() => setActiveTab("agreements")}
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
              activeTab === "agreements"
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <PenTool className="w-4 h-4 text-emerald-400" />
            Agreements & Digital Signing
          </button>
          <button
            onClick={() => setActiveTab("calendar")}
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
              activeTab === "calendar"
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <CalendarIcon className="w-4 h-4 text-amber-400" />
            Content Calendar & Analytics
          </button>
          <button
            onClick={() => setActiveTab("booking")}
            className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
              activeTab === "booking"
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <PhoneCall className="w-4 h-4 text-cyan-400" />
            Strategy Call Scheduler
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">

        {/* TAB 1: ROLE WORKSPACE DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* Header Banner */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-slate-900/60 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold uppercase">
                  Current View: {activeRole.toUpperCase()} DASHBOARD
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Auron Media Growth Command Center 🚀
                </h1>
                <p className="text-xs sm:text-sm text-gray-300">
                  Managing clients in Hyderabad (Clinics, Salons, Gyms, Restaurants & Retail).
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase transition-all"
                >
                  Back to Agency Site
                </Link>
              </div>
            </div>

            {/* Role-Specific Metric Cards */}
            {activeRole === "founder" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel rounded-2xl p-5 border border-indigo-500/30 space-y-2 bg-gradient-to-b from-indigo-950/30 to-transparent">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Total Agency Revenue
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white">₹4,85,000 / mo</div>
                  <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +28% YoY Growth
                  </div>
                </div>

                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Active Retainer Clients
                    <Users className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-black text-white">12 Local Brands</div>
                  <div className="text-[11px] text-indigo-300 font-semibold">
                    Clinics, Gyms, Salons, Dining
                  </div>
                </div>

                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Combined Organic Reach
                    <Eye className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-black text-white">17 Lakhs+</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">
                    79% Conversion Rate
                  </div>
                </div>

                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Lead-to-Client Velocity
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-amber-400">4.2 Days</div>
                  <div className="text-[11px] text-gray-400">Average Contract Closure</div>
                </div>
              </div>
            )}

            {activeRole === "executive" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Strategy Roadmaps Active
                    <FileText className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-black text-white">12 Roadmaps</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">100% On Schedule</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Average Campaign ROAS
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white">4.8x</div>
                  <div className="text-[11px] text-indigo-300 font-semibold">Google & Meta Ads</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    WhatsApp Bot Automations
                    <Bot className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-black text-white">24×7 Active</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">1,420 Auto-Replies / wk</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Client NPS Rating
                    <Star className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-amber-400">9.8 / 10</div>
                  <div className="text-[11px] text-gray-400">Verified Client Feedback</div>
                </div>
              </div>
            )}

            {activeRole === "admin" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Pending Intake Submissions
                    <FileText className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-black text-white">3 Pending</div>
                  <div className="text-[11px] text-indigo-300 font-semibold">Ready for Review</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Agreements Signed
                    <PenTool className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white">12 Verified</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">Digitally Executed</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Monthly Billing Status
                    <DollarSign className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-white">100% Cleared</div>
                  <div className="text-[11px] text-gray-400">Automated Invoicing</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Active User Accounts
                    <Users className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-black text-white">28 Portal Users</div>
                  <div className="text-[11px] text-indigo-300 font-semibold">Role-Based Access</div>
                </div>
              </div>
            )}

            {activeRole === "editor" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Reels In Editing Queue
                    <Video className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-black text-white">8 Short-Form Videos</div>
                  <div className="text-[11px] text-indigo-300 font-semibold">Target Delivery: 48h</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Approved Creatives
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white">24 Reels Ready</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">Color Graded & Captioned</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Client Revisions Pending
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-amber-400">1 Request</div>
                  <div className="text-[11px] text-gray-400">Dental Clinic Reel Hook</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Average Render Speed
                    <Zap className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-black text-white">1.2 Hours</div>
                  <div className="text-[11px] text-indigo-300 font-semibold">4K High-Bitrate</div>
                </div>
              </div>
            )}

            {activeRole === "cameraman" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Upcoming On-Site Shoots
                    <Camera className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-black text-white">4 Shoots Scheduled</div>
                  <div className="text-[11px] text-indigo-300 font-semibold">Banjara Hills & Jubilee Hills</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Raw Footage Uploaded
                    <Video className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-white">140 GB Footage</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">Synced to Editor Cloud</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Camera Gear Status
                    <CheckSquare className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-black text-white">Sony FX3 Ready</div>
                  <div className="text-[11px] text-gray-400">Gimbal & Wireless Mic Ready</div>
                </div>
                <div className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    Client Shoot Approval Rate
                    <Star className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-black text-amber-400">100%</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">Zero Reshoots</div>
                </div>
              </div>
            )}

            {/* AI Script & Content Generation Tool */}
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-6">
                <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-lg font-bold text-white">Content Approval & Workflow Queue</h3>
                      <p className="text-xs text-gray-400">Real-time status across Editor, Cameraman, and Client Review</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-bold">
                      Active Hyderabad Campaigns
                    </span>
                  </div>

                  {/* Task Item 1 */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded bg-pink-500/20 text-pink-300 font-bold uppercase text-[10px]">
                        Medical Clinic Reel
                      </span>
                      <span className="text-gray-400">Location: Banjara Hills, Hyd</span>
                    </div>
                    <p className="text-xs text-gray-200 font-medium">
                      "Doctor Testimonial & Before/After Smile Transformation — 30s High-Conversion Hook"
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                      <span className="text-indigo-400 font-semibold flex items-center gap-1">
                        <Video className="w-3.5 h-3.5" /> Editor: Render Completed (4K 60fps)
                      </span>
                      <button className="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-[11px] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Approve for Release
                      </button>
                    </div>
                  </div>

                  {/* Task Item 2 */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold uppercase text-[10px]">
                        Luxury Salon Shoot
                      </span>
                      <span className="text-gray-400">Location: Jubilee Hills, Hyd</span>
                    </div>
                    <p className="text-xs text-gray-200 font-medium">
                      "Bridal Hair & Makeup Transformation Reel with WhatsApp Booking Keyword Trigger"
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                      <span className="text-amber-400 font-semibold flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5" /> Cameraman: Shoot Scheduled Tomorrow 2 PM
                      </span>
                      <button className="px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold text-[11px]">
                        View Shotlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* FastAPI AI Generator */}
              <div className="lg:col-span-5 space-y-6">
                <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-6 bg-gradient-to-b from-indigo-950/30 to-slate-900/60">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">FastAPI Local Script AI Engine</h3>
                      <p className="text-xs text-gray-400">Generate viral captions & local hooks</p>
                    </div>
                  </div>

                  <form onSubmit={handleGenerateContent} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">Topic / Local Niche</label>
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-gray-300">Target Social Platform</label>
                      <select
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500 text-xs"
                      >
                        <option value="instagram">Instagram Reels (Hyderabad)</option>
                        <option value="tiktok">TikTok Organic</option>
                        <option value="linkedin">LinkedIn Authority Post</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={generating}
                      className="w-full btn-glow py-3 rounded-xl font-bold text-white text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      {generating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          Generating AI Script...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          Generate Local Reel Draft
                        </>
                      )}
                    </button>
                  </form>

                  {aiOutput && (
                    <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 space-y-3">
                      <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex justify-between">
                        Generated Local Reel Script
                        <span className="text-emerald-400 text-[10px]">FastAPI Ready</span>
                      </div>
                      <p className="text-xs text-gray-200 whitespace-pre-line leading-relaxed">
                        {aiOutput.generatedContent}
                      </p>
                      <div className="flex flex-wrap gap-1 pt-2">
                        {aiOutput.hashtags?.map((tag: string, i: number) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CLIENT INTAKE FORMS & STRATEGY APPROVAL */}
        {activeTab === "intake" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/15 space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase">
                  Client Intake Portal
                </div>
                <h2 className="text-2xl font-extrabold text-white">Local Business Intake & Strategy Brief</h2>
                <p className="text-xs text-gray-300">
                  Provide your business parameters to unlock your customized growth roadmap from founder Mohammed Bilal.
                </p>
              </div>

              {intakeSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Intake Form Submitted Successfully!</h3>
                  <p className="text-xs text-gray-300">
                    Our team at Auron Media Marketing (Hyderabad) is preparing your strategy blueprint. You can now preview and sign your digital agreement.
                  </p>
                  <button
                    onClick={() => setActiveTab("agreements")}
                    className="btn-glow px-6 py-2.5 rounded-xl text-xs font-bold uppercase text-white"
                  >
                    Proceed to Digital Agreement →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleIntakeSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-gray-300">Business / Brand Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Dental Clinic"
                        value={intakeData.businessName}
                        onChange={(e) => setIntakeData({ ...intakeData, businessName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-semibold text-gray-300">Local Business Category</label>
                      <select
                        value={intakeData.category}
                        onChange={(e) => setIntakeData({ ...intakeData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option value="clinic">Medical Clinic / Doctor</option>
                        <option value="salon">Salon & Spa / Beauty</option>
                        <option value="gym">Gym & Fitness Center</option>
                        <option value="restaurant">Restaurant & Dining</option>
                        <option value="retail">Retail & Shopping Outlet</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-gray-300">Contact Person Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={intakeData.contactPerson}
                        onChange={(e) => setIntakeData({ ...intakeData, contactPerson: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-semibold text-gray-300">Phone Number (WhatsApp)</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={intakeData.phone}
                        onChange={(e) => setIntakeData({ ...intakeData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-gray-300">Primary Goal for Next 90 Days</label>
                    <select
                      value={intakeData.primaryGoal}
                      onChange={(e) => setIntakeData({ ...intakeData, primaryGoal: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Lead Generation">High-Intent Appointment Bookings</option>
                      <option value="Local Virality">Instagram Reels Viral Reach (10 Lakhs+ views)</option>
                      <option value="Automation">24×7 WhatsApp Auto-Replies & CRM Setup</option>
                      <option value="Full Package">Full Premium Suite Package (Content + Ads + Website)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-glow py-3.5 rounded-xl text-white font-bold uppercase tracking-wider text-xs"
                  >
                    Submit Intake & Request Strategy Approval
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: AGREEMENT PREVIEW & DIGITAL SIGNING */}
        {activeTab === "agreements" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/15 space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase">
                  Contract & Legal Compliance
                </div>
                <h2 className="text-2xl font-extrabold text-white">Service Agreement & Digital Signing</h2>
                <p className="text-xs text-gray-300">
                  Review and sign your digital service agreement with Auron Media Marketing (Hyderabad).
                </p>
              </div>

              {/* Agreement Document Preview */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-3 font-mono leading-relaxed max-h-60 overflow-y-auto">
                <div className="text-indigo-400 font-bold text-sm">AURON MEDIA MARKETING SERVICE AGREEMENT</div>
                <div><strong>Provider:</strong> Auron Media Marketing (Founder: Mohammed Bilal), Hyderabad, Telangana, India</div>
                <div><strong>Contact:</strong> +91 83411 64263 | auronbyai@gmail.com</div>
                <div><strong>Services Scope:</strong> Content Creation, 24x7 WhatsApp Automations, High-Converting Website Funnels, Performance Paid Ads, and Local GMB SEO.</div>
                <div><strong>Terms:</strong> Monthly retainer basis with weekly reporting dashboards and 24x7 AI support maintenance.</div>
                <div><strong>Guarantee:</strong> Performance commitments as outlined in chosen pricing package (Basic / Premium / Full Suite).</div>
              </div>

              {isSigned ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Agreement Digitally Signed & Executed!</h3>
                  <p className="text-xs text-gray-300">
                    Signed by: <strong className="text-white">{signedName}</strong> on {new Date().toLocaleDateString()}
                  </p>
                  <div className="text-[11px] text-emerald-400 font-mono">Status: Legally Binding Digital Document (Verified by Supabase)</div>
                </div>
              ) : (
                <form onSubmit={handleDigitalSign} className="space-y-4">
                  <div className="space-y-1 text-xs">
                    <label className="font-semibold text-gray-300">Type Your Full Name to Sign Digitally</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Mohammed Rahil"
                      value={signedName}
                      onChange={(e) => setSignedName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold uppercase tracking-wider text-xs shadow-lg transition-all"
                  >
                    Execute Digital Signature & Approve Agreement
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: CONTENT CALENDAR & ANALYTICS TRACKING */}
        {activeTab === "calendar" && (
          <div className="space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/10">
                <div>
                  <h2 className="text-xl font-bold text-white">Monthly Content Calendar & Distribution Schedule</h2>
                  <p className="text-xs text-gray-400">Track short-form reels, testimonial videos, and SEO posts across platforms</p>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">12 Reels Scheduled</span>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold">4 Shoots Complete</span>
                </div>
              </div>

              {/* Grid Calendar representation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { day: "Aug 03 (Mon)", title: "Clinic Patient Review Reel", status: "Published", reach: "45,000 views" },
                  { day: "Aug 05 (Wed)", title: "Salon Hair Care Tutorial", status: "Scheduled", reach: "Pending" },
                  { day: "Aug 07 (Fri)", title: "Gym Membership Promo", status: "In Edit Queue", reach: "Pending" },
                  { day: "Aug 10 (Mon)", title: "Restaurant Chef Behind-The-Scenes", status: "Scheduled", reach: "Pending" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="text-[11px] font-bold text-indigo-400">{item.day}</div>
                    <div className="text-xs font-semibold text-white">{item.title}</div>
                    <div className="flex items-center justify-between pt-2 text-[10px]">
                      <span className="px-2 py-0.5 rounded bg-white/10 text-gray-300">{item.status}</span>
                      <span className="text-emerald-400 font-semibold">{item.reach}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: STRATEGY CALL SCHEDULING SYSTEM */}
        {activeTab === "booking" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-panel rounded-3xl p-8 border border-white/15 space-y-6">
              <div className="space-y-2 border-b border-white/10 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase">
                  1-on-1 Consultation
                </div>
                <h2 className="text-2xl font-extrabold text-white">Book Strategy Call with Founder Mohammed Bilal</h2>
                <p className="text-xs text-gray-300">
                  Select your preferred date & time slot for a 30-minute growth roadmap session.
                </p>
              </div>

              {bookingConfirmed ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Strategy Call Confirmed!</h3>
                  <p className="text-xs text-gray-300">
                    Scheduled for <strong className="text-white">{selectedDate}</strong> at <strong className="text-white">{selectedTime}</strong> with Mohammed Bilal.
                  </p>
                  <p className="text-[11px] text-gray-400">
                    Meeting details & Google Meet link have been dispatched to your email and WhatsApp (+91 83411 64263).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-semibold text-gray-300">Select Date</label>
                      <input
                        type="date"
                        required
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-semibold text-gray-300">Select Time Slot (IST)</label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option value="10:00 AM">10:00 AM IST</option>
                        <option value="11:30 AM">11:30 AM IST</option>
                        <option value="03:00 PM">03:00 PM IST</option>
                        <option value="05:30 PM">05:30 PM IST</option>
                        <option value="07:00 PM">07:00 PM IST</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold uppercase tracking-wider text-xs shadow-lg transition-all"
                  >
                    Confirm Booking & Lock Slot
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
