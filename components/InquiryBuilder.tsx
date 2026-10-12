"use client";

import { useMemo, useState } from "react";
import { site } from "@/data/site";
import { packages } from "@/data/packages";
import { InstagramIcon } from "./Button";

const field =
  "mt-2 w-full rounded-xl border border-line bg-ink px-4 py-3 text-cream placeholder:text-muted transition-colors focus:border-field-bright focus:outline-none";
const label = "font-display text-xs uppercase tracking-[0.18em] text-cream-dim";

/**
 * Instagram can't pre-fill a DM, so this writes the message for the visitor,
 * copies it to their clipboard, and opens the DM thread so they just paste + send.
 */
export function InquiryBuilder() {
  const [form, setForm] = useState({
    name: "",
    team: "",
    date: "",
    location: "",
    type: packages[0].name,
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setStatus("idle");
  };

  const message = useMemo(() => {
    const lines = [
      `Hi Braulio! I'd like to book a shoot.`,
      form.name && `Name: ${form.name}`,
      form.team && `Team / business / family: ${form.team}`,
      `Type: ${form.type}`,
      form.date && `Date: ${new Date(form.date + "T12:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}`,
      form.location && `Location: ${form.location}`,
      form.notes && `Details: ${form.notes}`,
    ];
    return lines.filter(Boolean).join("\n");
  }, [form]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    // Open the tab synchronously so pop-up blockers allow it.
    // ("noopener" in the features string would make window.open return null.)
    const win = window.open(site.instagramDmUrl, "_blank");
    if (win) win.opener = null;
    try {
      await navigator.clipboard.writeText(message);
      setStatus("copied");
    } catch {
      setStatus("manual");
    }
    if (!win) window.location.href = site.instagramDmUrl;
  };

  return (
    <form onSubmit={send} className="grid gap-5 rounded-3xl border border-line bg-ink-2 p-6 sm:grid-cols-2 sm:p-10">
      <label className="block">
        <span className={label}>Your name</span>
        <input required value={form.name} onChange={set("name")} className={field} placeholder="Jane Parent" autoComplete="name" />
      </label>
      <label className="block">
        <span className={label}>Team / business / family</span>
        <input value={form.team} onChange={set("team")} className={field} placeholder="Team, business, or family name" />
      </label>
      <label className="block">
        <span className={label}>Type of shoot</span>
        <select value={form.type} onChange={set("type")} className={field}>
          {packages.map((p) => (
            <option key={p.id}>{p.name}</option>
          ))}
          <option>Something else</option>
        </select>
      </label>
      <label className="block">
        <span className={label}>Date</span>
        <input type="date" value={form.date} onChange={set("date")} className={`${field} [color-scheme:dark]`} />
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>Location</span>
        <input value={form.location} onChange={set("location")} className={field} placeholder="Field, venue or address" />
      </label>
      <label className="block sm:col-span-2">
        <span className={label}>Anything else?</span>
        <textarea
          value={form.notes}
          onChange={set("notes")}
          rows={4}
          className={`${field} resize-y`}
          placeholder="What's the occasion, how long, any must-have shots…"
        />
      </label>

      <div className="sm:col-span-2">
        <p className={label}>Your message preview</p>
        <pre className="mt-2 whitespace-pre-wrap rounded-xl border border-dashed border-line bg-ink/60 p-4 font-sans text-sm leading-relaxed text-cream-dim">
          {message}
        </pre>
      </div>

      <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 font-display text-sm font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-white"
        >
          <InstagramIcon /> Copy & open Instagram
        </button>
        <p className="text-sm text-cream-dim" aria-live="polite">
          {status === "copied" && "Copied! Paste it into the Instagram chat and hit send."}
          {status === "manual" && "Couldn't copy automatically. Select the preview above, copy it, then paste it in Instagram."}
          {status === "idle" && "Your message is copied, then Instagram opens so you can paste and send."}
        </p>
      </div>
    </form>
  );
}
