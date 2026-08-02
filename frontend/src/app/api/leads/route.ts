import { NextResponse } from "next/server";
import { db } from "@/db";
import { leads } from "@/db/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, companyName, socialHandle, monthlyBudget, primaryGoal } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Full name and email are required" },
        { status: 400 }
      );
    }

    // Save lead into Supabase DB via Drizzle
    const [inserted] = await db
      .insert(leads)
      .values({
        fullName,
        email,
        phone: phone || null,
        companyName: companyName || null,
        socialHandle: socialHandle || null,
        monthlyBudget: monthlyBudget || "$5,000 - $10,000",
        primaryGoal: primaryGoal || "viral_reels",
        status: "new",
      })
      .returning();

    return NextResponse.json({
      success: true,
      message: "Lead successfully recorded",
      data: inserted,
    });
  } catch (error: any) {
    console.error("Leads API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
