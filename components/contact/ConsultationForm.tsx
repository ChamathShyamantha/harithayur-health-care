"use client";

import { FormEvent, useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClasses =
  "w-full rounded-xl border border-border-subtle bg-warm-white px-4 py-3 text-sm text-text-dark placeholder:text-text-muted/60 transition-colors duration-200 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20";

export function ConsultationForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim()) nextErrors.subject = "Please enter a subject.";
    if (!values.message.trim()) nextErrors.message = "Please enter a message.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setValues(initialValues);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-border-subtle bg-cream/60 p-10 text-center">
        <CheckCircle size={40} weight="fill" className="text-botanical" />
        <h3 className="font-serif text-2xl text-forest-deep">Thank you</h3>
        <p className="max-w-[40ch] text-sm leading-relaxed text-text-muted">
          Your message has been received. Our Ayurvedic experts will be in
          touch with you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-forest-deep underline underline-offset-4 hover:text-forest"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-text-dark">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="text-xs text-wood">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-text-dark">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-wood">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-text-dark">
            Phone <span className="text-text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-medium text-text-dark">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={values.subject}
            onChange={(e) => updateField("subject", e.target.value)}
            className={inputClasses}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject ? (
            <p id="subject-error" className="text-xs text-wood">
              {errors.subject}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-text-dark">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`${inputClasses} resize-none`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs text-wood">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-forest px-8 py-3.5 text-sm font-semibold text-warm-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-md active:translate-y-0 active:scale-[0.98]"
      >
        Send Message
      </button>
    </form>
  );
}
