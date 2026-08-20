"use client";

import { useState, type FormEvent } from "react";

const COMPANY_SIZES = [
  "Just me / 1-2 employees",
  "3-10 employees",
  "11-25 employees",
  "26-50 employees",
  "51-100 employees",
  "100+ employees",
];

const CHALLENGES = [
  "Generating More Revenue",
  "Lead Follow-Up",
  "Sales Process",
  "CRM",
  "Automation",
  "Operational Efficiency",
  "Technology / Systems",
  "Reporting",
  "Scaling",
  "Workforce Training",
  "LMS Selection / Replacement",
  "Compliance & Safety Training",
  "Training Content",
  "Custom Course Development",
  "Not Sure Yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function GrowthAssessmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending this. Please try again, or email hello@growthisbusiness.com directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bp-corners rounded-2xl border border-line bg-paper p-8 text-center sm:p-12">
        <p className="bp-label text-good">Received</p>
        <h3 className="mt-4 font-display text-[1.6rem] font-semibold text-ink-text">
          Thanks — that&rsquo;s on its way to our team.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
          We&rsquo;ll review what you shared and follow up within one business
          day to schedule your Growth Assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Field label="Name" name="name" required autoComplete="name" />
      <Field label="Company" name="company" required autoComplete="organization" />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
      />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      <Field label="Website" name="website" placeholder="yourcompany.com" />
      <Field label="Industry" name="industry" placeholder="e.g. HVAC, property management" />

      <label className="flex flex-col gap-2 text-[13.5px] font-medium text-ink-text sm:col-span-2">
        Approximate Company Size
        <select
          name="companySize"
          className="rounded-lg border border-line bg-paper px-3.5 py-3 text-[15px] text-ink-text focus:border-structural"
          defaultValue=""
        >
          <option value="" disabled>
            Select a range
          </option>
          {COMPANY_SIZES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <fieldset className="sm:col-span-2">
        <legend className="text-[13.5px] font-medium text-ink-text">
          Biggest Challenge
        </legend>
        <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {CHALLENGES.map((c) => (
            <label
              key={c}
              className="flex items-center gap-2.5 rounded-lg border border-line px-3.5 py-2.5 text-[14px] text-ink-text/90 has-[:checked]:border-structural has-[:checked]:bg-structural/5"
            >
              <input type="radio" name="challenge" value={c} className="accent-[#2C57A6]" />
              {c}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2 text-[13.5px] font-medium text-ink-text sm:col-span-2">
        Tell us what&rsquo;s happening.
        <textarea
          name="details"
          rows={4}
          placeholder="What's prompting you to look into this now?"
          className="rounded-lg border border-line bg-paper px-3.5 py-3 text-[15px] text-ink-text placeholder:text-ink-muted/60 focus:border-structural"
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-paper-text transition-colors hover:bg-ink-3 disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Request My Free Assessment"}
        </button>
        {status === "error" && errorMessage && (
          <p className="mt-3 text-[13.5px] text-red-700">{errorMessage}</p>
        )}
        <p className="mt-4 text-[12.5px] leading-relaxed text-ink-muted">
          By submitting, you agree to be contacted about your assessment.
          We don&rsquo;t sell or share your information.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-[13.5px] font-medium text-ink-text">
      {label}
      {required && <span className="sr-only">(required)</span>}
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="rounded-lg border border-line bg-paper px-3.5 py-3 text-[15px] text-ink-text placeholder:text-ink-muted/60 focus:border-structural"
      />
    </label>
  );
}
