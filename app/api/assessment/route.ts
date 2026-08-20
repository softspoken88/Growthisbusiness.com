import { NextResponse } from "next/server";

/**
 * Growth Assessment form handler.
 *
 * Validates the submission, logs it, and — if RESEND_API_KEY is
 * configured — emails a notification to NOTIFY_EMAIL_TO (defaults
 * to jcollins@growthisbusiness.com below). If the key isn't set yet,
 * or Resend fails to deliver, the visitor still sees success; we log
 * the problem server-side instead of showing a broken form.
 *
 * send.growthisbusiness.com is verified in Resend for sending, so
 * once RESEND_API_KEY is set in Vercel this sends for real.
 */

type AssessmentPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  website?: string;
  industry?: string;
  companySize?: string;
  challenge?: string;
  details?: string;
};

const REQUIRED_FIELDS: (keyof AssessmentPayload)[] = ["name", "company", "email"];
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL_TO || "jcollins@growthisbusiness.com";

export async function POST(request: Request) {
  let payload: AssessmentPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = REQUIRED_FIELDS.filter((field) => !payload[field]?.toString().trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing required field(s): ${missing.join(", ")}` },
      { status: 422 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (payload.email && !emailPattern.test(payload.email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 422 });
  }

  console.log("[assessment-request]", { ...payload, receivedAt: new Date().toISOString() });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      `[assessment-request] RESEND_API_KEY not set — submission logged only, nothing emailed to ${NOTIFY_EMAIL}`
    );
    return NextResponse.json({ ok: true });
  }

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Grow This Business Website <notifications@send.growthisbusiness.com>",
        to: [NOTIFY_EMAIL],
        reply_to: payload.email,
        subject: `New Growth Assessment — ${payload.company}`,
        text: `NEW GROWTH ASSESSMENT REQUEST

Name: ${payload.name}
Company: ${payload.company}
Email: ${payload.email}
Phone: ${payload.phone || "Not provided"}
Website: ${payload.website || "Not provided"}
Industry: ${payload.industry || "Not provided"}
Company Size: ${payload.companySize || "Not provided"}
Biggest Challenge: ${payload.challenge || "Not provided"}

DETAILS:
${payload.details || "Not provided"}

Submitted from GrowThisBusiness.com`,
      }),
    });

    if (!emailResponse.ok) {
      const emailError = await emailResponse.text();
      console.error("[assessment-request] Resend error:", emailError);
    }
  } catch (err) {
    console.error("[assessment-request] Failed to reach Resend:", err);
  }

  return NextResponse.json({ ok: true });
}
