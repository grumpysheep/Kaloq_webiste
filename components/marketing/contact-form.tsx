"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/content";

const { fields } = contact.form;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Unable to send");
      setSubmitted(true);
    } catch {
      setError(contact.form.errorMessage);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-background-subtle p-10 text-center">
        <h2 className="text-xl font-semibold text-foreground">{contact.form.successHeading}</h2>
        <p className="mt-2 text-sm text-foreground-muted">{contact.form.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={fields.name.label} name="name" placeholder={fields.name.placeholder} required />
        <Field label={fields.email.label} name="email" type="email" placeholder={fields.email.placeholder} required />
      </div>
      <Field label={fields.company.label} name="company" placeholder={fields.company.placeholder} required />

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField label={fields.useCase.label} name="useCase" options={fields.useCase.options} required />
        <SelectField label={fields.volume.label} name="volume" options={fields.volume.options} required />
      </div>

      <label className="block">
        <span className="text-xs font-medium text-foreground-muted">{fields.message.label}</span>
        <textarea
          name="message"
          rows={4}
          placeholder={fields.message.placeholder}
          className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-brand"
        />
      </label>

      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}

      <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
        {sending ? "Sending…" : contact.form.submitLabel}
      </Button>
      <p className="max-w-xl text-xs leading-relaxed text-foreground-muted">
        By submitting this form, you acknowledge that Kaloq will use the information provided to respond to your request as described in our{" "}
        <Link href="/legal/privacy" className="underline underline-offset-2 hover:text-foreground">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground-muted">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-brand"
      />
    </label>
  );
}

function SelectField({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground-muted">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-1.5 w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-brand"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
