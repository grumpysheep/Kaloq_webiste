"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/content";

const { fields } = contact.form;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("[Kaloq contact form submission]", data);
    setSubmitted(true);
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
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={fields.name.label} name="name" placeholder={fields.name.placeholder} required />
        <Field label={fields.email.label} name="email" type="email" placeholder={fields.email.placeholder} required />
      </div>
      <Field label={fields.company.label} name="company" placeholder={fields.company.placeholder} required />

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField label={fields.useCase.label} name="useCase" options={fields.useCase.options} />
        <SelectField label={fields.volume.label} name="volume" options={fields.volume.options} />
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

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {contact.form.submitLabel}
      </Button>
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

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground-muted">{label}</span>
      <select
        name={name}
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
