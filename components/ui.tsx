import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return <p className={`eyebrow ${dark ? "eyebrow--dark" : ""}`}>{children}</p>;
}
export function Btn({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "outline-dark" | "outline-light"; className?: string }) {
  const ext = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const cls = `btn btn--${variant} ${className}`;
  return ext ? <a href={href} className={cls}>{children}</a> : <Link href={href} className={cls}>{children}</Link>;
}
export function Arrow() { return <span aria-hidden>→</span>; }

/** Page hero used by inner pages: black band with red curtain photo */
export function PageHero({ eyebrow, title, sub, children }: { eyebrow?: string; title: ReactNode; sub?: ReactNode; children?: ReactNode }) {
  return (
    <section className="dark-section relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.9)), url(/img/hero-red-curtain.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container text-center">
        {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
        <h1 className="mx-auto mt-4 max-w-4xl text-[length:var(--text-h1)] leading-[1.1]">{title}</h1>
        {sub && <div className="mx-auto mt-4 max-w-2xl text-[15px] text-white/80">{sub}</div>}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>}
      </div>
    </section>
  );
}

/** Icon set: thin red line icons used across the site */
export function Icon({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) {
  const s = { width: size, height: size };
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const c = `text-[color:var(--color-action)] ${className}`;
  switch (name) {
    case "calendar": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>;
    case "layers": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" /></svg>;
    case "globe": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>;
    case "handshake": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><path d="M4 10l4-4 4 4 4-4 4 4-4 8-4-2-4 2-4-8z" /></svg>;
    case "leaf": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14zM5 19l8-8" /></svg>;
    case "landmark": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><path d="M3 9l9-5 9 5H3zM5 9v8M9 9v8M15 9v8M19 9v8M3 21h18" /></svg>;
    case "briefcase": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V4h6v3M3 12h18" /></svg>;
    case "mic": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" /></svg>;
    case "users": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20a6 6 0 0112 0M14 20a5 5 0 017-4" /></svg>;
    case "screen": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></svg>;
    case "flask": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" /></svg>;
    case "phone": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>;
    case "target": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></svg>;
    case "mail": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>;
    case "pin": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "check": return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>;
    default: return <svg viewBox="0 0 24 24" style={s} className={c} {...p}><circle cx="12" cy="12" r="9" /></svg>;
  }
}
