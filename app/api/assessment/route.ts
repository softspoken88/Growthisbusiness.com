import { NextResponse } from "next/server";

/**
 * Growth Assessment form handler.
 *
 * This is intentionally the one manual step in an otherwise
 * automated flow: it's a placeholder that validates the payload and
 * logs it. Wire it up to a real destination before launch — see
 * "Connecting the assessment form" in the README for options
 * (CRM webhook, Zapier/Make catch hook, or an email provider like
 * Resend).
 *
 * Suggested target flow once connected:
 *   Website → CRM → Confirmation Email → Internal Notification
 *   → Lead Assignment → Scheduling Link → Follow-Up Workflow
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

  // TODO: replace this log with a real integration, e.g.:
  //
  //   await fetch(process.env.ASSESSMENT_WEBHOOK_URL!, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ ...payload, source: "growthisbusiness.com" }),
  //   });
  //
  // or push directly into a CRM's API, or send via an email
  // provider (Resend, Postmark, SendGrid) to notify the team and
  // confirm receipt to the submitter.
  console.log("[assessment-request]", {
    ...payload,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
