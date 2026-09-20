"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

type Item = { label: string; href: string; children?: { label: string; href: string; external?: boolean }[] };
const NAV: Item[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", children: [
    { label: "Summit 2026", href: "/summit-2026" },
    { label: "About AFN", href: "https://afrifoodnetwork.com/", external: true },
    { label: "About Uziiza", href: "https://uziiza.com/", external: true },
  ] },
  { label: "Speakers", href: "/speakers" },
  { label: "Past Events", href: "#", children: [{ label: "AFSE 2025", href: "/afse-2025" }] },
  { label: "Initiatives", href: "#", children: [
    { label: "United By Food", href: "/united-by-food" },
    { label: "African Food & Drinks Festival", href: "https://festival.afrifoodnetwork.com/", external: true },
    { label: "African Food Influencers Award", href: "https://awards.afrifoodnetwork.com/", external: true },
  ] },
  { label: "Contact", href: "/contact", children: [{ label: "Press", href: "/press" }] },
];

function Caret() { return <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden><path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>; }

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = (href: string) => href !== "#" && (href === "/" ? path === "/" : path.startsWith(href));
  return (
    <header className="absolute inset-x-0 top-0 z-[50] bg-transparent">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="African Food Summit & Expo home" className="shrink-0">
          <Image src="/img/AFSE-Logo.png" alt="AFSE African Food Summit & Expo" width={121} height={64} priority style={{ height: 64, width: "auto" }} />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-[14px] font-medium text-white">
            {NAV.map((item) => (
              <li key={item.label} className="group relative">
                <Link href={item.href} className={`inline-flex items-center gap-1 py-2 hover:text-[color:var(--color-action)] ${active(item.href) ? "text-[color:var(--color-action)]" : ""}`}>
                  {item.label}{item.children && <Caret />}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full min-w-[240px] rounded-md bg-black/95 p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.label}><Link href={c.href} target={c.external ? "_blank" : undefined} className="block rounded px-3 py-2 text-[13px] hover:bg-white/10">{c.label}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/partner-with-us" className="btn btn--primary hidden sm:inline-flex">Partner With Us <span aria-hidden>→</span></Link>
          <button type="button" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-[100] overflow-y-auto bg-black text-white">
          <div className="container flex h-20 items-center justify-between">
            <Image src="/img/AFSE-Logo.png" alt="" width={83} height={44} style={{ height: 44, width: "auto" }} />
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="p-2"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
          </div>
          <ul className="container space-y-2 pb-10 text-[18px] font-medium">
            {NAV.map((item) => (
              <li key={item.label}>
                {item.href !== "#" ? <Link href={item.href} onClick={() => setOpen(false)} className="block py-2">{item.label}</Link> : <span className="block py-2">{item.label}</span>}
                {item.children && <ul className="ml-4 space-y-1 text-[15px] text-white/70">{item.children.map((c) => <li key={c.label}><Link href={c.href} onClick={() => setOpen(false)} className="block py-1">{c.label}</Link></li>)}</ul>}
              </li>
            ))}
            <li className="pt-4"><Link href="/partner-with-us" onClick={() => setOpen(false)} className="btn btn--primary">Partner With Us <span aria-hidden>→</span></Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
