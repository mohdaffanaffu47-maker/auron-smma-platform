import {
  pgTable,
  text,
  timestamp,
  integer,
  primaryKey,
  boolean,
  uuid,
  jsonb,
} from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters";

// --- NextAuth Tables ---
export const users = pgTable("user", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  role: text("role").default("client"), // 'client' | 'admin'
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

// --- SMMA Business Tables ---

export const leads = pgTable("leads", {
  id: uuid("id").primaryKey().defaultRandom(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  companyName: text("company_name"),
  socialHandle: text("social_handle"),
  monthlyBudget: text("monthly_budget"),
  primaryGoal: text("primary_goal"), // 'brand_awareness' | 'lead_gen' | 'viral_reels' | 'full_management'
  status: text("status").default("new"), // 'new' | 'contacted' | 'booked' | 'converted'
  createdAt: timestamp("created_at").defaultNow(),
});

export const auditRequests = pgTable("audit_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  brandName: text("brand_name").notNull(),
  socialPlatform: text("social_platform").notNull(), // 'instagram' | 'tiktok' | 'youtube' | 'linkedin'
  socialHandle: text("social_handle").notNull(),
  email: text("email").notNull(),
  overallScore: integer("overall_score").default(78),
  auditSummary: text("audit_summary"),
  recommendations: jsonb("recommendations"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const campaigns = pgTable("campaigns", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  platforms: text("platforms").notNull(), // e.g. "Instagram, TikTok, YouTube"
  status: text("status").default("active"), // 'draft' | 'active' | 'completed' | 'paused'
  monthlyBudget: integer("monthly_budget").default(5000),
  impressionsCount: integer("impressions_count").default(145000),
  conversionsCount: integer("conversions_count").default(1240),
  startDate: timestamp("start_date").defaultNow(),
});

export const socialPosts = pgTable("social_posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  campaignId: uuid("campaign_id").references(() => campaigns.id, { onDelete: "cascade" }),
  platform: text("platform").notNull(), // 'instagram' | 'tiktok' | 'x' | 'linkedin'
  caption: text("caption").notNull(),
  mediaUrl: text("media_url"),
  status: text("status").default("scheduled"), // 'draft' | 'scheduled' | 'approved' | 'published'
  scheduledFor: timestamp("scheduled_for").defaultNow(),
  engagementRate: text("engagement_rate").default("4.8%"),
});

export const analytics = pgTable("analytics", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").references(() => users.id, { onDelete: "cascade" }),
  period: text("period").notNull(), // e.g. "2026-Q3"
  totalImpressions: integer("total_impressions").default(1250000),
  totalLeads: integer("total_leads").default(340),
  avgEngagement: text("avg_engagement").default("5.2%"),
  adSpendUsd: integer("ad_spend_usd").default(8500),
  roiMultiplier: text("roi_multiplier").default("4.2x"),
  updatedAt: timestamp("updated_at").defaultNow(),
});
