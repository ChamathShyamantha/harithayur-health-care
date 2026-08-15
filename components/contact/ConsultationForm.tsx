"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
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

// Inputs sit on --color-ink so they read as wells cut into the panel rather than
// pale boxes floating on it. Bone text on ink clears AA comfortably.
const inputClasses =
  "w-full rounded-soft border border-border-subtle bg-warm-white px-4 py-3 text-sm text-forest-deep placeholder:text-text-muted/70 transition-colors duration-200 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/25 aria-[invalid=true]:border-wood";

const fieldOrder: (keyof FormValues)[] = ["name", "email", "phone", "subject", "message"];

export function ConsultationForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);

  // Screen readers need the confirmation announced, not just rendered.
  useEffect(() => {
    if (submitted) confirmationRef.current?.focus();
  }, [submitted]);

  function updateField(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  function validate(): Partial<Record<keyof FormValues, string>> {
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
    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate();
    const firstInvalid = fieldOrder.find((field) => validationErrors[field]);
    if (firstInvalid) {
      // Send focus to the first field that needs attention.
      formRef.current?.querySelector<HTMLElement>(`#${firstInvalid}`)?.focus();
      return;
    }

    setSubmitted(true);
    setValues(initialValues);
  }

  if (submitted) {
    return (
      <div
        ref={confirmationRef}
        role="status"
        tabIndex={-1}
        className="focus-ring flex flex-col items-start gap-4 rounded-soft border border-border-subtle bg-warm-white p-10"
      >
        <CheckCircle size={40} weight="fill" className="text-botanical" aria-hidden />
        <h3 className="display text-2xl text-forest-deep">Thank you</h3>
        <p className="max-w-[40ch] text-sm leading-relaxed text-text-muted">
          Your message has been received. Our Ayurvedic experts will be in
          touch with you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="focus-ring rounded-soft text-sm font-medium text-botanical underline underline-offset-4 hover:text-botanical"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[0.8125rem] font-medium text-forest-deep">
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
            <p id="name-error" role="alert" className="text-xs text-botanical">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[0.8125rem] font-medium text-forest-deep">
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
            <p id="email-error" role="alert" className="text-xs text-botanical">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-[0.8125rem] font-medium text-forest-deep">
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
          <label htmlFor="subject" className="text-[0.8125rem] font-medium text-forest-deep">
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
            <p id="subject-error" role="alert" className="text-xs text-botanical">
              {errors.subject}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[0.8125rem] font-medium text-forest-deep">
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
          <p id="message-error" role="alert" className="text-xs text-botanical">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="focus-ring mt-2 inline-flex w-fit items-center justify-center rounded-soft bg-forest px-8 py-3.5 text-[0.8125rem] font-medium tracking-[0.02em] text-forest-deep transition-colors duration-300 ease-out hover:bg-forest-deep active:scale-[0.99]"
      >
        Send Message
      </button>
    </form>
  );
}
