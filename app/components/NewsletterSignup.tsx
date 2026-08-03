"use client";

import { useState } from "react";

type NewsletterSignupProps = {
  idPrefix?: string;
  onSuccess?: () => void;
  compact?: boolean;
};

export default function NewsletterSignup({
  idPrefix = "newsletter",
  onSuccess,
  compact = false,
}: NewsletterSignupProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") as string)?.trim();
    const firstName = (formData.get("firstName") as string)?.trim();
    const lastName = (formData.get("lastName") as string)?.trim();
    const generalAudience = formData.get("generalAudience") === "on";
    const venuesPresenters = formData.get("venuesPresenters") === "on";

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          generalAudience,
          venuesPresenters,
        }),
      });
      const data = (await res.json()) as {
        error?: string;
        doubleOptIn?: boolean;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage(
        data.doubleOptIn
          ? "Thanks! You're signed up. Check your inbox to confirm your subscription."
          : "You're signed up! We'll be in touch when we have updates.",
      );
      form.reset();
      onSuccess?.();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div>
      <h2 className={compact ? "text-xl font-bold mb-3" : "text-2xl font-bold mb-4"}>
        Jump aboard!
      </h2>
      <p className={compact ? "mb-3 text-base" : "mb-4 text-lg"}>
        Ahoy, mateys! Add yer name for an occasional message in a bottle.
      </p>
      <form
        onSubmit={handleSubmit}
        className={compact ? "space-y-3" : "space-y-4 max-w-md"}
      >
        <div>
          <label
            htmlFor={`${idPrefix}-email`}
            className="block font-medium mb-1"
          >
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={status === "loading"}
            className="w-full border border-black/30 px-3 py-2 bg-white disabled:opacity-60"
          />
        </div>
        <div>
          <label
            htmlFor={`${idPrefix}-fname`}
            className="block font-medium mb-1"
          >
            First name <span className="text-red-600">*</span>
          </label>
          <input
            id={`${idPrefix}-fname`}
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            disabled={status === "loading"}
            className="w-full border border-black/30 px-3 py-2 bg-white disabled:opacity-60"
          />
        </div>
        <div>
          <label
            htmlFor={`${idPrefix}-lname`}
            className="block font-medium mb-1"
          >
            Last name
          </label>
          <input
            id={`${idPrefix}-lname`}
            name="lastName"
            type="text"
            autoComplete="family-name"
            disabled={status === "loading"}
            className="w-full border border-black/30 px-3 py-2 bg-white disabled:opacity-60"
          />
        </div>
        <div>
          <span className="block font-medium mb-2">
            Please choose one or more options
          </span>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <input
                id={`${idPrefix}-general`}
                name="generalAudience"
                type="checkbox"
                disabled={status === "loading"}
                className="disabled:opacity-60"
              />
              <label htmlFor={`${idPrefix}-general`}>General audience</label>
            </li>
            <li className="flex items-center gap-2">
              <input
                id={`${idPrefix}-venues`}
                name="venuesPresenters"
                type="checkbox"
                disabled={status === "loading"}
                className="disabled:opacity-60"
              />
              <label htmlFor={`${idPrefix}-venues`}>Venues/presenters</label>
            </li>
          </ul>
          <p className="text-sm text-black/70 mt-1">Select at least one.</p>
        </div>
        {message && (
          <p
            className={
              status === "error"
                ? "text-red-700 font-medium"
                : status === "success"
                  ? "text-green-800 font-medium"
                  : ""
            }
            role="status"
          >
            {message}
          </p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-2 bg-[#8f181c] text-white font-medium disabled:opacity-60 hover:bg-[#72090d] transition-colors"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
