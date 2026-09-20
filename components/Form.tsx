"use client";
import { useState, type ReactNode } from "react";

/** Posts to /api/forms (Resend relay to the summit inbox); children are the fields. */
export default function Form({ name, children, submit = "Submit", thanks = "Thanks! We have received your message.", className = "", full = false }: { name: string; children: ReactNode; submit?: string; thanks?: string; className?: string; full?: boolean }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending");
    const fd = new FormData(e.currentTarget); fd.set("_form", name);
    const r = await fetch("/api/forms", { method: "POST", body: fd }).catch(() => null);
    setState(r && r.ok ? "done" : "error");
  }
  if (state === "done") return <p className="rounded bg-[color:var(--afse-grey-100)] p-4 text-[13px] font-semibold text-black">{thanks}</p>;
  return (
    <form onSubmit={onSubmit} className={className}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {children}
      {state === "error" && <p className="mt-2 text-[13px] text-red-600">Something went wrong. Please email summit@afrifoodnetwork.com.</p>}
      <button type="submit" disabled={state === "sending"} className={`btn btn--primary ${full ? "w-full justify-center" : ""} disabled:opacity-60`}>{state === "sending" ? "Sending…" : submit}</button>
    </form>
  );
}
