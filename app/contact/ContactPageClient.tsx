"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const SUPPORT_EMAIL = "hello@satosushi.co";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPageClient() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Failed to send. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("An unexpected error occurred. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="border-b border-neutral-100 pb-16 mb-16 max-w-xl">
        <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
          Contact
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-6 leading-tight">
          Get in touch
        </h1>
        <p className="text-neutral-500 leading-relaxed">
          For product questions, billing inquiries, refund requests, or anything
          else — use the form below or email us directly. We reply within one
          business day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Form */}
        <div>
          {status === "success" ? (
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-6 py-10 text-center">
              <div className="text-2xl mb-3">✉️</div>
              <h2 className="text-lg font-semibold text-neutral-900 mb-2">
                Message sent!
              </h2>
              <p className="text-sm text-neutral-500 mb-6">
                We received your message and will reply within one business day.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm text-neutral-600 underline underline-offset-2 hover:opacity-60 transition-opacity"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-widest"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-neutral-200 bg-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-widest"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-neutral-200 bg-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-widest"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-neutral-200 bg-white text-neutral-700 focus:outline-none focus:border-neutral-400 transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option>Product question</option>
                  <option>Billing or refund</option>
                  <option>Partnership or press</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-neutral-500 mb-2 uppercase tracking-widest"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us what's on your mind..."
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm rounded-lg border border-neutral-200 bg-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-12 pt-1">
          <div>
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Email
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-sm text-neutral-900 hover:opacity-60 transition-opacity"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
          <div>
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Support hours
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Monday – Friday
              <br />
              9 AM – 6 PM (UTC+8)
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Response time
            </p>
            <p className="text-sm text-neutral-500">
              Typically within 1 business day.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Billing &amp; refunds
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              For billing questions or refund requests, please include the
              product name and the email address on your account. See our{" "}
              <a
                href="/refund-policy"
                className="text-neutral-900 underline underline-offset-2 hover:opacity-60 transition-opacity"
              >
                Refund Policy
              </a>{" "}
              for full details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
