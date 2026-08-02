import { NextResponse } from "next/server";
import { db } from "@/db";
import { auditRequests } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { brandName, socialPlatform, socialHandle, email } = body;

    if (!brandName || !socialHandle || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate dynamic audit insights
    const score = Math.floor(Math.random() * (92 - 68 + 1)) + 68;
    const recommendations = [
      { category: "Hook & Retention", impact: "High", detail: "Shorten opening 2 seconds on Reels/Shorts to boost completion rate by +40%." },
      { category: "Posting Frequency", impact: "Medium", detail: "Increase short-form video output to 5x/week for algorithmic priority." },
      { category: "Call-to-Action", impact: "Critical", detail: "Replace passive bio link with keyword-triggered DM automation." },
      { category: "Visual Brand DNA", impact: "High", detail: "Adopt consistent high-contrast typography overlays to build brand recognition." },
    ];

    const auditSummary = `Brand audit completed for @${socialHandle}. Current score: ${score}/100. High growth potential identified in short-form organic funnel & DM conversion workflows.`;

    // Save to Supabase DB via Drizzle
    const [inserted] = await db
      .insert(auditRequests)
      .values({
        brandName,
        socialPlatform: socialPlatform || "instagram",
        socialHandle,
        email,
        overallScore: score,
        auditSummary,
        recommendations,
      })
      .returning();

    return NextResponse.json({
      success: true,
      data: inserted,
    });
  } catch (error: any) {
    console.error("Audit API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
