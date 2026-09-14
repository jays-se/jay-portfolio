"use client"

import { useId, useState, type FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { analyticsEvents, trackEvent } from "@/lib/analytics"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export type ContactFormValues = {
  name: string
  email: string
  message: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID

function fieldClassName(invalid: boolean) {
  return cn(
    "mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors",
    "placeholder:text-muted-foreground/70",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    invalid &&
      "border-destructive aria-invalid:border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
  )
}

export function ContactForm() {
  const formId = useId()
  const nameId = `${formId}-name`
  const emailId = `${formId}-email`
  const messageId = `${formId}-message`
  const statusId = `${formId}-status`
  const nameErrorId = `${formId}-name-error`
  const emailErrorId = `${formId}-email-error`
  const messageErrorId = `${formId}-message-error`

  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({})
  const [status, setStatus] = useState<FormStatus>("idle")

  if (!formspreeId) {
    return (
      <div className="rounded-lg border border-border bg-secondary/40 p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          The contact form is not configured yet. Email{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          >
            {siteConfig.contact.email}
          </a>{" "}
          directly, or set{" "}
          <code className="font-mono text-xs text-foreground">
            NEXT_PUBLIC_FORMSPREE_ID
          </code>{" "}
          to enable this form.
        </p>
      </div>
    )
  }

  function validate(next: ContactFormValues): Partial<ContactFormValues> {
    const nextErrors: Partial<ContactFormValues> = {}
    if (!next.name.trim()) nextErrors.name = "Please enter your name."
    if (!next.email.trim()) {
      nextErrors.email = "Please enter your email."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
      nextErrors.email = "Please enter a valid email address."
    }
    if (!next.message.trim()) {
      nextErrors.message = "Please enter a short message."
    }
    return nextErrors
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle")
      return
    }

    setStatus("submitting")

    try {
      const response = await fetch(
        `https://formspree.io/f/${formspreeId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            message: values.message.trim(),
            _subject: "Portfolio contact form",
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Formspree request failed")
      }

      trackEvent(analyticsEvents.contactFormSubmit, {
        location: "contact",
        status: "success",
      })
      setValues({ name: "", email: "", message: "" })
      setErrors({})
      setStatus("success")
    } catch {
      trackEvent(analyticsEvents.contactFormSubmit, {
        location: "contact",
        status: "error",
      })
      setStatus("error")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-describedby={statusId}
    >
      <div>
        <label
          htmlFor={nameId}
          className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase"
        >
          Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? nameErrorId : undefined}
          className={fieldClassName(Boolean(errors.name))}
        />
        {errors.name ? (
          <p id={nameErrorId} className="mt-1.5 text-sm text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={emailId}
          className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase"
        >
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? emailErrorId : undefined}
          className={fieldClassName(Boolean(errors.email))}
        />
        {errors.email ? (
          <p id={emailErrorId} className="mt-1.5 text-sm text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={messageId}
          className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase"
        >
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, message: event.target.value }))
          }
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? messageErrorId : undefined}
          className={cn(fieldClassName(Boolean(errors.message)), "resize-y min-h-28")}
        />
        {errors.message ? (
          <p id={messageErrorId} className="mt-1.5 text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          type="submit"
          size="lg"
          className="h-11 px-5 text-sm"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      </div>

      <p
        id={statusId}
        role="status"
        aria-live="polite"
        className={cn(
          "text-sm",
          status === "success" && "text-foreground",
          status === "error" && "text-destructive",
          (status === "idle" || status === "submitting") && "sr-only"
        )}
      >
        {status === "success"
          ? "Thanks — your message was sent. I’ll get back to you soon."
          : status === "error"
            ? `Something went wrong. Please try again or email ${siteConfig.contact.email}.`
            : status === "submitting"
              ? "Sending your message."
              : ""}
      </p>
    </form>
  )
}
