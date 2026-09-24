import type { Metadata } from "next";
import { Btn, Arrow } from "@/components/ui";
export const metadata: Metadata = { title: "Page not found", robots: { index: false } };
export default function NotFound() {
  return (
    <section className="dark-section flex min-h-[70vh] items-center pt-20" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.68), rgba(0,0,0,0.92)), url(/img/hero-red-curtain.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="container py-20 text-center">
        <p className="text-[13px] uppercase tracking-[0.14em] text-[color:var(--afse-red-on-dark)]">Error 404</p>
        <h1 className="mx-auto mt-4 max-w-2xl text-[length:var(--text-h1)]">This page has moved on</h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] text-white/80">The page you were looking for is not here. It may have been part of the previous site. Everything about AFSE UK 2026 is one click away.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Btn href="/">Back to the Summit <Arrow /></Btn>
          <Btn href="/summit-2026" variant="outline-dark">Summit 2026</Btn>
        </div>
      </div>
    </section>
  );
}
