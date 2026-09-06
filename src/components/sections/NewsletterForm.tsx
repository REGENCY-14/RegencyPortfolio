"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Presentational-with-local-state newsletter form. No fetch call lives here
 * (dependency inversion) — wire a real `onSubmit` handler in from the parent
 * once there's a subscription endpoint to call.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return <p className="text-sm text-sage-dark">Thanks — you&apos;re on the list.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="curator@domain.com"
        aria-label="Email address"
        className="h-10 flex-1 rounded-card border border-hairline bg-white px-4 text-sm text-ink placeholder:text-body focus:outline-none focus:ring-2 focus:ring-sage"
      />
      <Button type="submit" size="sm">
        Subscribe
      </Button>
    </form>
  );
}
