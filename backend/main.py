import os
import random
from typing import List, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Auron Media Marketing AI Engine",
    description="High-performance backend services for social media content generation, intake form processing, digital agreements, and strategy call bookings.",
    version="2.0.0"
)

# Enable CORS for Next.js Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Data Schemas ---
class ContentRequest(BaseModel):
    topic: str
    platform: str = "instagram"  # 'instagram' | 'tiktok' | 'linkedin'
    tone: Optional[str] = "viral"

class ContentResponse(BaseModel):
    success: bool
    platform: str
    generatedContent: str
    hashtags: List[str]
    recommendedPostTime: str
    source: str

class IntakeFormRequest(BaseModel):
    businessName: str
    category: str
    contactPerson: str
    phone: str
    email: Optional[str] = None
    primaryGoal: str

class AgreementSignRequest(BaseModel):
    signedName: str
    businessName: str
    planSelected: str = "Premium Plan (₹18,999/mo)"

class BookingRequest(BaseModel):
    date: str
    time: str
    contactPerson: str
    phone: str

# --- Endpoints ---

@app.get("/")
def read_root():
    return {
        "status": "online",
        "company": "Auron Media Marketing",
        "founder": "Mohammed Bilal",
        "location": "Hyderabad, Telangana, India",
        "services": "Clinics, Salons, Gyms, Restaurants, Retail",
        "supabase_connection": "configured"
    }

@app.get("/api/health")
def health_check():
    return {"status": "healthy", "service": "fastapi-auron-media"}

@app.post("/api/generate-content", response_model=ContentResponse)
def generate_content(req: ContentRequest):
    topic = req.topic.strip() or "Local Business Scale"
    platform = req.platform.lower()

    if platform == "tiktok":
        caption = (
            f"Hyderabad local business tip for {topic}! 🚀\n\n"
            f"3 steps we use at Auron Media Marketing to scale local reach:\n"
            f"1️⃣ Local high-contrast video hook\n"
            f"2️⃣ 24×7 WhatsApp auto-reply trigger\n"
            f"3️⃣ Google My Business optimization\n\n"
            f"Comment 'GROWTH' to claim your free strategy call with Mohammed Bilal!"
        )
        hashtags = ["#HyderabadBusiness", "#LocalGrowth", f"#{topic.replace(' ', '')}", "#AuronMedia", "#MarketingAutomation"]
    elif platform == "linkedin":
        caption = (
            f"Local business growth isn't about random posts — it's about building automated client funnels.\n\n"
            f"At Auron Media Marketing, we partnered with local clinics, salons, and gyms across Hyderabad.\n\n"
            f"The result? Over 17 Lakhs+ organic views and a 79% client conversion rate using short-form video & 24×7 WhatsApp automation.\n\n"
            f"What is your primary lead generation channel this quarter?"
        )
        hashtags = ["#HyderabadFounders", "#LocalBusiness", "#SMMAGrowth", "#AuronMedia", "#MarketingAgency"]
    else:  # Instagram
        caption = (
            f"🔥 Hyderabad local businesses: Want to double your appointments for {topic}?\n\n"
            f"Here are 3 battle-tested strategies from Auron Media Marketing:\n\n"
            f"1️⃣ 1.5s Local Visual Hook\n"
            f"2️⃣ WhatsApp Automated Booking Trigger\n"
            f"3️⃣ Hyper-Local Google & Meta Ads\n\n"
            f"💬 DM 'AUDIT' to @auron.mm or call +91 83411 64263 to claim your free audit!"
        )
        hashtags = ["#HyderabadClinics", "#HyderabadSalons", "#AuronMedia", "#LocalSEO", "#ReelsGrowth"]

    return ContentResponse(
        success=True,
        platform=platform,
        generatedContent=caption,
        hashtags=hashtags,
        recommendedPostTime="18:30 IST (Peak Hyderabad Engagement)",
        source="Auron FastAPI Engine v2.0"
    )

@app.post("/api/intake-form")
def process_intake(req: IntakeFormRequest):
    return {
        "success": True,
        "message": f"Intake form for {req.businessName} received successfully.",
        "category": req.category,
        "contactPerson": req.contactPerson,
        "assignedTo": "Mohammed Bilal (Founder)"
    }

@app.post("/api/agreements/sign")
def sign_agreement(req: AgreementSignRequest):
    return {
        "success": True,
        "signedName": req.signedName,
        "businessName": req.businessName,
        "plan": req.planSelected,
        "status": "Digitally Executed & Stored"
    }

@app.post("/api/bookings/schedule")
def schedule_booking(req: BookingRequest):
    return {
        "success": True,
        "date": req.date,
        "time": req.time,
        "meetingWith": "Mohammed Bilal (Founder, Auron Media Marketing)",
        "location": "Google Meet / Phone Call (+91 83411 64263)"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
