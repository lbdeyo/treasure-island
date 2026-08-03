"use client";

import { useEffect, useId, useRef, useState } from "react";
import NewsletterSignup from "@/app/components/NewsletterSignup";

const STORAGE_KEY = "ti-newsletter-modal-dismissed";
const SHOW_DELAY_MS = 1800;

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage failures (private mode, etc.)
    }
    setOpen(false);
  }

  useEffect(() => {
    let alreadyDismissed = false;
    try {
      alreadyDismissed = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadyDismissed = false;
    }

    if (alreadyDismissed) return;

    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        dismiss();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <button
        type="button"
        aria-label="Dismiss mailing list signup"
        className="absolute inset-0 bg-black/55"
        onClick={dismiss}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full sm:max-w-md max-h-[92vh] overflow-y-auto border-3 border-black bg-[url('/img/art/paper-light.jpg')] bg-cover p-5 sm:p-6 shadow-xl"
      >
        <div className="flex items-start justify-between gap-4 mb-2">
          <p id={titleId} className="sr-only">
            Mailing list signup
          </p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={dismiss}
            className="ml-auto -mt-1 -mr-1 px-2 py-1 text-2xl leading-none text-black/70 hover:text-black"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <NewsletterSignup
          idPrefix="newsletter-modal"
          compact
          onSuccess={() => {
            window.setTimeout(dismiss, 1600);
          }}
        />

        <button
          type="button"
          onClick={dismiss}
          className="mt-4 text-sm text-black/70 underline-offset-2 hover:underline"
        >
          No thanks, maybe later
        </button>
      </div>
    </div>
  );
}
